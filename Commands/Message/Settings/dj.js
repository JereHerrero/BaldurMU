module.exports = {
  name: "dj",
  aliases: ["setupdj"],
  edesc:"dj @role",
  description: `DJ system on/off`,
  userPermissions: ["MANAGE_GUILD"],
  botPermissions: ["MANAGE_GUILD"],
  category: "Settings",
  cooldown: 5,

 
  run: async (client, message, args) => {
    // Code
    let options = args[0];
    switch (options) {
      case "enable":
        {
          let role =
            message.mentions.roles.first() ||
            message.guild.roles.cache.get(args[1]);
          if (!role) {
            return client.embed(
              message,
              `${client.config.emoji.ERROR} Please Provide A Role ID or Mentions`
            );
          } else {
            await client.music.set(`${message.guild.id}.djrole`, role.id);
            client.embed(
              message,
              `${client.config.emoji.SUCCESS} ${role} Role Added to DJ Role`
            );
          }
        }
        break;
      case "disable":
        {
            await client.music.set(`${message.guild.id}.djrole`, null);
            client.embed(
              message,
              `${client.config.emoji.SUCCESS} DJ System Disabled`
            );
        }
        break;

      default:{
          client.embed(message,`** ${client.config.emoji.ERROR} Wrong Usage **  \n\n \`${process.env.PREFIX || "$"}dj enable <@role>\` \n\n \`${process.env.PREFIX || "$"}dj disable\` `)
      }
        break;
    }
  },
};
