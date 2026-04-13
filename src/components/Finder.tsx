import WindowWrapper from "#hoc/WindowWrapper"
import { Search } from "lucide-react";
import WindowControls from "./WindowControls";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import clsx from "clsx";
import useWindowStore from "#store/window";


type LocationValue = typeof locations[keyof typeof locations];
type Child = LocationValue["children"][number];

const Finder = () => {
  const {openWindow} = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
   
 const openItem = (item: Child) => {
if (item.kind === 'folder') return setActiveLocation({ ...item, type: 'work' } as unknown as LocationValue);
  if (!('fileType' in item)) return;

  switch (item.fileType) {
    case 'pdf':
      openWindow('resume');
      break;
    case 'url':
      if ('href' in item) window.open(item.href as string, '_blank');
      break;
    case 'txt':
      openWindow('txtfile', item);
      break;
    case 'img':
      openWindow('imgfile', item);
      break;
    case 'fig':
      if ('href' in item) window.open(item.href as string, '_blank');
      break;
  }
}

  const renderList = (name: string, items: LocationValue[], type?: string) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation({ ...item, type: type || "default" })}
            className={clsx(item.id === activeLocation?.id ? "active" : "not-active")}
          >
            <img src={item.icon} className="w-4" alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          <ul>{renderList("Favorites", Object.values(locations), "favorite")}</ul>
          <ul>{renderList("Work", locations.work.children as unknown as LocationValue[], "work")}</ul>
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li 
              key={item.id}
              className={('position' in item ? item.position : "") || ""}
              onClick={() => openItem(item as Child)}
            >
              <img src={item.icon} alt={item.name}/>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;