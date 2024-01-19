const { Message } = require("discord.js");
const BOT = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "skip",
  aliases: ["s", "skp"],
  description: `skip to next song in queue`,
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
    await queue.skip().catch((e) => null);
    client.embed(message, `${client.config.emoji.SUCCESS}  Song Skipped !!`);
  },
};
