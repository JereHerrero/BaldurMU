const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "sm",
  aliases: ["slowon", "slowmode", "setslowmode"],
  edesc:"sm slowmode_duration",
  description: `enables slowmode - default 5s`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: [],
  category: "Moderation",
  cooldown: 10,



  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    if (args) {

      let duration = null

      if (!args[0]) { duration = 5 }
      if (args[0] < 5) { duration = 5 }
      if (args[0] > 4 && args[0] < 10) { duration = 5 }
      if (args[0] > 9 && args[0] < 15) { duration = 10 }
      if (args[0] > 14 && args[0] < 30) { duration = 15 }
      if (args[0] > 29 && args[0] < 60) { duration = 30 }
      if (args[0] > 59 && args[0] < 120) { duration = 60 }
      if (args[0] > 119 && args[0] < 300) { duration = 120 }
      if (args[0] > 299 && args[0] < 600) { duration = 300 }
      if (args[0] > 599 && args[0] < 900) { duration = 600 }
      if (args[0] > 899 && args[0] < 1800) { duration = 900 }
      if (args[0] > 1799 && args[0] < 3600) { duration = 1800 }
      if (args[0] > 3599 && args[0] < 7200) { duration = 3600 }
      if (args[0] > 7199 && args[0] < 21600) { duration = 7200 }
      if (args[0] > 21599) { duration = 21600 }


      message.channel.setRateLimitPerUser(duration)
      let emb = new MessageEmbed()
        .setColor("#343A40")
        .setTitle("✅OPERATION SUCCESSFUL")
        .addField("Slowmode is now Enabled", `Slowmode duration is : ` + duration + ` seconds`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
      message.reply({ embeds: [emb] }).then((msg) => { setTimeout(() => msg.delete(), 5000) })
    }
    











  }
}
