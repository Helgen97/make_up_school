import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./application/App";
import "./styles/index.scss";
import "driver.js/dist/driver.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
