import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./Component/Dashboard/DashboardPage";
import Tables from "./Component/Tables/TablesContent";
import DashboardContent from "./Component/Dashboard/DashboardContent";
import Billing from "./Component/Billing/Billing";
import SignUp from "./Component/Auth/SignUp";
import SignIn from "./Component/Auth/SignIn";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: [
      {
        index: true, // = /dashboard
        element: <DashboardContent />,
      },
      {
        path: "tables", // = /dashboard/tables
        element: <Tables />,
      },
      {
        path: "billing", // = /dashboard/billing
        element: <Billing />,
      },
      // {
      //   path: "signup", // = /dashboard/signup
      //   element: <SignUp />,
      // },
      // {
      //   path: "signin", // = /dashboard/signin
      //   element: <SignIn />,
      // },
    ],
  },
        {
        path: "signup", // = /dashboard/signup
        element: <SignUp />,
      },
      {
        path: "signin", // = /dashboard/signin
        element: <SignIn />,
      },
]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
