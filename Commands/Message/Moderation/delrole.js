const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "delrole",
  aliases: ["roledelete"],
  edesc:"deleterole @role reason(optional)",
  description: `deletes mentioned role`,
  userPermissions: ["MANAGE_ROLES"],
  botPermissions: ["MANAGE_ROLES"],
  category: "Moderation",
  cooldown: 10,

  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    const role = message.mentions.roles.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reasons specified";



    if (!role) {

      emb = (new MessageEmbed()
        .setColor("#343A40")
        .setTitle("❌ Operation Unsuccessful !  ")
        .addField(`ㅤ`, "\n **Can't delete role !!" +
          "\n**REASON → : **" + "No role mentioned ! \n\`If you are using role id use it as <@& ROLE_ID >\`")
        .setTimestamp());

      message.channel.send({ embeds: [emb] })
    } else {

      if (message.member.roles.highest.position < role.position && message.author.id != message.guild.ownerId) {

        emb = (new MessageEmbed()
          .setColor("#343A40")
          .setTitle("❌ Operation Unsuccessful !  ")
          .addField(`ㅤ`, "\n **Can't delete role !!" +
            "\n**REASON → : **" + "Role is superior to your highest role !")
          .setTimestamp());

        message.channel.send({ embeds: [emb] })

      } else {

        if (role.position > message.guild.me.roles.highest.position) {
          emb = (new MessageEmbed()
             .setColor("#343A40")
            .setTitle("❌ Operation Unsuccessful !  ")
            .addField(`ㅤ`, "\n **Can't remove role from user !!" +
              "\n**REASON → : **" + "Role is superior to my highest role !")
            .setTimestamp());

          message.channel.send({ embeds: [emb] })


        }
        else {


          message.react("✅")

          message.guild.roles.cache.find(Role => Role.id === role.id).delete();

          emb = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle("✅ Operation Successful !  ")
            .addField(`ㅤ`, "\n**DELETED : **" + role.name  +
              "\n**SERVER → : **" + `${message.guild}` +
              "\n**REASON → : **" + reason +
              "\n**MODERATOR → : **" + '<@' + message.author.id + '> ')
            .setThumbnail(message.guild.iconURL({ dynamic: true }))

            .setTimestamp());

          message.channel.send({ embeds: [emb] })


        }
      }
    }





  }
}

