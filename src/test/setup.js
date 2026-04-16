import "@testing-library/jest-dom/vitest";

class IntersectionObserverMock {
  constructor() {}

  observe() {}

  unobserve() {}

  disconnect() {}
}

if (typeof window !== "undefined" && !window.IntersectionObserver) {
  window.IntersectionObserver = IntersectionObserverMock;
}

if (typeof globalThis !== "undefined" && !globalThis.IntersectionObserver) {
  globalThis.IntersectionObserver = IntersectionObserverMock;
}

if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: query.includes("hover") ? true : false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
