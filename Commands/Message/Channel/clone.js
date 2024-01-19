const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "clone",
  aliases: [],
  edesc: "clone",
  description: `clone message.channel`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  category: "Channel",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code



    if (message.member.permissions.has('MANAGE_CHANNELS')) {

      message.delete()

      message.channel.clone().catch(console.error);

    } else {
      message.react("🚫")
      message.channel.send("No tienes permisos para usar esto!").then(msg => {
        setTimeout(() => msg.delete(), 1000)
      })
    }

  }
}