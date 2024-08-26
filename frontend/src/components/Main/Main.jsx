import { useState } from "react";
import Header from "@/components/Header/Header";
import ColorSchemeSwitcher from "@/components/ColorSchemeSwitcher/ColorSchemeSwitcher";
import { useTitle } from "@/hooks/useTitle";
import { Downloader } from "@/utils/Downloader";
import itemsData from "@/data/items.json";
import "@/components/Main/Main.css";

/**
 * The main component. It contains the form with the items to generate the list.
 *
 * @returns {JSX.Element}
 */
const Main = () => {
  useTitle({});

  const [items, setItems] = useState(itemsData);

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

    const nodeList = event.target.querySelectorAll("input:checked");
    const selectedItems = [...nodeList].map((element) => element.name);

    if (selectedItems.length) {
      new Downloader().downloadTxt(selectedItems);
    } else {
      alert("Please select at least one item.");
    }

    button.setAttribute("aria-busy", "false");
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
                <input type="checkbox" id={item} name={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </article>
        ))}

        <div className="download">
          <button type="submit">Download</button>
        </div>
      </form>
    </>
  );
};

export default Main;
