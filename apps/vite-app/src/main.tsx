import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@repo/ui/globals.css";
import { ModeToggle } from "@repo/ui/components/mode-toggle";
import { ThemeProvider } from "@repo/ui/components/theme-provider";
import App from "@/App";

// biome-ignore lint/style/noNonNullAssertion: false positive
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <ModeToggle variant="outline" className="fixed top-3 right-3" />
    </ThemeProvider>
  </StrictMode>
);
