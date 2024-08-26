import { today } from "@/utils/functions";

/**
 * Generates and downloads files in the desired extension with the data provided.
 *
 * It is a singleton class.
 *
 * @class
 */
export class Downloader {
  constructor() {
    if (Downloader.instance instanceof Downloader) {
      return Downloader.instance;
    }

    this.fileName = today();

    Downloader.instance = this;

    return this;
  }

  /**
   * Downloads a file.
   *
   * @param {string} data - Data to download.
   * @param {string} type - Type of the file to download.
   * @param {string} extension - Extension of the file to download.
   *
   * @private
   */
  _download = (data, type, extension) => {
    const URI = URL.createObjectURL(new Blob(data, { type }));
    const anchor = document.createElement("a");

    anchor.href = URI;
    anchor.download = `${new Date().toISOString().split("T")[0]}${extension}`;

    document.body.appendChild(anchor);
    anchor.click();

    URL.revokeObjectURL(URI);
    document.body.removeChild(anchor);
  };

  /**
   * Generates and downloads a text file with the data provided.
   *
   * @param {string} data - Data to download.
   */
  downloadTxt = (data) => {
    const formattedData = [data.join("\n")];

    this._download(formattedData, "text/plain", ".txt");
  };
}
