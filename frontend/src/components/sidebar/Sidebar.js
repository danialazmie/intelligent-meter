import { Link } from "react-router-dom";

import {
  ArchiveBoxIcon,
  ArrowLeftStartOnRectangleIcon,
  HomeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import Logo from "../../assets/full-logo.png";

export default function Siderbar() {
  const links = [
    {
      name: "Dashboard",
      path: "/",
      icon: <HomeIcon className="size-6 stroke-1" />,
    },
    {
      name: "Inventory",
      path: "inventory",
      icon: <ArchiveBoxIcon className="size-6 stroke-1" />,
    },
    {
      name: "Tracking",
      path: "tracking",
      icon: <MapPinIcon className="size-6 stroke-1" />,
    },
  ];

  const renderNavLinks = () => {
    return links.map((item) => {
      return (
        <Link to={item.path} className="h-12 w-fit flex items-center gap-3">
          {item.icon}
          {/* if active, font-normal and stroke-2 */}
          <span className="pt-0.5 font-light">{item.name}</span>
        </Link>
      );
    });
  };

  return (
    <div className="h-full flex flex-col items-start justify-between px-8 py-6">
      <div>
        <img src={Logo} alt="IntelligentMeter Logo" className="h-10" />
        <div className="flex flex-col mt-6 pl-0.5">{renderNavLinks()}</div>
      </div>
      <Link to={"/"} className="h-12 flex items-center gap-3 pl-0.5">
        <ArrowLeftStartOnRectangleIcon className="size-6" />
        <span className="pt-0.5">Sign Out</span>
      </Link>
    </div>
  );
}
