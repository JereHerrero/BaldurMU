const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "unban",
  aliases: [],
  edesc:"unban user_id reason(optional)",
  description: `unbans mentioned user`,
  userPermissions: ["BAN_MEMBERS"],
  botPermissions: [],
  category: "Moderation",
  cooldown: 10,


  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    const victim = message.mentions.members.first() || args[0]
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reasons specified";


    if (!victim) {

      emb = (new MessageEmbed()
        .setColor("#343A40")
        .setTitle("❌ Operation Unsuccessful !  ")
        .addField(`ㅤ`, "\n **Can't UNBAN user !!" +
          "\n**REASON → : **" + "No users/id mentioned ! \n \`Please use user id and not mentions\`")
        .setTimestamp());

      message.channel.send({ embeds: [emb] })
    } else {

      let banList = await message.guild.bans.fetch();
      let bannedUser = null
      try{
      bannedUser = banList.get(victim).user;
      }catch(error){banneduser = null}
      
      if (!bannedUser) {

        emb = (new MessageEmbed()
          .setColor("#0B666A")
          .setTitle("❌ Operation Unsuccessful !  ")
          .addField(`ㅤ`, "\n **Can't UNBAN user !!" +
            "\n**REASON → : **" + "User not found ! \n \`Please use user id and not mentions\`")
          .setTimestamp());

        message.channel.send({ embeds: [emb] })


      }
      else {

        message.react("✅")

        message.guild.members.unban(victim)

        emb = (new MessageEmbed()
          .setColor("#0B666A")
          .setTitle("✅ Operation Successful !  ")
          .addField(`ㅤ`, "\n**UNBANNED → : **" + '<@' + victim + '> ' +
            "\n**SERVER → : **" + `${message.guild}` +
            "\n**REASON → : **" + reason +
            "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')
          .setThumbnail(victim.displayAvatarURL({ dynamic: true }))
          .setTimestamp());

        message.channel.send({ embeds: [emb] })

        emb2 = (new MessageEmbed()
          .setColor("#0B666A")
          .setTitle( "⚠️ YOU GOT UNBANNED !  ")
          .addField(`ㅤ`,"\n**SERVER → : **" + `${message.guild}` +
            "\n**REASON → : **" + reason +
            "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setTimestamp());

        victim.send({ embeds: [emb2] })
      }

    }













  }
}
