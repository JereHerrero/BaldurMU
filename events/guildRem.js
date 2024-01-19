const { MessageEmbed } = require("discord.js");
const client = require("../index");
let channelId = process.env.CHANNEL_LEAVE
let channel = "";
client.on("ready",()=>{
channel = client.channels.cache.get(channelId)
})


client.on('guildDelete', guildremoved => {

    let emb = new MessageEmbed()
  .setColor("#343A40")
  .setTitle("Removed from Guild")
  .addFields(
    {
      name : `• Guild : ${guildremoved.name}`,
      value: `ㅤ╰───・𒁷ㅤSo Sad !!!!`
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
    channel.send({ embeds: [emb] })

  
})