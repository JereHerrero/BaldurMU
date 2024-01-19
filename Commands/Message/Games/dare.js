const { MessageEmbed } = require(`discord.js`);
const tord = require('better-tord');


module.exports = {
  name: "dare",
  aliases: [],
  edesc:"dare",
  description: `Envia un desafio random`,
  userPermissions: [],
  botPermissions: [],
  category: "Games",
  cooldown: 5,
  


  run: async (client, message, args, prefix) => {
    // Code


    message.delete({ timeout: 300 })
    
    const dare = tord.get_dare();

    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle(`Random Dare`)
      .addFields(
        {
          name:"Challenge :",
          value: dare
        }
      )

    message.channel.send({ embeds: [emb] })


  }

}