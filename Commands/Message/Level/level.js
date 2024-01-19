const { MessageEmbed, createCanvas, loadImage } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "level",
  aliases: ["lvl"],
  edesc: "level @user(optional)",
  description: `Verificar nivel de un usuario`,
  userPermissions: [],
  botPermissions: [],
  category: "Level",
  cooldown: 5,

  run: async (client, message, args, prefix) => {
    // code
    message.delete();

    let ch = db.get(`levelCh_${message.guild.id}`);
    let status = db.get(`levelStatus_${message.guild.id}`);
    let channel = client.channels.cache.get(ch);

    let member = message.mentions.users.first() || message.author;
    let memberId = member.id;
    let level = db.get(`level_${memberId}_${message.guild.id}`) || 0;
    let msg = db.get(`MsgS_${memberId}_${message.guild.id}`) || 0;

    const canvas = createCanvas(400, 200);
    const ctx = canvas.getContext("2d");

    // Customize the canvas appearance here

    const avatar = await loadImage(member.displayAvatarURL({ dynamic: true }));
    ctx.drawImage(avatar, 20, 20, 50, 50);

    ctx.fillStyle = "#343A40";
    ctx.font = "20px Arial";
    ctx.fillText(`Nivel ${level}`, 100, 50);

    ctx.font = "15px Arial";
    ctx.fillText(`Msgs: ${msg}`, 100, 80);

    const attachment = new MessageAttachment(canvas.toBuffer(), "level.png");

    let emb = new MessageEmbed()
      .setColor("#343A40")
      .setTitle("🎉 Detalles de Nivel!  ")
      .setThumbnail("attachment://level.png")
      .setTimestamp();

    if (status !== "active")
      emb.addField(
        `⚠️ADVERTENCIA`,
        `Sistema de niveles no esta configurado. \n Use \`${process.env.PREFIX}lsetup\` para configurarlo `
      );
    else {
      if (!channel)
        emb.addField(
          `⚠️ADVERTENCIA`,
          `El sistema de niveles está en espera porque el canal de Logs ha sido eliminado\n Usa \`${process.env.PREFIX}lremove\` seguido de \`${process.env.PREFIX}lsetup\``
        );
    }

    message.channel.send({ embeds: [emb], files: [attachment] });
  },
};