# lacompra-JSON

## Table of Contents

- [Description](#description)
    - [Demonstration Video](#demonstration-video)
- [Usage](#usage)
    - [Locally](#locally)
    - [Docker](#docker)
- [Contributions](#contributions)
- [Contributors](#contributors)
- [License](#license)

## Description

**Configure a JSON with your usual items, mark them when they are missing and get your shopping list!** Application built with [React](https://es.react.dev/), [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript), [Pico CSS](https://picocss.com/) and [Docker](https://www.docker.com/).

The project has been dockerized to simplify usage and ensure a consistent environment. You can [run the application within a Docker container](#docker), which includes all necessary dependencies.

### Demonstration Video

[![lacompra-JSON Demonstration](https://img.youtube.com/vi/e8UlQDN8kEc/maxresdefault.jpg)](https://youtu.be/e8UlQDN8kEc)

## Usage

- Clone the repository:

    ```bash
    git clone https://github.com/antonioalanxs/lacompra-JSON.git
    ```

- Configure your list [frontend/src/data/items.json](frontend/src/data/items.json) with your habitual items. For example:

    ```json
    {
        "Oils, Spices, and Sauces": [
            "Olive oil", "Black pepper", "Garlic powder", "Tomato sauce", "Pesto"
        ],
        "Snacks": [
            "Almonds", "Popcorn", "Potato chips", "Pretzels", "Chocolate bars", 
            "Granola bars", "Trail mix", "Cashews", "Pistachios", "Fruit snacks", 
            "Crackers", "Cheese sticks", "Rice cakes", "Beef jerky", "Dried fruit"
        ],
        "Cleaning Supplies": [
            "Detergent", "Disinfectant spray", "Glass cleaner", "Paper towels", "Garbage bags"
        ],
        "Frozen Foods": ["Frozen pizza", "Ice cream", "Frozen vegetables"],
        "Beverages": ["Water", "Orange juice", "Coffee", "Tea", "Soda"]
    }
    ```

- Run the application. You can do it [Locally](#locally) or via [Docker](#docker).

### Locally

To use the application locally, follow these steps:

- Navigate to the project directory:

    ```bash
    cd lacompra-JSON/frontend
    ```

- Make sure you have Node.js and `npm` installed. You can install it via `apt`:

    ```bash
    sudo apt update && \
    sudo apt install nodejs && \
    sudo apt install npm
    ```

- Make sure you have Vite installed. You can install it via `npm`:

    ```bash
    sudo apt update && \
    npm install -g create-vite
    ```

- Finally, run the application:

    ```bash
    npm run dev
    ```

    The application is started on your [localhost:5173](http://localhost:5173).

### Docker

If you prefer to use Docker to run the application, follow these steps:

- Make sure you have Docker installed on your machine. You can install it via `apt`:

    ```bash
    sudo apt update && \
    sudo apt install docker.io
    ```

- Navigate where [docker-compose.yml](docker-compose.yml) is located:

    ```bash
    cd lacompra-JSON/
    ```

- Finally, execute it:

    ```bash
    docker compose up
    ```

    The application is started on your [localhost:5173](http://localhost:5173).

    To stop the application, simply run:

    ```bash
    docker compose down
    ```

## Contributions

If you would like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix (`git checkout -b feature/new-feature`).
3. Make your changes and commit them following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format (`git commit -m 'feat: add new feature'` or `fix: correct a bug`).
4. Push your branch to the remote repository (`git push origin feature/new-feature`).
5. Create a Pull Request.

## Contributors

<a href="https://github.com/antonioalanxs/lacompra-JSON/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=antonioalanxs/lacompra-JSON" />
</a>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.