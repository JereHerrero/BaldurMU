module.exports = {
  name: "autoresume",
  aliases: ["atresume"],
  edesc:"autoresume",
  description: `toggle autoresume system on/off`,
  userPermissions: ["MANAGE_GUILD"],
  botPermissions: ["MANAGE_GUILD"],
  category: "Settings",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: true,
  Player: false,
  djOnly: false,

 
  run: async (client, message, args) => {
    // Code
    let data = await client.music.get(`${message.guild.id}.autoresume`);
    if (data === true) {
      await client.music.set(`${message.guild.id}.autoresume`, false);
      client.embed(
        message,
        `** ${client.config.emoji.ERROR} Autoresume System Disabled **`
      );
    } else {
      await client.music.set(`${message.guild.id}.autoresume`, true);
      client.embed(
        message,
        `** ${client.config.emoji.SUCCESS} Autoresume System Enabled **`
      );
    }
  },
};
