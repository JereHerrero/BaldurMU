const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const BOT = require("./Client");


module.exports = async (client) => {

  // LOADING SLASH COMMANDS
  try {
    let arrayOfcommands = [];
    const commandFiles = await globPromise(
      `${process.cwd()}/Commands/Slash/**/*.js`
    );
    commandFiles.map((value) => {
      const file = require(value);
      const splitted = value.split("/");
      const directory = splitted[splitted.length - 2];
      const properties = { directory, ...file };
      client.commands.set(file.name, properties);
      arrayOfcommands.push(file);
    });

    let i = null
    client.on("ready", async () => {
      await client.application.commands.set(arrayOfcommands);
    });
  console.log("_______________________________")
  console.log(`${client.commands.size} Slash Commands Loaded`);
  console.log("_______________________________")
  
  } catch (e) {
    console.log(e);
  }

  // LOADING MESSAGE COMMANDS
  try {
    const MessageCommadsFiles = await globPromise(
      `${process.cwd()}/Commands/Message/**/*.js`
    );
    MessageCommadsFiles.map((value) => {
      const file = require(value);
      const splitted = value.split("/");
      const directory = splitted[splitted.length - 2];
      const properties = { directory, ...file };
      client.mcommands.set(file.name, properties);
      if (file.aliases && Array.isArray(file.aliases))
        file.aliases.forEach((a) => client.aliases.set(a, file.name));
    });

    console.log(`${client.mcommands.size} Message Commands Loaded`);
  console.log("_______________________________")
    
  } catch (e) {
    console.log(e);
  }
  // Loading Event Files
  try {
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));
    console.log(`${eventFiles.length} Events Loaded`);
  console.log("_______________________________")
    
  } catch (e) {
    console.log(e);
  }
};
