# Skyport Panel (Shiunku) - v0.3.5

**By ShindoZk**

[![Panel Image](https://i.imgur.com/SU7QypZ.png)](https://i.imgur.com/SU7QypZ.png)

[![Discord](https://img.shields.io/discord/1253782902618194011?label=Discord&logo=Discord&logoColor=white&style=for-the-badge)](https://skyport.privt.xyz/)  
[![GitHub contributors](https://img.shields.io/github/contributors/skyportlabs/panel?style=for-the-badge)](https://github.com/skyportlabs/panel)

## Overview

Skyport Panel is an open source web interface designed to manage and operate game servers and various applications. Built with Node.js, Express, and Dockerode, it provides a robust platform to deploy, monitor, and control your server instances efficiently. Whether you’re running game servers or other applications, Skyport Panel simplifies management tasks while offering a scalable and secure environment.

**Join our community:** [Click here to join our Discord.](https://skyport.privt.xyz/)

## Supported Application Types (Eggs)

- **Node.js:** Fully operational and actively developed.
- **Python:** Coming soon.
- **Java:** Coming soon.
- **Lavalink:** Coming soon.

## Tutorial Installation (After Version):
https://www.youtube.com/watch?v=biiiRe4CoTE

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://docs.docker.com/get-docker/) – Make sure Docker is installed and running on your machine.

### Auto Installer

The auto installer feature is coming soon. Stay tuned for updates!

### Manual Installation

Follow these steps to manually install Skyport Panel and its daemon:

1. **Clone the Repository:**

   Open your terminal and run:
   ```bash
   git clone https://github.com/shindozk/skyport-shiunku
   cd skyport-shiunku
   ```

2. **Set Up the Panel:**

   Navigate to the panel directory, install dependencies, seed the database, create a user, and start the panel:
   ```bash
   cd skyport-panel
   npm install
   npm run seed
   npm run createUser
   node .
   ```

3. **Set Up the Daemon:**

   Open a new terminal window, then navigate to the daemon directory and install dependencies:
   ```bash
   cd daemon
   npm install
   node .
   ```

4. **Configure the Daemon:**

   Link the daemon to the panel by running:
   ```bash
   npm run configure -- --panel http://localhost:9000 --key ac5edad5-a0ee-4e3d-a10b-05c3aa707924
   ```
   **Note:** Make sure to change the URL protocol to `http`, set the host to `localhost`, and use the correct port available in your configuration, as shown in the example above.

For further details, check out our original documentation at [skyport.dev](https://skyport.dev).

## Configuration

Customize your Skyport Panel setup by editing the `config.json` file located in the root directory. This file allows you to configure essential settings such as:

- **Database Connection:** Set up your database credentials and connection parameters.
- **Server Port:** Define the port on which the panel will run.
- **Other Application Settings:** Adjust additional options to suit your deployment needs.

## Usage

After installation and configuration:

1. **Access the Panel:**
   Open your web browser and navigate to:
   ```text
   http://localhost:<port>
   ```
   Replace `<port>` with the port number defined in your `config.json`.

2. **Log In:**
   Use the credentials created during the installation process to log into the panel.

3. **Manage Your Servers:**
   Once logged in, you can easily manage, deploy, and monitor your game servers and applications via the intuitive web interface.

## Contributing

Contributions are highly appreciated! If you'd like to improve the Skyport Panel, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your modifications and submit a pull request detailing your improvements.

Your contributions help make this project better for everyone!

## License

© 2024 Matt James and contributors. All rights reserved. Licensed under the [MIT License](LICENSE).
