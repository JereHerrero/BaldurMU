const simplydjs = require("simply-djs")
const db = require("quick.db")
const { MessageEmbed } = require(`discord.js`);


module.exports = {
  name: "setupticket",
  aliases: ["tsetup"],
  edesc: "tsetup",
  description: `create embed for making tickets`,
  userPermissions: [],
  botPermissions: [],
  category: "Settings",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    message.delete();

    let channel = await db.get(`${message.guild.id}_ticket`)
    let oldChannel = message.guild.channels.cache.get(channel)


    if (oldChannel) {
      let emb = new MessageEmbed()
        .setColor("#343A40")
        .setDescription(`Ticket System Channel already Setup in ${oldChannel} Delete old channel and try Again`
        )
      message.channel.send({ embeds: [emb] })
    }

    else {

      message.guild.channels
        .create(`🎫・tickets`,
          {
            type: "GUILD_TEXT",
            rateLimitPerUser: 3,
            reason: `Ticket Creation Channel `,
            topic: `Ticket Creation Channel `,
          })
        .then(async (ch) => {
          simplydjs.ticketSystem(message, {
            channelId: ch.id
          })
          await db.set(`${message.guild.id}_ticket`, ch.id)

          let emb = new MessageEmbed()
            .setColor("#343A40")
            .setDescription(`Successfully Setup Ticket System in ${ch}`)
          message.channel.send({ embeds: [emb] })

        })
    }
  }
}