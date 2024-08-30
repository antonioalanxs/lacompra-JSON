import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import ColorSchemeSwitcher from "@/components/ColorSchemeSwitcher/ColorSchemeSwitcher";
import { useTitle } from "@/hooks/useTitle";
import { Downloader } from "@/utils/Downloader";
import itemsData from "@/data/items.json";
import "@/components/Main/Main.css";
import { generateWhatsAppLink } from "@/utils/WhatsAppLinkGenerator";

// `localStorage` key for saved items.
const SELECTED_ITEMS = "selectedItems";

/**
 * The main component. It contains the form with the items to generate the list.
 *
 * @returns {JSX.Element}
 */
const Main = () => {
  useTitle({});

  const [items, setItems] = useState(itemsData);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(SELECTED_ITEMS)) || [];
    setSelectedItems(savedItems);
  }, []);

  /**
   * Handles item selection change and saves the updated selection to `localStorage`.
   *
   * @param {Event} event The event object.
   */
  const handleItemChange = (event) => {
    const { name, checked } = event.target;

    let updatedSelectedItems;

    if (checked) {
      updatedSelectedItems = [...selectedItems, name];
    } else {
      updatedSelectedItems = selectedItems.filter((item) => item !== name);
    }

    setSelectedItems(updatedSelectedItems);
    localStorage.setItem(SELECTED_ITEMS, JSON.stringify(updatedSelectedItems));
  };

  /**
   * Handles the form submission.
   *
   * It prevents the default behavior, gets the selected items and generates a text file with them. If no items are selected, it shows an alert.
   *
   * @param {Event} event The event object.
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    const button = event.target.querySelector("button");
    button.setAttribute("aria-busy", "true");

    if (selectedItems.length) {
      new Downloader().downloadTxt(selectedItems);

      localStorage.removeItem(SELECTED_ITEMS);
      setSelectedItems([]);
    } else {
      alert("Please select at least one item.");
    }

    button.setAttribute("aria-busy", "false");
  };

  const handleWhatsAppShare = () => {
    const link = generateWhatsAppLink(selectedItems);
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      <ColorSchemeSwitcher />

      <Header />

      <form onSubmit={handleSubmit}>
        {Object.keys(items).map((category, categoryIndex) => (
          <article key={categoryIndex}>
            <h4>{category}</h4>

            {items[category].map((item, itemIndex) => (
              <div key={itemIndex}>
                <input
                  type="checkbox"
                  id={item}
                  name={item}
                  checked={selectedItems.includes(item)}
                  onChange={handleItemChange}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </article>
        ))}

        <div className="download">
          <button type="submit">Download</button>
          <button
            type="button"
            className="whatsapp-button"
            onClick={handleWhatsAppShare}
          >
            Share via WhatsApp
          </button>
        </div>
      </form>
    </>
  );
};

export default Main;
