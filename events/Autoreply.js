const client = require("../main");

client.on("message", (message) => {
    if (message.content === "hi") {
        message.channel.send(`Hello!`);
       message.react('<a:Hey:989231982993092628>');
    }
    if (message.content === "sad") {
        message.channel.send(`Don't Be Sad!`);
    }
          if (message.content === "servers") {
        message.channel.send(`I am Active in ${client.guilds.cache.size} Servers`);
        }
        // if (message.content === "hi") {
       // message.react('<a:hi:931234711060226079> ');
       // }
        if (message.content === "leland") {
            message.channel.send("Let put out fires! :fire:");
        }
  if (message.content === "leland-hose") {
    message.reply("'Fought fire boy! They don’t call me the Hose Stretcher for nothing!' - Leland 2023")
//    message.react(':fire:')
  }
   
});