import WindowWrapper from "#hoc/WindowWrapper"
import WindowControls from "./WindowControls"
import useWindowStore from "#store/window"

type ImgFileData = {
  name: string
  imageUrl: string
}

const ImgFile = () => {
  const { windows } = useWindowStore()
  const data = windows["imgfile"]?.data as ImgFileData | null

  if (!data) return null

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-4">
        <img src={data.imageUrl} alt={data.name} className="w-full rounded-md object-cover" />
      </div>
    </>
  )
}

const ImgFileWindow = WindowWrapper(ImgFile, "imgfile")
export default ImgFileWindow