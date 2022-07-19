const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
const conf = require("../../config.json")
module.exports = {
    name: 'ping3',
    description: 'örnek embed kullanımı',
    aliases: ['ping3'],
    usage: '.ping3',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
  async execute(message, args, client) {

if (!message.author.id === conf.Bot.OwnerID) {
return;
}
const embed = new EmbedBuilder()
.setTitle("Title")
.setDescription("Embed Example")
.setColor("#00080")
.setTimestamp()
message.channel.send({embeds : [embed]});
  }}