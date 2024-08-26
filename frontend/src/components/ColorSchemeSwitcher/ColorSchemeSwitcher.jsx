import { useTheme } from "@/contexts/ThemeContext";
import IconMoon from "@/icons/IconMoon";
import IconSun from "@/icons/IconSun";

import "@/components/ColorSchemeSwitcher/ColorSchemeSwitcher.css";

/**
 * Switches the color scheme.
 *
 * @param {object} props The component props.
 */
const ColorSchemeSwitcher = (props) => {
  const { switchTheme, theme } = useTheme();
  const nextThemeAriaLabel =
    theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

  /**
   * Prevents the default behavior and switches the theme.
   *
   * @param {Event} event The event object.
   */
  const handleSwitchTheme = (event) => {
    event.preventDefault();

    switchTheme();
  };

  return (
    <i aria-label={nextThemeAriaLabel} onClick={handleSwitchTheme} {...props}>
      {theme === "dark" ? <IconMoon /> : <IconSun />}
    </i>
  );
};

export default ColorSchemeSwitcher;
