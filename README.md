# Skyport Panel (Shiunku) - v0.4.5

Forked from **ma4z**'s Oversee Panel  
**By ShindoZk**

[![Panel Image](https://i.imgur.com/SU7QypZ.png)](https://i.imgur.com/SU7QypZ.png)

[![Discord](https://img.shields.io/discord/1253782902618194011?label=Discord&logo=Discord&logoColor=white&style=for-the-badge)](https://skyport.privt.xyz/)  
[![GitHub Contributors](https://img.shields.io/github/contributors/skyportlabs/panel?style=for-the-badge)](https://github.com/skyportlabs/panel)

## Overview

Shiunku Panel (Skyport Panel) is an open-source web interface designed to manage and operate game servers and various applications effortlessly. Built with Node.js, Express, and Docker, it provides a robust, scalable, and secure platform to deploy, monitor, and control your server instances. Whether you're running game servers or other services, Shiunku Panel simplifies management tasks and streamlines your workflow.

**Join our community on Discord:** [Click here to join our Discord](https://skyport.privt.xyz/)

## Supported Application Types (Images/Eggs)

- **Node.js:** Fully operational.
- **Python:** Fully operational.
- **Java:** Fully operational.
- **Lavalink:** Fully operational.
- **VM (VPS):** Fully operational.

[![Eggs Image](https://i.imgur.com/example.png)](https://i.imgur.com/example.png)  
*Click the image to view all available eggs.*

## Installation Guide

### Prerequisites

Before installing, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Docker](https://docs.docker.com/get-docker/) – Docker must be installed and running.
- Git

### Automatic Installation

To install **Shiunku Panel** automatically, simply run the following command:

```bash
bash <(curl -s https://raw.githubusercontent.com/shindozk/ShiunkuImages/main/shiunku_panel.sh)
```

To install **Shiunku Daemon**, use:

```bash
bash <(curl -s https://raw.githubusercontent.com/shindozk/ShiunkuImages/main/shiunku_daemon.sh)
```

### Fixing Daemon Issues

If you encounter issues with the daemon, you can attempt to fix them with the following command:

```bash
npm run configure -- --panel http://localhost:3002 --key YOUR_API_KEY
```
Replace `http://localhost:3002` with your panel's URL and `YOUR_API_KEY` with the actual API key provided by your panel configuration.

## Configuration

Customize your setup by editing the `config.json` file in the root directory of the Shiunku repository. This file allows you to adjust essential settings such as:
- **Database Connection:** Configure your database credentials and connection parameters.
- **Server Port:** Define the port on which the panel will run.
- **Other Application Settings:** Modify additional options as needed.

## Usage

After installation and configuration:

1. **Access the Panel:**
   Open your web browser and navigate to:
   ```text
   http://localhost:<port>
   ```
   Replace `<port>` with the port number specified in your `config.json`.

2. **Log In:**
   Use the administrator credentials you created during installation to log into the panel.

3. **Manage Your Servers:**
   Once logged in, you can deploy, monitor, and manage your game servers and other applications through the intuitive web interface.

## Contributing

Contributions are highly welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes with clear descriptions.
4. Open a pull request detailing your improvements.

Your contributions help make Shiunku Panel better for everyone!

## License

This project is licensed under the [MIT License](LICENSE).

---

For additional details and support, visit our [documentation site](https://skyport.dev) or join our [Discord community](https://skyport.privt.xyz/).
