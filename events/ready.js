// Modified by Axo Coder

const client = require("../index");
const Discord = require(`discord.js`);
const chalk = require('chalk');
const simplydjs = require("simply-djs");

let statuses = [
  "Subscribe to Axo Coder",
]
let e = statuses.length

function status() {
  i = Math.floor(Math.random() * (e))
  client.user.setActivity(statuses[i],
    {
      type: "WATCHING",
    });
}

client.on("ready", async () => {
  simplydjs.connect(process.env.MONGO)

  setInterval(status, 3000)

  console.clear()
  console.log(chalk.bgBlack(chalk.greenBright(`═════════════════════════════════════════════`)));
  console.log(chalk.magenta(`
  Modified by Axo Coder | Developed by PowerKnight
  `))
  console.log(chalk.bgBlack(chalk.magentaBright(`═════════════════════════════════════════════`)));
  console.log(chalk.yellowBright("Axo Coder | Online And Fully Functional"))
  console.log(chalk.bgBlack(chalk.yellowBright(`═════════════════════════════════════════════`)))

  console.log(chalk.cyanBright(`Axo Coder | Node: ${process.version}
  Axo Coder | Discord.js: ${Discord.version}
  Axo Coder | Connected as: ${client.user.username}
  Axo Coder | ID: ${client.user.id}
  Axo Coder | Owner: ⍟ ・🜲 Mr.F!ckling`));
  console.log(chalk.bgBlack(chalk.cyanBright(`═════════════════════════════════════════════`)))
  console.log(chalk.red(`Axo Coder | Currently watching ${client.guilds.cache.size} Servers`));
  console.log(chalk.bgBlack(chalk.red(`═════════════════════════════════════════════`)));
})

// loading database
require('../handlers/Database')(client)

client.guilds.cache.forEach(async (guild) => {
  await client.updateembed(client, guild)
});