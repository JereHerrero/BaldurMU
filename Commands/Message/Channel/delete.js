const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "delete",
  aliases: [],
  edesc: "delete",
  description: `delete message.channel`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  category: "Channel",
  cooldown: 5,


message.channel.send("No tienes permiso para usar esto").then(msg => {

  run: async (client, message, args, prefix) => {
    // Code



    if (message.member.permissions.has('MANAGE_CHANNELS')) {

      message.delete()

      message.channel.delete().catch(console.error);

    } else {
      message.react("🚫")
      message.channel.send("No tienes permiso para usar esto").then(msg => {
        setTimeout(() => msg.delete(), 1000)
      })
  }
message.channel.send("No tienes permiso para usar esto").then(msg => {

}
}