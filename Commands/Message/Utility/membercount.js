const { MessageEmbed } = require(`discord.js`);


module.exports = {
  name: "membercount",
  aliases: ["mc"],
  edesc:"mc",
  description: `displays number of bots and users`,
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code


    message.delete()


    await message.guild.members.fetch();
    let users = message.guild.members.cache.filter((m) => !m.user.bot).size
    let bots = message.guild.members.cache.filter((m) => m.user.bot).size
    let allMembers = message.guild.members.cache.size

    let emb = new MessageEmbed()
      .setTitle(`MemberCount`)
      .addFields({
        name: "For :",
        value: ` ${message.guild.name}`
      })
      .addFields({
        name: `Total Members`,
        value: `${allMembers}`,
        inline: false,
      })
      .addFields({
        name: `Users`,
        value: `╰ ${users}`,
        inline: true,
      }, {
        name: `Bots`,
        value: `╰ ${bots}`,
        inline: true,
      })
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("#343A40")
      .setFooter(client.getFooter(message.author))


    message.channel.send({ embeds: [emb] })



  }
}