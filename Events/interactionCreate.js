const { InteractionType } = require('discord.js');
const Discord = require('discord.js');


/**@param {Discord.Client} client
 * @param {Discord.messageCreate} messageCreate
 */

module.exports = async (interaction,client) => {

if ( interaction.type === InteractionType.MessageComponent ){

if (interaction.customId === "example") {

interaction.reply({content: "Pong!", ephemeral: true})

}

if (interaction.customId === "example2") {

    if (interaction.values === "ex1") {
    interaction.reply({content: "Pong! First"})
    }
    
    if (interaction.values === "ex2") {
    interaction.reply({content: "Pong! Second"})
    }      
    
    } 
}
}