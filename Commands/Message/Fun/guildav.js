const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "guildav",
  aliases: ["gav"],
  edesc:"guildav",
  description: `Muestra el icono del Server`,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,

  run: async (client, message, args, prefix) => {
    // Code


    message.delete()

    
 	const avatar = message.guild.iconURL({ dynamic: true, size: 2048 });

    let emb = new MessageEmbed()

	.setColor('#343A40')
    .setImage(avatar)
    .setDescription(`Avatar of ${message.guild}`)
    .setTimestamp()

    message.channel.send({ embeds: [emb] })

  }
}