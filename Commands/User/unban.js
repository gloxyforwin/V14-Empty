const Discord = require("discord.js")

module.exports = {
    name: 'unban',
    description: 'unban?',
    aliases: ['unban'],
    usage: '.unban',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
  async execute(message, args, client) {
const member = (args[0])
if (!message.member.permissions.has[Discord.PermissionFlagsBits.Administrator] && !message.member.permissions.has[Discord.PermissionFlagsBits.BanMembers]) {
    message.channel.send({content: `Bu komudu kullanabilmek için \`\`BAN_MEMBERS\`\` yetkisine sahip olmalısın!`})
    return;
    }
    

if (isNaN(!member)) {
message.channel.send({content: "Yasaklamasını kaldırabilmem için geçerli bir ID belirtmelisin!"})
return;
}

message.guild.members.unban(member)
message.channel.send({content: `<@${member}> üyesinin yasaklaması başarıyla kaldırıldı!`})
  }}