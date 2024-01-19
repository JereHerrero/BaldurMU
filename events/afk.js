const { afk } = require("../handlers/afk");
const client = require("../index");
const moment = require("moment");
const { MessageEmbed } = require("discord.js")
// afk bot

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;

  const mentionedMember = message.mentions.members.first();
  if (mentionedMember) {
    const data = afk.get(mentionedMember.id);

    if (data) {
      const [timestamp, reason] = data;
      const timeAgo = moment(timestamp).fromNow();

    let emb = (new MessageEmbed()
      .setColor("#0B666A")
      .setTitle("💤 User is currently AFK !  ")
      .addField(`USER : `, "<@"+mentionedMember + ">")
      .addField(`DURATION : `, timeAgo + ".")
      .addField(`REASON : `, reason + ".")
      .setTimestamp());

    message.reply({ embeds: [emb] }).then(msg => {
        setTimeout(() => msg.delete(), 5000)
      })
      
    }
  }

  const getData = afk.get(message.author.id);
  if (getData) {
    afk.delete(message.author.id);
    
    let emb = (new MessageEmbed()
      .setColor("#0B666A")
      .setTitle("✅ Operation Successful !  ")
      .addField(`AFK has been removed`, `Welcome Back ❤️`)
      .setTimestamp());

    message.reply({ embeds: [emb] }).then(msg => {
        setTimeout(() => msg.delete(), 5000)
      })
  }
});
