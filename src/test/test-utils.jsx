import { render } from "@testing-library/react";
import { LanguageProvider } from "../contexts/LanguageContext";

/**
 * Wrapper de render que incluye todos los providers necesarios.
 * Usar en lugar de `render()` cuando el componente o sus hijos usan `useLanguage`.
 */
export function renderWithProviders(ui, options = {}) {
  function Wrapper({ children }) {
    return <LanguageProvider>{children}</LanguageProvider>;
  }
  return render(ui, { wrapper: Wrapper, ...options });
}

export * from "@testing-library/react";
