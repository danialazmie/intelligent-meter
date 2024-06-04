import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import PageNotFound from "./pages/404/PageNotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import Inventory from "./pages/inventory/Inventory";
import Login from "./pages/login/Login";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Wrap everything in the main app layout
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Outlet /> {/* Let App render the layout and this will show the page content */}
            <Dashboard /> 
          </ProtectedRoute>
        ),
      },
      {
        path: "inventory",
        element: (
          <ProtectedRoute>
            <Outlet />
            <Inventory />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/test/dashboard", 
        element: <Dashboard />, 
      },
      {
        path: "/test/inventory",
        element: <Inventory />,
      },
    ],
  },
]);

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check authentication status (e.g., from local storage)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token); 
  }, []);

  if (isAuthenticated === null) {
    // Loading state while checking authentication
    return <div>Loading...</div>; 
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import "./index.css";

// import App from "./App";
// import PageNotFound from "./pages/404/PageNotFound";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Inventory from "./pages/inventory/Inventory";

// import reportWebVitals from "./reportWebVitals";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <PageNotFound />,
//     children: [
//       {
//         index: true,
//         element: <Dashboard />,
//       },
//       {
//         path: "inventory",
//         element: <Inventory />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
