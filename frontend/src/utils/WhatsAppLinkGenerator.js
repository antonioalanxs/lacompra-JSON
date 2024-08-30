/**
 * Generates a WhatsApp link with a pre-filled message containing the selected items.
 *
 * @param {Array<string>} items - The list of selected items.
 * @returns {string} - The WhatsApp share link.
 */
export const generateWhatsAppLink = (items) => {
  if (items.length === 0) {
    alert("Please select at least one item.");
    return "";
  }

  const message = `Here is my shopping list:\n\n${items.join("\n")}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/?text=${encodedMessage}`;
};
