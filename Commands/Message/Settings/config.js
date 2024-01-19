const { MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
  name: "config",
  aliases: ["cnf"],
  edesc:"config",
  description: `see config of current server`,
  userPermissions: [],
  botPermissions: [],
  category: "Settings",
  cooldown: 5,


  run: async (client, message, args,) => {
    // Code
    let data = await client.music.get(message.guild.id);

    let googleCh = db.get(`${message.guild.id}_google`)
    let ticketCh = db.get(`${message.guild.id}_ticket`)
    let google = null
    let ticket = null
    let ticketChnl = message.guild.channels.cache.get(ticketCh)
    let googleChnl = message.guild.channels.cache.get(googleCh)

    if (ticketChnl) {
      ticket = `<#`+ticketChnl.id+`>`
    }
    if (googleChnl) {
      google = `<#`+googleChnl.id+`>`
    }


    if (!google) {
      google = `${client.config.emoji.ERROR}  \`Disabled\``

    }

    if (!ticket) {
      ticket = `${client.config.emoji.ERROR}  \`Disabled\``
    }

    message.reply({
      embeds: [
        new MessageEmbed()
          .setColor(client.config.embed.color)
          .setAuthor({
            name: `${message.guild.name} Config`,
            iconURL: message.guild.iconURL({ dynamic: true }),
          })
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .addFields([
            {
              name: `Prefix`,
              value: `\`${process.env.PREFIX || "."}\``,
            },
            {
              name: `DJ`,
              value: `${
                data.djrole
                  ? `${client.config.emoji.SUCCESS} \`Enabled\``
                  : `${client.config.emoji.ERROR}  \`Disabled\``
                }`,
            },
            {
              name: `Autoresume`,
              value: `${
                data.autoresume
                  ? `${client.config.emoji.SUCCESS} \`Enabled\``
                  : `${client.config.emoji.ERROR}  \`Disabled\``
                }`,
            },
            {
              name: `Music Request Channel`,
              value: `${
                data.music.channel
                  ? `<#${data.music.channel}>`
                  : `${client.config.emoji.ERROR}  \`Disabled\``
                }`,
            },
            {
              name: `Google Request Channel`,
              value: google
            },
            {
              name: `Ticket Create Channel`,
              value: ticket
            },
          ])
          .setFooter(client.getFooter(message.author)),
      ],
    });
  },
};
