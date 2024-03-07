const { red, green, blue, magenta, cyan, white, gray, black } = require("chalk");
const client = require("../main");
const figlet = require("figlet");
const Cluster = require('discord-hybrid-sharding');
const { MessageEmbed } = require("discord.js")
// Backup token == 

client.on("ready", async () => {

  console.log(red.bold("Hold on a minute..... If this is still here something went wrong"))

  console.log(white.bold(`
      [===========================================]
                     DiscoVerse    
                      Working...
                  Developed by Radon Dev
      [===========================================]
      `))
console.log(blue(`🪐 https://discord.gg/r26cwBzM Server to join`));
    console.log(white(`[🚩BOT] → ` + magenta(`${client.user.tag}`) +  ` is ready to log on`));
    console.log(white("[🚩BOT] → " + blue(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)))
   console.log(`Hello my name is ${client.user.tag}!`);

    client.user.setStatus('idle');
    setInterval(() => {
        const statuses = [
            "Discoverse",
            '/help',
            `All of my guilds`,
          `${client.users.cache.size} Users`,
          `🎈`,
           `Serving ${client.guilds.cache.size} Guilds`
  
        
            
            
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" })
    }, 10000)



const e = new MessageEmbed()
    .setTitle("Bot Startup | System Running")
   .setDescription(`BOT STARTUP: \n \n All System running! and no errors `)

    await client.channels.cache.get('1126211935818502297').send({ embeds:[e] });
  const em = new MessageEmbed()
    .setTitle("Bot Logging | System Updated")
   .setDescription(`BOT DB: \n \n The quick.db Database Updated! `)

    await client.channels.cache.get('1126212881671798924').send({ embeds:[em] });
});
