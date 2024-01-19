const { MessageEmbed } = require(`discord.js`);
const googleIt = require('google-it')



module.exports = {
  name: "google",
  aliases: ["g"],
  edesc:"google < query >",
  description: `searches google sends resultss`,
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 5,


  run: async (client, message, args, prefix) => {
    // Code


    message.delete({ timeout: 300 })


    const emb = new MessageEmbed()
      .setTitle("Google Search Results")
      .setColor("#343A40")
      .setThumbnail("https://www.linkpicture.com/q/image_2022-07-07_232251655.png")
      .setTimestamp()
      .setFooter(client.getFooter(message.author))
    


    await googleIt({ 'query': args.join(" "), 'disableConsole': true, 'limit': 10 }).then(results => {
      results.forEach(function(item, index) {
        emb.addFields({
          name:"<a:play_pause:1151419767866003506>" + (index + 1) + ": " + item.title,
          value:"<" + item.link + ">" + "\n" + item.snippet.substring(0, 300)
        });
      });
    })

    message.channel.send({ embeds: [emb] }).then(msg => setTimeout(() => { msg.delete() }, 60000))

  }
}