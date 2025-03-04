import { Client, GatewayIntentBits } from 'discord.js';

import { DISCORD_API_KEY, OPENAI_API_KEY } from './APIKEYS.js'
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

async function getResponse(userPrompt) {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "In the next message I will provide discord message about event from the announcments channel. Create JSON file about the event with properties: title,description, date, time. Keep descripiton below 100 characters, write time in am/pm format. If you see multiple events, generate two or more jsons" },
            { role: "user", content: userPrompt }
        ],
    });

    console.log(completion.choices[0].message.content);
}

// Example usage


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {


    if (message.author.bot) return; // Ignore bot messages
    if (message.channel.name == "announcements") {
       // console.log(`${message.author.username}: ${message.content}`);

        getResponse(message.content);
    }

});

client.login(DISCORD_API_KEY);


