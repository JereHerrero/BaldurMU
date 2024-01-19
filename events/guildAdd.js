const { MessageEmbed } = require("discord.js");
const client = require("../index");
let channelId = process.env.CHANNEL_JOIN
let channel = "";
client.on("ready",()=>{
channel = client.channels.cache.get(channelId)
})


client.on('guildCreate', guildadded => {

  ch = guildadded.channels.cache.find(channel => channel.type == "GUILD_TEXT")
  ch.createInvite().then(inv => {
    let emb = new MessageEmbed()
  .setColor("#343A40")
  .setTitle("Added to Guild")
  .addFields(
    {
      name : `• Guild : ${guildadded.name}`,
      value: `ㅤ╰───・𒁷ㅤ${inv.url}`
    },
    {
      name : `• Total number of Servers`,
      value: `ㅤ╰───・𒁷ㅤ${client.guilds.cache.size} Servers`
    }
  )
  .setTimestamp()
  .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))

  .setFooter({
          text: client.user.tag,
          iconURL: client.user.displayAvatarURL({ dynamic: true })
        })
    channel.send({ embeds: [emb] }), (err) => {
            if (err) { console.log(err); }
          }

});



})