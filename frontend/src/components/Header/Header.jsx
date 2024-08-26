import { BRAND_NAME } from "@/constants";

/**
 * The header component. It contains the color scheme switcher, the brand name and a brief description of the application.
 *
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <>
      <header>
        <hgroup>
          <h1>{BRAND_NAME}</h1>
          <p>Select the items you want to include in your list.</p>
        </hgroup>
      </header>
    </>
  );
};

export default Header;
