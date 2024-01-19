const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "invite",
  aliases: ["inv"],
  edesc: "invite",
  description: `Envía el enlace de invitación del bot`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,



  run: async (client, message, args, prefix, queue) => {
    // Code


    message.delete()

    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle("Invite Link :")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))


      .addFields(
        {
          name: "Click Blue Text Below :",
          value: `╰-𒆕 [Invite Link](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)`
        }
      )
      .setFooter(client.getFooter(message.author));



    message.channel.send({ embeds: [emb] })

  },
};

