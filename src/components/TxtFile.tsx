import WindowWrapper from "#hoc/WindowWrapper"
import WindowControls from "./WindowControls"
import useWindowStore from "#store/window"

type TxtFileData = {
  name: string
  image?: string
  subtitle?: string
  description: string[]
}

const TxtFile = () => {
  const { windows } = useWindowStore()
  const data = windows["txtfile"]?.data as TxtFileData | null

  if (!data) return null;
  const {name, image, subtitle, description} = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {data.image && (
          <img src={image} alt={name} className="w-full rounded-md object-cover" />
        )}
        {subtitle && (
          <h3 className="text-base font-semibold">{subtitle}</h3>
        )}
        {description.map((para, idx) => (
          <p key={idx} className="text-sm leading-relaxed">{para}</p>
        ))}
      </div>
    </>
  )
}

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile")
export default TxtFileWindow