const { MessageEmbed } = require(`discord.js`);
const { afk } = require("../../../handlers/afk");



module.exports = {
  name: "afk",
  aliases: [],
  edesc: "afk <args (optional)>",
  description: `sets afk`,
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,


  run: async (client, message, args) => {
    // Code


    message.delete({ timeout: 300 })





    const reason = args.join(" ") || 'No reason!';

    afk.set(message.author.id, [Date.now(), reason]);

    let emb = (new MessageEmbed()
      .setColor("#343A40")
      .setTitle("✅ Operation Successful !  ")
      .addField(`AFK has been set`, reason)
      .setTimestamp());

    message.channel.send({ embeds: [emb] }).then(msg => {
        setTimeout(() => msg.delete(), 5000)
      })

  }
}

