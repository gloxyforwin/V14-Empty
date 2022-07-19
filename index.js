const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const Discord = require("discord.js")
const conf = require("./config.json")
const fs = require("fs")
const client = new Client({
	intents: [98303, 
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
    ]
});

client.commands = new Collection()
client.cooldowns = new Collection()
client.aliases = new Collection();

fs.readdir('./Commands', (err, files) => {
  if (err) console.error(err);
  files.forEach(f => {
      fs.readdir("./Commands/" + f, (err2, files2) => {
          files2.forEach(file => {
              let props = require(`./Commands/${f}/` + file);
              console.log(`[+] ${props.name} komutu yüklendi!`);
              client.commands.set(props.name, props);
              props.aliases.forEach(alias => {
                  client.aliases.set(alias, props.name);
              });
          })
      })
  });
});

const requestEvent = (event) => require(`./Events/${event}`)
client.on('ready', (ready) => requestEvent('ready')(ready, client));
client.on('messageCreate', (messageCreate) => requestEvent('messageCreate')(messageCreate, client));
client.on('interactionCreate', (interactionCreate) => requestEvent('interactionCreate')(interactionCreate, client));

client.login(conf.Bot.Token)