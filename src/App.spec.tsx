import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from './App'

describe("Header component works correctly", async () => {
  const headerComponent = render(<App />);
  const title = await headerComponent.findAllByTestId("title");
  it("Title render correctly", async () => {
    expect(title.length).toBe(1);
    expect(title[0].textContent).toBe("Title");
  });
});
