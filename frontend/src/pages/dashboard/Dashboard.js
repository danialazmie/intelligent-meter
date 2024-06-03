import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CubeIcon,
  DocumentIcon,
  FaceFrownIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-7rem)] p-8">
      <div className="mb-6">
        <h1 className="font-serif text-3xl mb-1">Dashboard</h1>
        <p className="text-slate-500">Manage water meter all in one place</p>
      </div>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3 rounded-lg bg-white shadow-sm px-6 py-5">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-2xl mb-0.5">12,454</p>
              <p>Total Meters</p>
            </div>
            <div className="rounded-full p-2 bg-blue-100">
              <CubeIcon className="size-8 stroke-1 stroke-blue-800" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ArrowTrendingUpIcon className="size-4 stroke-green-700" />
            <p className="text-sm text-green-700">3.46%</p>
            <p className="text-sm text-slate-500 ml-1.5">since last month</p>
          </div>
        </div>

        <div className="col-span-3 rounded-lg bg-white shadow-sm px-6 py-5">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-2xl mb-0.5">43</p>
              <p>New Applications</p>
            </div>
            <div className="rounded-full p-2 bg-green-100">
              <DocumentIcon className="size-8 stroke-1 stroke-green-800" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ArrowTrendingDownIcon className="size-4 stroke-red-700" />
            <p className="text-sm text-red-700">3.46%</p>
            <p className="text-sm text-slate-500 ml-1.5">since last month</p>
          </div>
        </div>

        <div className="col-span-3 rounded-lg bg-white shadow-sm px-6 py-5">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-2xl mb-0.5">17</p>
              <p>Meters Installed</p>
            </div>
            <div className="rounded-full p-2 bg-yellow-100">
              <WrenchIcon className="size-8 stroke-1 stroke-yellow-800" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ArrowTrendingUpIcon className="size-4 stroke-green-700" />
            <p className="text-sm text-green-700">12.63%</p>
            <p className="text-sm text-slate-500 ml-1.5">since last month</p>
          </div>
        </div>

        <div className="col-span-3 rounded-lg bg-white shadow-sm px-6 py-5">
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-2xl mb-0.5">21</p>
              <p>Complaints Received</p>
            </div>
            <div className="rounded-full p-2 bg-orange-100">
              <FaceFrownIcon className="size-8 stroke-1 stroke-orange-800" />
            </div>
          </div>
          <div className="flex items-center gap-1">
            <ArrowTrendingUpIcon className="size-4 stroke-red-700" />
            <p className="text-sm text-red-700">12.63%</p>
            <p className="text-sm text-slate-500 ml-1.5">since last month</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
