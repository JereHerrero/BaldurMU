const { Message } = require("discord.js");
const BOT = require("../../../handlers/Client");
const { Queue } = require("distube");
const { swap_pages } = require("../../../handlers/functions");

module.exports = {
  name: "shuffle",
  aliases : [],
  description: `shuffle current queue of server`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

 
  run: async (client, message, args, prefix, queue) => {
    // Code
    queue.shuffle();
    client.embed(message, `${client.config.emoji.SUCCESS} Queue Shuffled !!`);
  },
};