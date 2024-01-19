const simplydjs = require("simply-djs");

module.exports = {
  name: "calculate",
  aliases: ["cal", "math", "calc"],
  edesc:"calculate",
  description: "Get a calculator with buttons",
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 5,

  run: async (client, message, args, prefix) => {
    simplydjs.calculator(message)
  }
}