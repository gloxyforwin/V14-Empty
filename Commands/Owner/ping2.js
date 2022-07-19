const { SelectMenuBuilder } = require("@discordjs/builders");
const { ButtonStyle } = require("discord.js");
const Discord = require("discord.js")
const conf = require("../../config.json")
module.exports = {
    name: 'ping2',
    description: 'örnek menü kullanımı',
    aliases: ['ping2'],
    usage: '.ping2',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
  async execute(message, args, client) {

if (!message.author.id === conf.Bot.OwnerID) {
return;
}



const menu = new SelectMenuBuilder() // new MessageButton() yerine ButtonBuilder tanımlıyoruz.
.setPlaceholder("Ping!")
.setCustomId("example2")
.addOptions([
    {label: "Example First", value: "ex1"},
    {label: "Example Second", value: "ex2"}
])
const row = new Discord.ActionRowBuilder().addComponents(menu) // discord.js@v13.8.1'de ki MessageActionRow, discord.js@v14.0.1'de ActionRowBuilder ile değiştirildi

message.channel.send({content: 
`Pong!`, components: [row]
})


  }}