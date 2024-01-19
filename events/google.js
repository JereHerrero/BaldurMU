const { cooldown, check_dj, databasing } = require("../handlers/functions");
const client = require("../index");
const { PREFIX: botPrefix, emoji } = require("../settings/config");
const { Permissions, MessageEmbed } = require("discord.js");
const db = require("quick.db")
const googleIt = require('google-it')

client.on(`messageCreate`, async message => {


  let chnl = await db.get(`${message.guild.id}_google`)
  let vchnl = await db.get(`${message.guild.id}_vouch`)

  


  if (message.channel.id == vchnl && message.author.id != "967514923229933588") {
    message.delete()
  }else if(message.channel.id == vchnl && message.author.id == "967514923229933588")
           {
    message.react("<a:hashtag:1157945962543718411>")
    message.react("<:LEGIT2:1158304650274033664>")
    message.react("<:LEGIT2:1158304650274033664>")
    message.react("<:LEGIT2:1158304650274033664>")
           }



  if (message.channel.id == chnl) {

    if (message.author.bot) return;

    message.delete()

    let args = message.content

    if (args == "%clr all") return;

    const emb = new MessageEmbed()
      .setTitle("Google Search Results")
      .setColor("#0B666A")
      .setThumbnail("https://www.linkpicture.com/q/image_2022-07-07_232251655.png")
      .setTimestamp()


    await googleIt({ 'query': args, 'disableConsole': true, 'limit': 10 }).then(results => {
      results.forEach(function(item, index) {
        emb.addField("<a:play_pause:1151419767866003506>" + (index + 1) + ": " + item.title, "<" + item.link + ">" + "\n" + item.snippet.substring(0, 300));
      });
    })

    message.channel.send({ embeds: [emb] }).then(msg => setTimeout(() => { msg.delete() }, 60000))


  }

}
)