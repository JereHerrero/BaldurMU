const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "deltimeout",
  aliases: ["dto"],
  edesc:"deltimeout @user reason(optional)",
  description: `delete timeouts of mentioned user`,
  userPermissions: ["MODERATE_MEMBER"],
  botPermissions: [],
  category: "Moderation",
  cooldown: 10,


  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    const victim = message.mentions.members.first();
    let reason = args.slice(2).join(" ");
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

        message.react("✅")
        time = 0
        victim.timeout(time);

        emb = (new MessageEmbed()
          .setColor("#343A40")
          .setTitle("✅ Operation Successful !  ")
          .addField(`ㅤ`, "\n**DELETED TIMEOUT → : **" + '<@' + victim + '> ' +
            "\n**REASON → : **" + reason +
            "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')
          .setThumbnail(victim.displayAvatarURL({ dynamic: true }))
          .setTimestamp());

        message.channel.send({ embeds: [emb] })

      }
    }

  }
}
