import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Ensure the DOM and localStorage are clean between tests.
afterEach(() => {
    cleanup();
    localStorage.clear();
});
