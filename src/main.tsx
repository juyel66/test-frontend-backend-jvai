import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./Component/Dashboard/DashboardPage";
import Tables from "./Component/tables/Tables";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    children: [
  
      {
        path: "tables",
        element: <Tables />, 
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <div className="">
      <RouterProvider router={router} />
  </div>
  </StrictMode>
);
