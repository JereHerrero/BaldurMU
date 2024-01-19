const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "setupmusic",
  aliases: ["msetup"],
  edesc:"msetup",
  description: `setup music channel in server`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  category: "Settings",
  cooldown: 5,
  


  run: async (client, message, args, prefix, queue) => {
    // Code

    message.delete()

    let channel = await client.music.get(`${message.guild.id}.music.channel`);
    let oldChannel = message.guild.channels.cache.get(channel);
    if (oldChannel) {
      let emb = new MessageEmbed()
        .setColor("343A40")
        .setDescription(`Search Request Channel already Setup in ${oldChannel} Delete old channel to Setup Again`)
      message.channel.send({ embeds: [emb] })
    } else {
      message.guild.channels
        .create(`🎵・${client.user.username}-req`, {
          type: "GUILD_TEXT",
          rateLimitPerUser: 3,
          reason: `for music bot`,
          topic: `Music Request Channel for ${client.user.username}, Type Song Name or Link to Play Song`,
        })
        .then(async (ch) => {
          await ch
            .send({ embeds: [client.queueembed(message.guild)] })
            .then(async (queuemsg) => {
              await ch
                .send({
                  embeds: [client.playembed(message.guild)],
                  components: [client.buttons(true)],
                })
                .then(async (playmsg) => {
                  await client.music.set(`${message.guild.id}.music`, {
                    channel: ch.id,
                    pmsg: playmsg.id,
                    qmsg: queuemsg.id,
                  });
                  let emb = new MessageEmbed()
                    .setColor("343A40")
                    .setDescription(`Successfully Setup Music Request System in ${ch}`)
                  message.channel.send({ embeds: [emb] })
                });
            });
        });
    }
  },
};
