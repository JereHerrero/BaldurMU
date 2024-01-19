const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
} = require("discord.js");

module.exports = {
  name: "info",
  aliases: [],
  edesc: "info <command>",
  description: `Informacion sobre comandos`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,


  run: async (client, message, args, prefix) => {
    // Code

    message.delete({ timeout: 1000 })

    const cmd = args.shift().toLowerCase();
    const command =
      client.mcommands.get(cmd) ||
      client.mcommands.find((cmds) => cmds.aliases && cmds.aliases.includes(cmd));

    if (!command) return;

    if (command) {

      message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor(`#343A40`)
            .setTitle("INFO COMANDOS")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .addFields(
              {
                name: `• **Uso :**`,
                value: `\`\`\`fix\n${process.env.PREFIX}${command.edesc}\n${command.description} \`\`\``
              }
            )
            .addFields(
              {
                name: `• **Alias y Cooldown:**`,
                value: `\`\`\`Aliases : ${command.aliases} \nCooldown : ${command.cooldown} Secondsㅤ\`\`\``
              }
            )
            .setFooter({
              text: client.user.tag,
              iconURL: client.user.displayAvatarURL({ dynamic: true })
            })
            .setTimestamp()
        ]
      })

    }
  }
}
