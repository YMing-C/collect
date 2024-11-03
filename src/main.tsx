import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import "@/theme/normalize.less";
import "@/theme/global.less";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
