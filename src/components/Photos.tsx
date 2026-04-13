import WindowWrapper from "#hoc/WindowWrapper"
import WindowControls from "./WindowControls"
import { photosLinks, gallery } from "#constants"
import { useState } from "react"
import clsx from "clsx"

const Photos = () => {
  const [activeTab, setActiveTab] = useState(photosLinks[0].id)

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Photos — Gallery</h2>
      </div>

      <div className="flex h-full">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Photos</h2>
          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                className={clsx(
                  id === activeTab && "!bg-blue-100 !text-blue-700"
                )}
                onClick={() => setActiveTab(id)}
              >
                <img src={icon} className="w-4" alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Grid */}
        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li key={id}>
                <img
                  src={img}
                  alt={`Gallery image ${id}`}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, "photos")
export default PhotosWindow
