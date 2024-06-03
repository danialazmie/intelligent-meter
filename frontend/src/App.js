import { Outlet } from "react-router-dom";

import "./App.css";

import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-10">
      <div className="row-span-3 col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-8">
        <Topbar />
      </div>

      <div className="col-span-8 bg-sky-100 rounded-tl-xl">
        <Outlet />
      </div>
      <div className="col-span-8">
        <div className="h-12 flex items-center justify-center bg-sky-900 font-light text-sm text-slate-50">
          &copy; 2024 IntelligentMeter. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default App;
