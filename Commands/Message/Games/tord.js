const { MessageEmbed } = require(`discord.js`);
const tord = require('better-tord');


module.exports = {
  name: "td",
  aliases: ["tord"],
  edesc:"tord",
  description: `Envia T o D aleatorio`,
  userPermissions: [],
  botPermissions: [],
  category: "Games",
  cooldown: 5,
  


  run: async (client, message, args, prefix) => {
    // Code


    message.delete({ timeout: 300 })

const t_or_d = tord.get_random_question();


    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle(`Aleatorio T_or_D`)
      .addFields(
        {
          name:"Desafio :",
          value: t_or_d
        }
      )

    message.channel.send({ embeds: [emb] })


  }

}