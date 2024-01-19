const { Message, MessageEmbed } = require("discord.js");
const BOT = require("../../../handlers/Client");

let dev = "728958118536675369";


module.exports = {
  name: "leave_guild",
  aliases: [],
  description: `leaves the server`,
  userPermissions: [],
  botPermissions: [],
  category: "DeveloperOnly",
  cooldown: 0,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,


  run: async (client, message, args, prefix) => {

    // Code
    message.delete({ timeout: 1000 })


    async function leave() {
         message.guild.leave();
    }

    if(message.author.id == dev)
  {
    return leave()    
  }
         

  }
}