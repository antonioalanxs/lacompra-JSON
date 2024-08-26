/**
 * Get the current date in the format YYYY-MM-DD.
 *
 * @returns {string} - Current date in the format YYYY-MM-DD.
 */
export const today = () => new Date().toISOString().split("T")[0];
