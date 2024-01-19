const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "purge",
  aliases: ["clr", "clear"],
  edesc:"purge no.of_msgs",
  description: `clears mentioned number of messages`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  category: "Moderation",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code



    if (message.member.permissions.has('MANAGE_CHANNELS')) {

      message.delete()

      let arg = message.content.split(" ");
      let messagecount = arg[1];
      let clear = parseInt(messagecount) + 1;

      try {
        if (clear < 100 && clear >= 1) {
          message.channel.bulkDelete(clear);
          message.channel.send(`⭕ Succesfully cleared ${messagecount} messages!`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
        } else if (messagecount == "all") {
          let clrall = 99;
          message.channel.bulkDelete(clrall);
          message.channel.send(`⭕ Succesfully cleared ${clrall} messages!`).then(msg => {
            setTimeout(() => msg.delete(), 1000)
          })
        } else if (clear > 99) {
          message.channel.send("You cant delete more than 99 messages PEASANT!").then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        } else {
          message.channel.send("You cant delete less than 1 message DUMBFUCK").then(msg => {
            setTimeout(() => msg.delete(), 10000)
          })
        }

      } catch (error) { }




    } else {
      message.react("🚫")
      message.channel.send("Fuck Off You are not worthy to use that ! You PEASANT!").then(msg => {
        setTimeout(() => msg.delete(), 1000)
      })
    }

  }
}