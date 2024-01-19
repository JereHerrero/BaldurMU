const { MessageEmbed } = require(`discord.js`);
const weather = require(`weather-js`);


module.exports = {
  name: "weather",
  aliases: ["forcast", "w"],
  edesc:"weather < place_name or ZIP_code >",
  description: `displays current weather of said area`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  category: "Utility",
  cooldown: 5,




  run: async (client, message, args, prefix) => {
    // Code


    message.delete({ timeout: 300 })

    if (!args) {
      emb = new MessageEmbed().setColor("343A40").setTitle("You Dingus !")
        .addField("Input the location you want to search !", "`%weather <search query>`")
        .setTimestamp()
      message.channel.send({ embeds: [emb] })
    }

    let arg = message.content.split(/[ ]+/);
    weather.find({ search: arg.slice(1).join(' '), degreeType: 'C' }, function(err, result) {
      if (err) console.log('Weather CMD error: ' + err);
      if (result === undefined || result.length === 0) {
        message.channel.send({
          embed: {
            color: "#343A40",
            description: `:warning: **${message.author.username}**, please enter a valid location.`,
            footer: {
              text: 'API Lantancy is ' + `${Date.now() - message.createdTimestamp}` + ' ms',
            }
          }
        });
        return;
      }

      var current = result[0].current;
      var location = result[0].location;

      let emb = new MessageEmbed()
        .setAuthor(`${current.skytext} weather in ${current.observationpoint}`, current.imageUrl)
        .setColor("#343A40")
        .addField('Timezone', `UTC${location.timezone}`, true)
        .addField('Degree Type', location.degreetype, true)
        .addField('Temperature', `${current.temperature} Degrees`, true)
        .addField('Feels Like', `${current.feelslike} Degrees`, true)
        .addField('Winds', current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true);

      message.channel.send({ embeds: [emb] })



    })
  }
}