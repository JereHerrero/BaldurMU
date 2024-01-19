const { MessageEmbed } = require(`discord.js`);
const translate = require('@iamtraction/google-translate')

module.exports = {
  name: "translate",
  aliases: ["tr"],  
  edesc:`tr < args > or reply to msg to translate with ${process.env.PREFIX}tr`,
  description: `translates enter/mention-ed text`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  category: "Utility",
  cooldown: 5,
  


  run: async (client, message, args, prefix) => {
    // Code

    message.delete()
    let query = args.join(" ")



    if (query) {


      if (query) {
        let result = await translate(query, { to: "en" })
        let emb = new MessageEmbed()
          .setColor("#343A40")
          .addField("<a:play_pause:1151419767866003506> Query  :  ", "ㅤㅤ╰-𒆕" + query)
          .addField("<a:play_pause:1151419767866003506> Result :  ", "ㅤㅤ╰-𒆕" + result.text)
        message.channel.send({ embeds: [emb] })
      }
    }


    if (!query) {
      try {
        let repliedMessage = await message.fetchReference()
        query = repliedMessage.content

        let result = await translate(query, { to: "en" })
        let emb = new MessageEmbed()
          .setColor("#343A40")
          .addFields(
            {
              name: "<a:play_pause:1151419767866003506> Query  :  ",
              value: "ㅤㅤ╰-𒆕" + query
            },
            {
              name: "<a:play_pause:1151419767866003506> Result :  ",
              value: "ㅤㅤ╰-𒆕" + result.text
            }
          )
          .setFooter(client.getFooter(message.author));

        message.channel.send({ embeds: [emb] })
      }
      catch (err) {

        let emb = new MessageEmbed().setColor("#343A40").setTitle("You Dingus !")
          .addFields(
            {
              name: "Input what you want to translate !",
              value: "`%translate <search query>`"
            }
          )
          .setTimestamp()
        message.channel.send({ embeds: [emb] }).then((msg) => setTimeout(() => msg.delete(), 5000))
      }



    }










  }
}