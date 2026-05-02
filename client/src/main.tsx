import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply theme on startup to prevent flash
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
} else {
  // Fast fallback: use timezone instead of IP lookup
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Treat Pacific Time users as "California-like"
  const defaultDark = tz === "America/Los_Angeles";

  document.documentElement.classList.toggle("dark", defaultDark);
}

createRoot(document.getElementById("root")!).render(<App />);
