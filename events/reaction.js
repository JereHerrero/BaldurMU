const client = require("..");

client.on(`messageCreate`, async (message) => {
  if (message.author.bot) return;

  if (message.content.includes('692617937512562729')) // pain
  {
    message.react("👑"); // crown
  }

  if (message.content.includes('919815795582832701')) // toxic
  {
    message.react("👑"); // crown
  }

  if (message.content.includes('1000268588642484244')) // harry
  {
    message.react("🎖️"); // medal
  }

  if (message.content.includes('834409341460676670')) // kazi
  {
    message.react("🎖️"); // medal
  }

  if (message.content.includes('745992028638281809')) // aditya
  {
    message.react("🎖️"); // medal
  }

  if (message.content.includes('1008350679649239120')) // immortal
  {
    message.react("🎖️"); // medal
  }

  if (message.content.includes('815778656839270450')) // immortal
  {
    message.react("🎖️"); // medal
  }

  if (message.content.includes('975391408909348864')) // immortal
  {
    message.react("🎖️"); // medal
  }
});