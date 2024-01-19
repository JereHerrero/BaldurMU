  const { Message } = require("discord.js");
const { MessageEmbed } = require(`discord.js`);
const { Queue } = require("distube");
const { CommandInteraction } = require("discord.js");


module.exports = {
  name: "ping",
  aliases: [],
  description: `sends bot's ping`,
  category: "Fun",
  type: "CHAT_INPUT",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,



  

  run: async (client, interaction, args, queue) => {
    // Code



        client.embed(interaction, `Ping :: \`${client.ws.ping}\``);

  }

}