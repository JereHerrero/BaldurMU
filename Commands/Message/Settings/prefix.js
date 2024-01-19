const { PREFIX } = require("../../../settings/config");

module.exports = {
  name: "prefix",
  aliases: ["prefix", "prefix set"],
  edesc:"prefix set <prefix> / prefix reset",
  description: `change prefix of current server`,
  userPermissions: ["MANAGE_GUILD"],
  botPermissions: ["MANAGE_GUILD"],
  category: "Settings",
  cooldown: 5,


  
  run: async (client, message, args) => {
    // Code
    let options = args[0];
    switch (options) {
      case "set":
        {
          let nPrefix = args[1];
          if (!nPrefix) {
            return client.embed(
              message,
              `${client.config.emoji.ERROR} Please Provide New Prefix`
            );
          } else {
            await client.music.set(`${message.guildId}.prefix`, nPrefix);
            client.embed(
                message,
                `${client.config.emoji.SUCCESS} Prefix Updated to \`${nPrefix}\``
              );
          }
        }
        break;
      case "reset":
        {
            await client.music.set(`${message.guildId}.prefix`, PREFIX);
            client.embed(
                message,
                `${client.config.emoji.SUCCESS} Prefix Updated to \`${PREFIX}\``
              );
        }
        break;

      default:
        {
          client.embed(
            message,
            `** ${client.config.emoji.ERROR} Wrong Usage **  \n\n \`${prefix}prefix set <newprefix>\` \n\n \`${prefix}prefix reset\` `
          );
        }
        break;
    }
  },
};
