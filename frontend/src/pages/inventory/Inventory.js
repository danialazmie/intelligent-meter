export default function Inventory() {
  return (
    <div className="min-h-[calc(100vh-7rem)] p-6">
      <div className="mb-6">
        <h1 className="font-serif text-3xl mb-1">Meter Inventory</h1>
        <p className="text-slate-500">Manage water meter all in one place</p>
      </div>

      <div className="flex justify-between mb-7">
        <div className="flex">
          <input
            type="text"
            placeholder="Search by meter serial or meter owner"
            className="border border-r-0 border-black rounded-l-full w-96 px-3 py-2"
          />
          <button className="border border-black rounded-r-full px-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        <button className="flex gap-1.5 items-center rounded-full border border-black px-3 text-sm pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
          Update Meter
        </button>

        <button className="flex gap-1.5 items-center text-white bg-rose-600 rounded-full px-3 text-sm pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
          Delete Meter
        </button>

        <button className="flex gap-1.5 items-center text-white bg-black rounded-full px-3 text-sm pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          New Meter
        </button>
      </div>

      <div className="overflow-x-auto bg-yellow-100">
        <table className="w-full whitespace-nowrap border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 whitespace-nowrap">
                <input type="checkbox" />
              </th>
              <th className="border border-slate-600 whitespace-nowrap">
                Meter Serial
              </th>
              <th className="border border-slate-600 whitespace-nowrap">
                Model
              </th>
              <th className="border border-slate-600 whitespace-nowrap">
                Size
              </th>
              <th className="border border-slate-600 whitespace-nowrap">
                Type
              </th>
              <th className="border border-slate-600 p-2 whitespace-nowrap">
                Meter Age
              </th>
              <th className="border border-slate-600 p-2 whitespace-nowrap">
                Warranty Status
              </th>
              <th className="border border-slate-600 p-2 whitespace-nowrap">
                Manufacturer
              </th>
              <th className="border border-slate-600 p-2 whitespace-nowrap">
                Meter Owner
              </th>
              <th className="border border-slate-600 p-2 whitespace-nowrap">
                Region
              </th>
              <th className="border border-slate-600 p-2 whitespace-nowrap">
                Tracking Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                M1001
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Meter Model
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                24 x 32
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Industrial
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                18 months
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Active
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                George Kent
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Jimmy Ting
                </a>
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Petaling Jaya
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Processing
                </a>
              </td>
            </tr>

            <tr>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                M1001
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Meter Model
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                24 x 32
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Industrial
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                18 months
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Active
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                George Kent
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Jimmy Ting
                </a>
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Petaling Jaya
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Processing
                </a>
              </td>
            </tr>

            <tr>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                M1001
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Meter Model
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                24 x 32
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Industrial
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                18 months
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Active
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                George Kent
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Jimmy Ting
                </a>
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Petaling Jaya
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Processing
                </a>
              </td>
            </tr>

            <tr>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <input type="checkbox" />
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                M1001
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Meter Model
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                24 x 32
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Industrial
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                18 months
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Active
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                George Kent
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Jimmy Ting
                </a>
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                Petaling Jaya
              </td>
              <td className="border border-slate-700 p-2 whitespace-nowrap">
                <a href="#" className="text-blue-400">
                  Processing
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
