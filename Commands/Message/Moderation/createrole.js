const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "createrole",
  aliases: ["rolecreate", "makerole"],
  edesc:"createrole role_name reason(optional)",
  description: `ctreates role with given name`,
  userPermissions: ["MANAGE_ROLES"],
  botPermissions: ["MANAGE_ROLES"],
  category: "Moderation",
  cooldown: 10,
 


  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    const role = args.join(" ")



    message.react("✅")

    if (!args) {
      emb = (new MessageEmbed()
        .setColor("#343A40")
        .setTitle("❌ Operation Unsuccessful !  ")
        .addFields({name:`ㅤ`,value: "\n **Can't create role !!" +
          "\n**REASON → : **" + "Role name not specified !"})
        .setTimestamp());

      message.channel.send({ embeds: [emb] })
    } else {

      message.guild.roles.create({
        name: role
      })

      emb = (new MessageEmbed()
        .setColor("#343A40")
        .setTitle("✅ Operation Successful !  ")
        .addFields({name:`ㅤ`,value: "\n**CREATED : **" + role +
          "\n**SERVER → : **" + `${message.guild}` +
          "\n**MODERATOR → : **" + '<@' + message.author.id + '> '})
        .setThumbnail(message.guild.iconURL({ dynamic: true }))

        .setTimestamp());

      message.channel.send({ embeds: [emb] })


    }
  }
}

