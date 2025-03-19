"use client";
import { FontType, FontTypeProps, ThemeType } from "@/types/theme";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const fontThemeDefinition: Record<FontType, FontTypeProps> = {
  sans: {
    text: "Sans-serif",
    class: "font-agile-sans",
  },
  serif: {
    text: "Serif",
    class: "font-agile-serif",
  },
  mono: {
    text: "Sans-serif",
    class: "font-agile-mono",
  },
};

interface ThemeContext {
  font: FontType;
  setFont: (font: FontType) => void;
  theme: ThemeType;
  toggleTheme: () => void;
  fontLabel: string;
}

export interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContext);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [font, setFont] = useState<FontType>("sans");
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("agile-theme-preference", newTheme);
    document.documentElement.classList.toggle("dark");
    setTheme(newTheme);
  };

  useEffect(() => {
    const fontPreference = localStorage.getItem(
      "agile-font-preference"
    ) as FontType;

    const themePreference = localStorage.getItem(
      "agile-theme-preference"
    ) as ThemeType;

    if (fontPreference && fontThemeDefinition[fontPreference]) {
      setFont(fontPreference);
    }

    if (themePreference) {
      setTheme(themePreference);
    }
  }, []);

  useEffect(() => {
    Object.values(fontThemeDefinition).forEach((font) => {
      document.documentElement.classList.remove(font.class);
    });
    document.documentElement.classList.add(fontThemeDefinition[font].class);
    localStorage.setItem("agile-font-preference", font);
  }, [font]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("agile-theme-preference", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        font,
        setFont,
        fontLabel: fontThemeDefinition[font].text,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("useThemeContext must be used within a <ThemeProvider />");
  return context;
};
