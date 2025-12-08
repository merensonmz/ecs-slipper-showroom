import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LanguageSwitcher from "./LanguageSwitcher";
import { LanguageProvider } from "@/i18n/LanguageContext";

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>,
  );
}

describe("LanguageSwitcher", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.dir = "";
    document.documentElement.lang = "";
    document.documentElement.classList.remove("rtl");
  });

  it("updates document attributes when switching to RTL language", async () => {
    renderWithProvider();

    await userEvent.click(screen.getByRole("button", { name: /switch to ar/i }));

    await waitFor(() => {
      expect(document.documentElement.dir).toBe("rtl");
      expect(document.documentElement.lang).toBe("ar");
    });

    expect(localStorage.getItem("blueflex-language")).toBe("ar");
  });

  it("resets to LTR settings when selecting a left-to-right language", async () => {
    localStorage.setItem("blueflex-language", "ar");
    renderWithProvider();

    await waitFor(() => expect(document.documentElement.dir).toBe("rtl"));

    await userEvent.click(screen.getByRole("button", { name: /switch to en/i }));

    await waitFor(() => {
      expect(document.documentElement.dir).toBe("ltr");
      expect(document.documentElement.lang).toBe("en");
      expect(document.documentElement.classList.contains("rtl")).toBe(false);
    });

    expect(localStorage.getItem("blueflex-language")).toBe("en");
  });
});
