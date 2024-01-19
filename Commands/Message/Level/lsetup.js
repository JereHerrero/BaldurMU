const { MessageEmbed } = require(`discord.js`);
const db = require("quick.db")

module.exports = {
  name: "lsetup",
  aliases: [],
  edesc:"lsetup",
  description: `Instalar sistema de niveles`,
  userPermissions: ["MANAGE_CHANNELS", "MANAGE_ROLES", "MANAGE_SERVER"],
  botPermissions: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
  category: "Level",
  cooldown: 5,

  run: async (client, message, args, prefix) => {

    //code

    message.delete()

    if (args[0]) {
      let emb = new MessageEmbed()
        .setColor("#343A40")
        .setTitle("✅ Operación exitosa!  ")
        .addFields({
          name: "Solicitado por :",
          value: `${message.member.user}`
        },
          {
            name: "Sistema de niveles creado exitosamente:",
            value: `╰-𒆕 Canal : ${args[0]} `
          })
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTimestamp()


      db.set(`levelCh_${message.guild.id}`, args[0].substring(2, 20))
      db.set(`levelStatus_${message.guild.id}`, "active")

      message.channel.send({ embeds: [emb] })
    }
    if (!args[0]) {

      message.guild.channels
        .create(`Levels`,
          {
            type: "GUILD_TEXT",
            rateLimitPerUser: 3,
            reason: `Level Logs`,
            topic: `Level Logs`,
          })
        .then(async (ch) => {
          await db.set(`levelCh_${message.guild.id}`, ch.id)
          await db.set(`levelStatus_${message.guild.id}`, "active")

          let emb = new MessageEmbed()
            .setColor("#343A40")
            .setTitle("✅ Operación exitosa!  ")
            .addFields(
              {
                name: "<a:arrow4:1107193257894629427> Solicitado por :",
                value: `ㅤㅤ╰-𒆕 ${message.member.user}`
              },
              {
                name: "<a:arrow4:1107193257894629427> Sistema log de niveles creado exitosamente:",
                value: `ㅤㅤ╰-𒆕 Canal : ${ch}  `
              })
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()

          message.channel.send({ embeds: [emb] })

        })

    }

  }
}