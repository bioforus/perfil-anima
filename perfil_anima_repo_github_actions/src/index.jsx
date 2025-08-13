import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PginaPerfil } from "./screens/PginaPerfil";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <PginaPerfil />
  </StrictMode>,
);
