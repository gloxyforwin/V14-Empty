const Discord = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const conf = require("../config.json")
/**@param {Discord.Client} client
 * @param {Discord.messageCreate} ready
 */

 module.exports = async (message,client) => {


client.user.setPresence({activities: [{name: "Gloxy Tarafından Geliştirilmekteyim."}], status: "idle"})
console.log("[+] Bota " + client.user.username + " adıyla giriş yapıldı!");

    joinVoiceChannel({
      channelId: conf.Bot.VoiceChannel,
      guildId: conf.Bot.GuildID,
      adapterCreator: client.guilds.cache.get(conf.Bot.GuildID).voiceAdapterCreator
  }
  
  );
      
 }