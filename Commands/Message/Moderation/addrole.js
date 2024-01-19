const { MessageEmbed } = require(`discord.js`);

module.exports = {
  name: "addrole",
  aliases: ["roleadd"],
  edesc:"addrole @user @role reason(optional)",
  description: `Añadir rol a un usuario`,
  userPermissions: ["MANAGE_ROLES"],
  botPermissions: ["MANAGE_ROLES"],
  category: "Moderation",
  cooldown: 10,


  run: async (client, message, args, prefix, queue) => {
    // Code

    message.delete({ timeout: 300 })

    const victim = message.mentions.members.first();
    const role = message.mentions.roles.first();
    let reason = args.slice(2).join(" ");
    if (!reason) reason = "Sin razón especificada";


    if (!victim) {

      emb = (new MessageEmbed()
        .setColor("#343A40")
        .setTitle("❌ Operación fallida!  ")
        .addFields(
          {
            name:`ㅤ`,
            value: "\n **No se puede agregar un rol al usuario!" +
          "\n**RAZÓN → : **" + "No hay usuario mencionado! \n\`Si está utilizando una identificación de usuario, úsela como <@& USER_ID >\`"
          }
        )
        .setTimestamp());

      message.channel.send({ embeds: [emb] })
    } else {
      if (!role) {

        emb = (new MessageEmbed()
          .setColor("#343A40")
          .setTitle("❌ Operación fallida!  ")
          .addFields(
            {
              name:`ㅤ`,
              value: "\n **No se puede agregar un rol al usuario" +
            "\n**RAZÓN → : **" + "Rol no mencionado! \n\`Si está utilizando una identificación de rol, úselo como <@& ROLE_ID >\`"
            }
          )
          .setTimestamp());

        message.channel.send({ embeds: [emb] })
      } else {

        if (message.member.id != (process.env.DEVELOPER) &&message.member.roles.highest.position < role.position && message.author.id != message.guild.ownerId) {

          emb = (new MessageEmbed()
            .setColor("#343A40")
            .setTitle("❌ Operación fallida!  ")
            .addFields(
              {
                name:`ㅤ`,
                value: "\n **No se puede agregar un rol al usuario" +
              "\n**RAZÓN → : **" + "El rol es superior a tu rango!"
              }
            )
            .setTimestamp());

          message.channel.send({ embeds: [emb] })

        } else {

          if (role.position > message.guild.me.roles.highest.position) {
            emb = (new MessageEmbed()
              .setColor("#343A40")
              .setTitle("❌ Operación fallida!  ")
              .addFields(
                {
                  name:`ㅤ`,
                  value: "\n **No se puede agregar un rol al usuario" +
                "\n**RAZÓN → : **" + "El rol es superior a mi rol mas alto!"
                }
              )
              .setTimestamp());

            message.channel.send({ embeds: [emb] })


          }
          else {


            message.react("✅")

            victim.roles.add(role);

            emb = (new MessageEmbed()
              .setColor("#343A40")
              .setTitle("✅ Operacion exitosa!  ")
              .addFields(
                {
                  name:`ㅤ`,
                  value: "\n**ADDED : **" + '<@&' + role + '> ' +
                "\n**SERVER → : **" + `${message.guild}` +
                "\n**MIEMBRO → : **" + `${victim}` +
                "\n**RAZÓN → : **" + reason +
                "\n**MODERADOR → : **" + '<@' + message.author.id + '> '
                }
              )
              .setThumbnail(victim.displayAvatarURL({ dynamic: true }))

              .setTimestamp());

            message.channel.send({ embeds: [emb] })


          }
        }
      }
    }




  }
}

