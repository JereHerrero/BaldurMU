const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "ping",
  aliases: ["latancy"],
  edesc: "ping",
  description: `Obtener el ping del BOT`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    message.delete()

    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle(":ping_pong:    Pong!  ")

      .addFields(
        {
          name: "• API Latency:",
          value: `╰-𒆕 ${Math.round(client.ws.ping)}ms`,
        }
      )


      .setThumbnail("http://icons.iconarchive.com/icons/google/noto-emoji-activities/1024/52744-ping-pong-icon.png")

      .setFooter(client.getFooter(message.author));


    message.channel.send({ embeds: [emb] })
  },
};


