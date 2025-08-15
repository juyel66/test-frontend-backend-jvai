import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./Component/Dashboard/DashboardPage";
import Tables from "./Component/tables/Tables";
import DashboardContent from "./Component/Dashboard/DashboardContent";
import Billing from "./Component/Billing/Billing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
    children: [
      {
        index: true,
        element: <DashboardContent />,
      },

      {
        path: "tables",
        element: <Tables />,
        
      },
      {
        path: "/billing",
        element: <Billing/>,
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
