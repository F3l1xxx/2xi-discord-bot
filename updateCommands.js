import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
// import { token } from './config.json';
// import { readdirSync } from 'fs';
import { createMenuCommand } from './index.js';

import dotenv from 'dotenv';
dotenv.config();

// Place your client and guild ids here
const clientId = process.env.CLIENT_ID;
// const guildId = '783285404068479026';

const commands = [createMenuCommand.toJSON()];

// for (const file of commandFiles) {
//     const command = require(`./commands/${file}`);
//     commands.push(command.data.toJSON());
// }

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();