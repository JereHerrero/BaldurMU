const { MessageEmbed } = require(`discord.js`);
const anyanime = require("anyanime");

module.exports = {
  name: "anime",
  aliases: [],
  edesc:"anime",
  description: `Enviar foto random de anime`,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,
  


  run: async (client, message, args, prefix) => {
    // Code

    message.delete()
    const anime = anyanime.anime();
     let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle(`Here you go :`)
      .setImage(anime)


    message.channel.send({ embeds: [emb] })

    


  }

}