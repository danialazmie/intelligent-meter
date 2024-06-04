import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <div className="bg-white h-16 flex items-center justify-end px-8 shadow-md">
      {/* Added bg-white and shadow-md */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="absolute top-0 right-0.5 z-10 h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <BellIcon className="h-6 w-6" /> {/* Adjusted size for consistency */}
        </div>
        <UserCircleIcon className="h-9 w-9 stroke-1" /> {/* Adjusted size for consistency */}
        <p className="mt-0.5">Jimmy Ting</p>
      </div>
    </div>
  );
}
