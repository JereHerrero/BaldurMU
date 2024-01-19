const simplydjs = require("simply-djs")

module.exports = {
  name: "ttt",
  aliases: [],
  edesc:"ttt @user",
  description: `Jugar tres en raya`,
  userPermissions: [],
  botPermissions: [],
  category: "Games",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    
    await simplydjs.tictactoe(message,{})



 }
}