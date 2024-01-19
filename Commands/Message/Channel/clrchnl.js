const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "clrchnl",
  aliases: [],
  edesc: "clrchnl",
  description: `clones and deletes message.channel`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  category: "Channel",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code



    if (message.member.permissions.has('MANAGE_CHANNELS')) {

      message.delete()

      await message.channel.clone().catch(console.error).then((ch) => { ch.send("Se purgo todo !") });
      await message.channel.delete().catch(console.error);

    } else {
      message.react("🚫")
      message.channel.send("No tienes permiso para usar esto!").then(msg => {
        setTimeout(() => msg.delete(), 1000)
      })
    }

  }
}