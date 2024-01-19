const { MessageEmbed } = require(`discord.js`);
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "hack",
  aliases: [],
  edesc:"hack @user",
  description: `Simula Hackear`,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,
  


  run: async (client, message, args, prefix) => {
    // Code


    message.delete({ timeout: 300 })

    let member = message.mentions.members.first()
    if(!member) return message.reply("Mention someone to hack.")
    message.channel.send("**[5%]** Encntrando inicio de sesión... [2fa bypassed]").then(m => {
        setTimeout(() => {
            m.edit("**[15%]** Discord login found, finding ip..").then(m2 => {
                setTimeout(() => {
                    m2.edit("**[30%]** IP Encontrado! Buscando email y password..").then(m3 => {
                        setTimeout(() => {
                            m3.edit(`**[50%]** DONE! Email: ${member}@gmail.com｜Password: XuIsjgi9cg_`).then(m4 => {
                                setTimeout(() => {
                                    m4.edit("**[75%]** Instalando Troyano..").then(m5 => {
                                        setTimeout(() => {
                                            m5.edit(`**[100%]** Hackeo terminado. ${member}`).then(m6 => {
                                                setTimeout(() => {
                                                    m6.edit(`Hackeo Exitoso ${member}`)
                                                }, 2100);
                                            })
                                        }, 4000);
                                    })
                                }, 1800);
                            })
                        }, 3100);
                    })
                }, 3200);
            })
        }, 2100);
    })


  }

}