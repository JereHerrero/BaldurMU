const db = require("quick.db")

module.exports = {
  name: "reset",
  aliases: ["reset"],
  edesc:"reset",
  description: `reset to default settings`,
  userPermissions: ["MANAGE_GUILD"],
  botPermissions: ["MANAGE_GUILD"],
  category: "Settings",
  cooldown: 5,


  
  run: async (client, message, args) => {
    // Code
    await client.music.delete(message.guildId)
    await  db.set(`${message.guild.id}_google`,null)
    await db.set(`${message.guild.id}_ticket`,null)
    client.embed(message,`${client.config.emoji.SUCCESS} Reseted Done !!`)
  },
};
