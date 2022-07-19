const { ButtonBuilder } = require("@discordjs/builders");
const { ButtonStyle } = require("discord.js");
const Discord = require("discord.js")
const conf = require("../../config.json")
module.exports = {
    name: 'ping',
    description: 'örnek buton kullanımı',
    aliases: ['ping'],
    usage: '.ping',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
  async execute(message, args, client) {

if (!message.author.id === conf.Bot.OwnerID) {
return;
}



const verifyButton = new ButtonBuilder() // new MessageButton() yerine ButtonBuilder tanımlıyoruz.
.setLabel("Ping")
.setCustomId("example")
.setStyle(ButtonStyle.Success) /* ButtonStyle.Danger && ButtonStyle.Primary && ButtonStyle.Secondary && ButtonStyle.Link ile değiştirebilirsiniz. */

const row = new Discord.ActionRowBuilder().addComponents(verifyButton) // discord.js@v13.8.1'de ki MessageActionRow, discord.js@v14.0.1'de ActionRowBuilder ile değiştirildi

message.channel.send({content: 
`Pong!`, components: [row]
})


  }}