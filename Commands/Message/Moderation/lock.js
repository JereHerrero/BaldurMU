const Discord = require('discord.js');

module.exports = {
  name: 'lock',
  aliases: ["lock", "l"],
  edesc: "lock any channel",
  description: "Locks Any Channel",
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: ["MANAGE_CHANNELS"],
  category: "Moderation",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    //Code

    if (message.member.permissions.has('MANAGE_CHANNELS'));
    {}

    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.reply('Could not find channel.');
    }

    // Overwrite the channel permissions to deny everyone the SEND_MESSAGES permission.
    channel.overwritePermissions([
      {
        id: message.guild.id,
        deny: ['SEND_MESSAGES'],
      },
    ]);

    return message.reply('Channel has been locked.');
  },
};
