import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routers from "./route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routers />
  </StrictMode>
);
