import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BRAND_NAME } from "@/constants";

/**
 * Sets the title of the page.
 *
 * @param {Object} title - The title of the page.
 */
export const useTitle = ({ title }) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title ? `${title} / ${BRAND_NAME}` : BRAND_NAME;
  }, [location, title]);
};
