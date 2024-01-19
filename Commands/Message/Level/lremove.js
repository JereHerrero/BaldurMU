const { MessageEmbed } = require(`discord.js`);
const db = require("quick.db")

module.exports = {
  name: "lremove",
  aliases: [],
  edesc:"lremove",
  description: `Revisar nivel de un usuario`,
  userPermissions: ["MANAGE_CHANNELS", "MANAGE_ROLES", "MANAGE_SERVER"],
  botPermissions: ["MANAGE_CHANNELS", "MANAGE_ROLES"],
  category: "Level",
  cooldown: 5,

  run: async (client, message, args, prefix) => {

    //code

    message.delete()

  let ch = db.get(`levelCh_${message.guild.id}`)
  let status = db.get(`levelStatus_${message.guild.id}`)
  let channel = client.channels.cache.get(ch);
    

    if(status == "active")
    {
      if(channel)
      {
        channel.delete()

        db.set(`levelStatus_${message.guild.id}`, "inactive")
    
        let emb = new MessageEmbed()
            .setColor("#343A40")
            .setTitle("✅ Operación exitosa!  ")
            .addFields(
              {
                name: "<a:arrow4:1107193257894629427> Solicitado por :",
                value: `ㅤㅤ╰-𒆕 ${message.member.user}`
              },
              {
                name: "<a:arrow4:1107193257894629427> Sistema Log de niveles eliminado con exito",
                value: `ㅤㅤ╰-𒆕 Canal : ${ch}  `
              })
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()

          message.channel.send({ embeds: [emb] })
      }
      else{

        db.set(`levelStatus_${message.guild.id}`, "inactive")
    
        let emb = new MessageEmbed()
            .setColor("#0B666A")
            .setTitle("✅ Operación exitosa!  ")
            .addFields(
              {
                name: "<a:arrow4:1107193257894629427> Solicitado por :",
                value: `ㅤㅤ╰-𒆕 ${message.member.user}`
              },
              {
                name: "<a:arrow4:1107193257894629427> Sistema Log de niveles eliminado con exito",
                value: `ㅤㅤ╰-𒆕 Canal : N/A (Pre-borrado)  `
              })
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()

          message.channel.send({ embeds: [emb] })
      } 
    }else{
    
        let emb = new MessageEmbed()
            .setColor("#343A40")
            .setTitle("✅ Operación exitosa!  ")
            .addFields(
              {
                name: "<a:arrow4:1107193257894629427> Solicitado por :",
                value: `ㅤㅤ╰-𒆕 ${message.member.user}`
              },
              {
                name: "<a:arrow4:1107193257894629427> Sistema Log de niveles no fue eliminado",
                value: `ㅤㅤ╰-𒆕 Razón : El sistema no esta configurado `
              })
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp()

          message.channel.send({ embeds: [emb] })      
    }

    
  }
}