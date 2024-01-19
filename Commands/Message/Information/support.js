const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "support",
  aliases: ["dev"],
  edesc: "support",
  description: `Envía el enlace de invitación del servidor de soporte`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code


    message.delete()

    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle("Necesitas ayuda? Uneté al discord de Soporte :")

      .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))

      .addFields(
        {
          name: "Click en el enlace boton azul :",
          value: `╰-𒆕 [Contactar al DEV](KAPPA XD)`
        }
      )

      .setFooter(client.getFooter(message.author));


    message.channel.send({ embeds: [emb] })

  },
};

