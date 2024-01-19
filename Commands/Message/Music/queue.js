const { Message } = require("discord.js");
const BOT = require("../../../handlers/Client");
const { Queue } = require("distube");
const { swap_pages } = require("../../../handlers/functions");

module.exports = {
  name: "queue",
  aliases: ["q", "list"],
  description: `see current queue with pagination`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: true,
  djOnly: false,

  
  run: async (client, message, args, prefix, queue) => {
    // Code
    if (!queue.songs.length) {
      return client.embed(
        message,
        `${client.config.emoji.ERROR} Nothing in Queue`
      );
    } else {
      let embeds = await client.getQueueEmbeds(queue);
      await swap_pages(message, embeds);
    }
  },
};
