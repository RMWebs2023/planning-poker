import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Landing from "./pages/Landing.jsx";

const router = createHashRouter([{ path: "/", element: <Landing /> }]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
);
