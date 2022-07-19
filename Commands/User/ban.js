const Discord = require("discord.js")

module.exports = {
    name: 'ban',
    description: 'ban?',
    aliases: ['ban'],
    usage: '.ban',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */

    
  async execute(message, args, client) {
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reasonx = args.slice(1).join(" ")
const reason = reasonx ? reasonx : "Sebep Belirtilmedi"
if (!message.member.permissions.has[Discord.PermissionFlagsBits.Administrator] && !message.member.permissions.has[Discord.PermissionFlagsBits.BanMembers]) {
message.channel.send({content: `Bu komudu kullanabilmek için \`\`BAN_MEMBERS\`\` yetkisine sahip olmalısın!`})
return;
}

if (!member) {
await message.channel.send({content: "Banlayabilmem için bir üye belirtmelisin!"})
return;
}

if (member.roles.highest.position >= message.member.roles.highest.position) {
await message.channel.send({content: `Belirttiğin kullanıcının rolleri senden yüksek veya sana eşit!`})
return;
}

message.guild.members.ban(member, {reason: reason})
message.channel.send({content: `${member} üyesi, \`\`${reason}\`\` nedeniyle sunucudan yasaklandı!`})
  }}