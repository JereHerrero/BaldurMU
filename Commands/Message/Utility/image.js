const { MessageEmbed } = require(`discord.js`);
const { GOOGLE_IMG_SCRAP, GOOGLE_QUERY } = require('google-img-scrap');



module.exports = {
  name: "img",
  aliases: ["image", "imageof", "image of"],
  edesc:"img < query >",
  description: `searches and sends images`,
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    if(args)
    {
    let query = args.join(" ")

    message.delete({ timeout: 300 })


    let image = await GOOGLE_IMG_SCRAP({
      search: query,
      limit: 100,
    });

    let i = Math.floor((Math.random() * image.result.length) + 1)

    message.channel.send(image.result[i].url)
    }
    else{
      emb = new MessageEmbed().setColor("#343A40").setTitle("You Dingus !")
        .addFields({name:"Input what you want to search !",value: "`%img <search query>`"})
        .setTimestamp()
      message.channel.send({ embeds: [emb] })
    }




  }

}