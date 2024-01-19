const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "avatar",
  aliases: ["av"],
  edesc:"av @user",
  description: `Muestra el avatar del usuario mencionado`,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,

  run: async (client, message, args, prefix) => {
    // Code


    message.delete()

	let user = message.mentions.users.first()
    if (user) {
	const avatar = user.displayAvatarURL({ dynamic: true, size: 2048 });
    let emb = new MessageEmbed()

	.setColor('#343A40')
    .setImage(avatar)
    .setDescription(`Avatar of ${user}`)
    .setTimestamp()

    message.channel.send({ embeds: [emb] })

    } else {

	const avatar = message.author.displayAvatarURL({ dynamic: true, size: 2048 });


    let emb = new MessageEmbed()

    .setColor('#343A40')
    .setImage(avatar)
    .setDescription(`Avatar of ${message.author}`)
    .setTimestamp()

    message.channel.send({ embeds: [emb] })
    }



  }
}