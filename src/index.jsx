import "normalize.css/normalize.css";
import "./styles/reset.css";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "./styles/index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Application from "./app/Application";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Application/>
  </StrictMode>
);
