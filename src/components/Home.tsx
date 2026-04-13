import { locations } from "#constants"
import clsx from "clsx"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Draggable from "gsap/Draggable"
import { useRef } from "react"
import useWindowStore from "#store/window"
import useLocationStore from "#store/location"

gsap.registerPlugin(Draggable)

const projects = locations.work?.children ?? []

type Project = typeof projects[number]

const Home = () => {
  const { openWindow } = useWindowStore()
  const { setActiveLocation } = useLocationStore()
  const listRef = useRef<HTMLUListElement>(null)

  const handleOpenProject = (project: Project) => {
    setActiveLocation({ ...project, type: "work" } as any)
    openWindow("finder")
  }

  useGSAP(() => {
    const items = listRef.current?.querySelectorAll<HTMLLIElement>("li")
    if (!items) return

    // Setup GSAP-powered hover animations (CSS group-hover breaks with Draggable transforms)
    items.forEach((item) => {
      const img = item.querySelector("img")
      const p = item.querySelector("p")

      item.addEventListener("mouseenter", () => {
        if (img) gsap.to(img, { backgroundColor: "rgba(0,0,0,0.1)", duration: 0.2 })
        if (p) gsap.to(p, { backgroundColor: "#3b82f6", duration: 0.2 })
      })

      item.addEventListener("mouseleave", () => {
        if (img) gsap.to(img, { backgroundColor: "transparent", duration: 0.2 })
        if (p) gsap.to(p, { backgroundColor: "transparent", duration: 0.2 })
      })
    })

    Draggable.create(items, {
      type: "x,y",
      bounds: listRef.current,
      edgeResistance: 0.65,
      inertia: true,
    })
  }, [])

  return (
    <section id="home" className="w-full h-full">
      <ul ref={listRef} className="relative w-full h-full">
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("folder absolute", project.windowPosition)}
            onClick={() => handleOpenProject(project)}
          >
            <img src="/images/folder.png" alt={project.name} className="p-1 rounded-md" />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Home