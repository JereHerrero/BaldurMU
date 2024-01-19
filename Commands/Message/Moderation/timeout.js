const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "timeout",
  aliases: ["stfu"],
  edesc:"timeout @user duration reason(optional)",
  description: `timeouts mentioned user`,
  userPermissions: ["MODERATE_MEMBER"],
  botPermissions: [],
  category: "Moderation",
  cooldown: 10,



  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    const victim = message.mentions.members.first();
    let reason = args.slice(2).join(" ");
    let duration = args[1]
    if (!reason) reason = "No reasons specified";

    if (!victim) {

      emb = (new MessageEmbed()
        .setColor("#343A40")
        .setTitle("❌ Operation Unsuccessful !  ")
        .addField(`ㅤ`, "\n **Can't TIMEOUT user !!" +
          "\n**REASON → : **" + "No users mentioned !")
        .setTimestamp());

      message.channel.send({ embeds: [emb] })
    } else {
      if (message.member.roles.highest.position < victim.roles.highest.position && message.author.id != message.guild.ownerId) {

        emb = (new MessageEmbed()
          .setColor("#343A40")
          .setTitle("❌ Operation Unsuccessful !  ")
          .addField(`ㅤ`, "\n **Can't TIMEOUT user !!" +
            "\n**REASON → : **" + "Member is superior to you !")
          .setTimestamp());

        message.channel.send({ embeds: [emb] })

      } else {


        if (!duration) {

          message.react("✅")
          duration = 5
          time = duration * 1000 * 60
          victim.timeout(time);

          emb = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle("✅ Operation Successful !  ")
            .addField(`ㅤ`, "\n**TIMED OUT → : **" + '<@' + victim + '> ' +
              "\n**SERVER → : **" + `${message.guild}` +
              "\n**REASON → : **" + reason +
              "\n**DURATION → : **" + duration + " minutes - (Default)" +
              "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')
            .setThumbnail(victim.displayAvatarURL({ dynamic: true }))
            
            .setTimestamp());

          message.channel.send({ embeds: [emb] })

          emb2 = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle( "⚠️ YOU GOT TIMED OUT !  ")
            .addField(`ㅤ`,"\n**SERVER → : **" + `${message.guild}` +
              "\n**REASON → : **" + reason +
              "\n**DURATION → : **" + duration + " minutes" +
              "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')                       .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp());

          victim.send({ embeds: [emb2] })
        } else {

          message.react("✅")
          time = duration * 1000 * 60
          victim.timeout(time);

          emb = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle("✅ Operation Successful !  ")
            .addField(`ㅤ`, "\n**TIMED OUT → : **" + '<@' + victim + '> ' +
              "\n**SERVER → : **" + `${message.guild}` +
              "\n**REASON → : **" + reason +
              "\n**DURATION → : **" + duration + " minutes" +
              "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')
            .setThumbnail(victim.displayAvatarURL({ dynamic: true }))
            .setTimestamp());

          message.channel.send({ embeds: [emb] })

          emb2 = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle( "⚠️ YOU GOT TIMED OUT !  ")
            .addField(`ㅤ`,"\n**SERVER → : **" + `${message.guild}` +
              "\n**REASON → : **" + reason +
              "\n**DURATION → : **" + duration + " minutes" +
              "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')                       .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTimestamp());

          victim.send({ embeds: [emb2] })

        }
      }
    }












  }
}
