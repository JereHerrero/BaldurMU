const client = require("..");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild || !message.id) return;

  let ch = db.get(`levelCh_${message.guild.id}`)
  let status = db.get(`levelStatus_${message.guild.id}`)
  let channel = client.channels.cache.get(ch);

  if (status == "active") {
    if (channel) {

      let memberId = message.author.id;

      let totalMsgS = db.get(`MsgS_${memberId}_${message.guild.id}`) || 0
      let currentLevel = db.get(`level_${memberId}_${message.guild.id}`) || 0

      
      if (totalMsgS < (5*currentLevel + 1)) {
        let newTotal = totalMsgS + 1
        db.set(`MsgS_${memberId}_${message.guild.id}`, newTotal)
      } else {
        
        let newLevel = currentLevel + 1
        db.set(`level_${memberId}_${message.guild.id}`, newLevel)

        let emb = new MessageEmbed()
          .setTitle("Congratulations 🎉")
          .addFields(
            {
              name: `・ You just levelled Up !`,
              value: `${message.author} You are now : LEVEL ${newLevel}`
            },
            {
              name: `・ Keep UP !`,
              value: `Keep Messaging to Level Up !
        Number of Messages reset to default !`
            }
          )
          .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()

        db.set(`MsgS_${memberId}_${message.guild.id}`, 0)

        channel.send({ embeds: [emb] })
      }
    }
  }
})