import ColorSchemeSwitcher from "@/components/ColorSchemeSwitcher/ColorSchemeSwitcher";
import { useTitle } from "@/hooks/useTitle";
import { BRAND_NAME, HTTP_404_NOT_FOUND } from "@/constants";

/**
 * The header component. It contains the color scheme switcher, the brand name and a brief description of the application.
 *
 * @returns {JSX.Element}
 */
const Error = () => {
  useTitle({ title: HTTP_404_NOT_FOUND });

  return (
    <>
      <ColorSchemeSwitcher />

      <h1>{BRAND_NAME}</h1>

      <h2>{HTTP_404_NOT_FOUND}</h2>

      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <a href="/" role="button" tabIndex={0}>
        Go to home
      </a>
    </>
  );
};

export default Error;
