# Skyport Shiunku - Panel
By ShindoZk

![\[!image\](https://i.imgur.com/SU7QypZ.png)](https://i.imgur.com/SU7QypZ.png)

![Discord](https://img.shields.io/discord/1253782902618194011?label=Discord&logo=Discord&logoColor=white&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/skyportlabs/panel?style=for-the-badge)

# Skyport Panel
## Overview
Skyport is an open source panel for managing and operating game servers and applications built using Node.js with Express and Dockerode. [Click here to join our Discord.](https://skyport.privt.xyz/)

## Images (Eggs)
- Nodejs (Funcionando/Em desenvolvimento)
- Python (Em breve)
- Java (Em breve)
- Lavalink (Em breve)

### Tutorial Install Panel (Versão Antiga): 

## Installation
Auto instalador
Em breve...

Comandos manuais para instalar

Use o comando git clone para clonar o repositorio no seu projeto
git clone https://github.com/shindozk/skyport-shiunku

cd skyport-shiunku

// Configurar painel
cd skyport-panel
npm install
npm run seed
npm run createUser
node .

// Configurar daemon
cd daemon
npm install
node .

Fix Daemon Configuration
"npm run configure -- --panel http://localhost:9000 --key ac5edad5-a0ee-4e3d-a10b-05c3aa707924"
// Mude o link https para http, para localhost e usando a porta disponivel no proprio link, como esse exemplo acima

## Configuration
Edit the `config.json` file in the root directory to set up the application settings including the database connection and port.

## Usage
Navigate to `http://localhost:<port>` to access the Skyport Panel. Log in with your user credentials to manage and view instances.

## Contributing
Contributions are welcome. Please fork the repository and submit pull requests with your proposed changes.

## License
(c) 2024 Matt James and contributors. All rights reserved. Licensed under the MIT License.
