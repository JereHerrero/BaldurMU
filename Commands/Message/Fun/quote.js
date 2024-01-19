const { MessageEmbed } = require(`discord.js`);
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "quote",
  aliases: ["qt"],
  edesc:"quote",
  description: `Envia un quote random`,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,
  


  run: async (client, message, args, prefix) => {
    // Code


    message.delete({ timeout: 300 })

    var url = await fetch("https://www.reddit.com/r/quotes/random/.json");
    var random = await url.json();

    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle(`Hope this Motivates You :`)
      .setDescription(`${random[0].data.children[0].data.title}`)


    message.channel.send({ embeds: [emb] })


  }

}