const { MessageEmbed } = require(`discord.js`);


module.exports = {
  name: "dsm",
  edesc:"dsm",
  aliases: ["slowoff", "disableslowmode", "fastmode"],
  description: `disables slowmode`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: [],
  category: "Moderation",
  cooldown: 10,
  


  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 300 })

    await message.channel.setRateLimitPerUser(0)


    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle("✅OPERATION SUCCESSFUL")
      .addField("Slowmode is now Disabled", `ㅤ`)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setTimestamp()

    message.channel.send({ embeds: [emb] }).then((msg)=> {setTimeout(()=>msg.delete(),5000)})


  }
}
