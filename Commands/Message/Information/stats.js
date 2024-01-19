const { Message, MessageEmbed, version } = require("discord.js");
const BOT = require("../../../handlers/Client");
const { Queue } = require("distube");
let os = require("os");
let cpuStat = require("cpu-stat");

module.exports = {
  name: "stats",
  aliases: ["botinfo"],
  description: `See stats of bot`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["EMBED_LINKS"],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  run: async (client, message, args, prefix, queue) => {
    // Code
    message.delete();

    let totalSeconds = message.client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days}d ${hours}h ${minutes}m and ${seconds}s `;

    let connectedchannelsamount = 0;
    let guilds = client.guilds.cache.map((guild) => guild);
    for (let i = 0; i < guilds.length; i++) {
      if (guilds[i].me.voice.channel) connectedchannelsamount += 1;
    }
    if (connectedchannelsamount > client.guilds.cache.size)
      connectedchannelsamount = client.guilds.cache.size;
    cpuStat.usagePercent(function(err, percent, seconds) {
      message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor("#343A40")
            .setAuthor({
              name: client.user.username,
              iconURL: client.user.displayAvatarURL({ dynamic: true }),
            })
            .addFields(
              {
                name: `⌚ • **Ping**`,
                value: `\`\`\`${client.ws.ping}ms\`\`\``,
                inline: true,
              },
              {
                name: `🛡️ • **Servers**`,
                value: `\`\`\`Total: ${client.guilds.cache.size} servers\`\`\``,
                inline: true,
              },
              {
                name: `👥 • **Users**`,
                value: `\`\`\`Total: ${client.guilds.cache.reduce(
                  (acc, guild) => acc + guild.memberCount,
                  0
                )} users\`\`\``,
                inline: true,
              },
              {
                name: `🟩 • **Node Version**`,
                value: `\`\`\`v${process.versions.node}\`\`\``,
                inline: true,
              },
              {
                name: `🤖 • **Discord.js**`,
                value: `\`\`\`v${version}\`\`\``,
                inline: true,
              },
              {
                name: `🕒 • **Uptime**`,
                value: `\`\`\`${uptime}\`\`\``,
                inline: true,
              },
              {
                name: `💽 • **Arch**`,
                value: `\`\`\`${os.platform()} ${os.arch()}\`\`\``,
                inline: true,
              },
              {
                name: `🔄 • **CPU usage**`,
                value: `\`\`\`${percent.toFixed(2)} %\`\`\``,
                inline: true,
              },
              {
                name: `📊 • **RAM usage**`,
                value: `\`\`\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
                  2
                )} mb\`\`\``,
                inline: true,
              },
              {
                name: `💿 • **Musica**`,
                value: `\`\`\`Singing ${connectedchannelsamount} Servers\`\`\``,
                inline: true,
              },
              {
                name: `👑 • **Developer**`,
                value: `\`\`\`Zaabuza\`\`\``,
                inline: true,
              },
              {
                name: `🔄 • **CPU VPS**`,
                value: `\`\`\`${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``,
                inline: false,
              }
            )
            .setFooter(`Aaji Ghanta`),
        ],
      });
    });
  },
};

