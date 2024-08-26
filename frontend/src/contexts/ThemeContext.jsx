import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import usePrefersColorScheme from "use-prefers-color-scheme";

const ThemeContext = createContext({});
const useTheme = () => useContext(ThemeContext);

/**
 * Provides a theme context for the application.
 *
 * @param {Object} props The component props.
 *
 * @returns {JSX.Element} The theme provider component.
 */
const ThemeProvider = ({ children, ...props }) => {
  const isSSR = typeof window === "undefined";
  const htmlTag = !isSSR && document.querySelector("html");
  const systemPrefersColorScheme = usePrefersColorScheme();
  const defaultTheme = systemPrefersColorScheme || "light";
  const [selectedTheme, setSelectedTheme] = useLocalStorageState(
    "picoColorScheme",
    null
  );
  const [theme, setTheme] = useState("light");

  /**
   * Switches the theme between light and dark.
   */
  const switchTheme = () => {
    setSelectedTheme(theme === "dark" ? "light" : "dark");
  };

  /**
   * Sets the data-theme attribute on the HTML tag.
   *
   * @param {string} theme The theme to set
   */
  const setDataThemeAttribute = (theme) => {
    if (htmlTag) {
      htmlTag.setAttribute("data-theme", theme);
    }
  };

  useEffect(() => {
    if (htmlTag) {
      if (selectedTheme) {
        setDataThemeAttribute(selectedTheme);
        setTheme(selectedTheme);
      } else {
        setDataThemeAttribute(defaultTheme);
        setTheme(defaultTheme);
      }
    }
  }, [htmlTag, defaultTheme, selectedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
        ...props,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
