const simplydjs = require("simply-djs")

module.exports = {
  name: "rps",
  aliases: [],
  edesc:"rps @user",
  description: `Juega piedra-papel-tijeras`,
  userPermissions: [],
  botPermissions: [],
  category: "Games",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    
    
    await simplydjs.rps(message,{})


 }
}