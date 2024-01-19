const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "ban",
  aliases: ["hackban","fuck","fuckban"],
  edesc:"ban @user reason(optional)",
  description: `Banear a un usuario`,
  userPermissions: ["BAN_MEMBERS"],
  botPermissions: ["BAN_MEMBERS"],
  category: "Moderation",
  cooldown: 10,
  


  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    const victim = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reasons specified";

    if (!victim) {

      emb = (new MessageEmbed()
        .setColor("#343A40")
        .setTitle("❌ Operación fallida!  ")
        .addFields({name:`ㅤ`,value: "\n **No puedes banear a este usuario" +
          "\n**RAZÓN → : **" + "No mencionaste a un usuario"})
        .setTimestamp());

      message.channel.send({ embeds: [emb] })
    } else {

      if (message.member.roles.highest.position < victim.roles.highest.position && message.author.id != message.guild.ownerId) {

        emb = (new MessageEmbed()
          .setColor("#343A40")
          .setTitle("❌ Operación fallida  ")
          .addFields({name:`ㅤ`,value: "\n **No puedes banear a este usuario" +
            "\n**RAZÓN → : **" + "Este usuario es superior a ti"})
          .setTimestamp());

        message.channel.send({ embeds: [emb] })

      } else {

        if (!victim.bannable) {
          emb = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle("❌ Operación fallida!")
            .addFields({name:`ㅤ`,value: "\n **No puedes banear a este usuario" +
              "\n**RAZÓN → : **" + "Este usuario es superior a mi"})
            .setTimestamp());

          message.channel.send({ embeds: [emb] })


        }
        else {

          message.react("✅")


          emb = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle("✅ Operación exitosa!  ")
            .addField(`ㅤ`, "\n**BANEADO → : **" + '<@' + victim + '> ' +
              "\n**SERVER → : **" + `${message.guild}` +
              "\n**RAZÓN → : **" + reason +
              "\n**MODERADOR → : **" + '<@' + message.author.id + '> ')                       .setThumbnail(victim.displayAvatarURL({ dynamic: true }))
            .setTimestamp());

          await message.channel.send({ embeds: [emb] })

          emb2 = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle("⚠️ ESTAS BANEADO !  ")
            .addField(`ㅤ`,"\n**SERVER → : **" + `${message.guild}` +
              "\n**RAZÓN → : **" + reason +
              "\n**MODERADOR → : **" + '<@' + message.author.id + '> ')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp());

          victim.send({ embeds: [emb2] })

          victim.ban();

        }
      }
    }













  }
}
