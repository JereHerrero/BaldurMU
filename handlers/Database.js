const { mongodb } = require("../settings/config");
const Josh = require("@joshdb/core");
const { Client } = require("discord.js");
const provider = require("@joshdb/json");



module.exports = async (client) => {
  // music
  client.music = new Josh({
    name: "music",
    provider: provider
  });
  // queue
  client.queue = new Josh({
    name: "queue",
    provider: provider
  });
  // autoresume
  client.autoresume = new Josh({
    name: "autoresume",
    provider: provider
  });
  
  // delete data if guild left
  client.on("guildDelete", async (guild) => {
    if (!guild) return;
    let music = await client.music.get(guild.id);
    if (!music) return;
    let requestchannel = guild.channels.cache.get(music ?.music.channel);
    if (requestchannel) {
      await requestchannel.delete(`reset setting`).catch((e) => null);
    }
    await client.music.delete(guild.id);
  });
};
