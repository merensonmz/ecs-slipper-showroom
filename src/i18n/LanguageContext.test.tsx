import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageProvider, useLanguage } from "./LanguageContext";

function Consumer() {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <div>
      <span aria-label="current-language">{language}</span>
      <span aria-label="direction">{isRTL ? "rtl" : "ltr"}</span>
      <button onClick={() => setLanguage("ar")}>Switch AR</button>
      <button onClick={() => setLanguage("en")}>Switch EN</button>
    </div>
  );
}

describe("LanguageProvider", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.dir = "";
    document.documentElement.lang = "";
    document.documentElement.classList.remove("rtl");
  });

  it("initializes from storage and updates document attributes", async () => {
    localStorage.setItem("blueflex-language", "ar");

    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>,
    );

    expect(screen.getByLabelText("current-language")).toHaveTextContent("ar");

    await waitFor(() => {
      expect(document.documentElement.dir).toBe("rtl");
      expect(document.documentElement.lang).toBe("ar");
      expect(document.documentElement.classList.contains("rtl")).toBe(true);
    });
  });

  it("changes language, updates direction and persists selection", async () => {
    render(
      <LanguageProvider>
        <Consumer />
      </LanguageProvider>,
    );

    await userEvent.click(screen.getByText("Switch AR"));

    await waitFor(() => {
      expect(document.documentElement.dir).toBe("rtl");
      expect(document.documentElement.lang).toBe("ar");
    });

    expect(localStorage.getItem("blueflex-language")).toBe("ar");

    await userEvent.click(screen.getByText("Switch EN"));

    await waitFor(() => {
      expect(document.documentElement.dir).toBe("ltr");
      expect(document.documentElement.lang).toBe("en");
      expect(document.documentElement.classList.contains("rtl")).toBe(false);
    });
    expect(localStorage.getItem("blueflex-language")).toBe("en");
  });
});
