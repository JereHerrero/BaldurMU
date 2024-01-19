const db = require("quick.db")
const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "setupgoogle",
  aliases: ["gsetup"],
  edesc:"gsetup",
  description: `setup google search channel in server`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  category: "Settings",
  cooldown: 5,
  

  run: async (client, message, args) => {
    // Code

    message.delete()


    let channel = await db.get(`${message.guild.id}_google`)
    let oldChannel = message.guild.channels.cache.get(channel)


    if (oldChannel) {
      let emb = new MessageEmbed()
        .setColor("343A40")
        .setDescription(`Search Request Channel already Setup in ${oldChannel} Delete old channel to Setup Again`)
      message.channel.send({ embeds: [emb] })

    }

    else {

      message.guild.channels
        .create(`🔍・google`,
          {
            type: "GUILD_TEXT",
            rateLimitPerUser: 3,
            reason: `for google search`,
            topic: `Google Search Request Channel for ${client.user.username}`,
          })
        .then(async (ch) => {
          await ch.send("ENTER SEARCH QUERY")
          await db.set(`${message.guild.id}_google`, ch.id)

          let emb = new MessageEmbed()
            .setColor("#343A40")
            .setDescription(` Successfully Setup Google Search Request System in ${ch}`)
          message.channel.send({ embeds: [emb] })

        })
    }

  }
}

