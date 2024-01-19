const { MessageEmbed } = require(`discord.js`);
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));



module.exports = {
  name: "meme",
  aliases: [],
  edesc:"meme",
  description: `Envia un meme random`,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })


    var url = await fetch("https://www.reddit.com/r/memes/random/.json");
    var random = await url.json();

    let emb = new MessageEmbed().setColor("#343A40").setTitle(`Meme Random | ${random[0].data.children[0].data.title}`)
      .setImage(random[0].data.children[0].data.url)

      .setTimestamp()

    message.channel.send({ embeds: [emb] })


  }

}