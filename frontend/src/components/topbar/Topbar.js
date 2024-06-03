import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Topbar() {
  return (
    <div className="h-16 flex items-center justify-end px-8">
      <div className="flex items-center gap-3">
        <div className="relative">
        <div className="absolute top-0 right-0.5 z-10 h-2.5 w-2.5 rounded-full bg-red-500"></div>
          <BellIcon className="size-6"/>
        </div>
        <UserCircleIcon className="size-9 stroke-1" />
        <p className="mt-0.5">Jimmy Ting</p>
      </div>
    </div>
  );
}
