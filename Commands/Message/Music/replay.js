const { Message } = require("discord.js");
const BOT = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "replay",
  aliases: ["rpl", "rplay"],
  description: `replay current song of queue`,
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
    queue.seek(0);
    client.embed(message, `${client.config.emoji.SUCCESS} Replaying Track !!`);
  },
};
