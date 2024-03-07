const client = require("../main");
//const bardapi = require('@xelcior/bard-api');
//const { ChatBot } = require('@xelcior/bard-api');
//const chatBot = new ChatBot();
const { Client, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.O,
});
const openai = new OpenAIApi(configuration);




 client.on('messageCreate', async (message) => {
    if(message.guild) return;
   if (message.author.bot) return;
  
const em = new MessageEmbed()
   .setTitle("New DM | **TO BOT**")
   .setDescription(`Message: ${message.content} \n User: ${message.author} \n Please report anything SUS to dayln (Owner/Head Dev)`)

    await client.channels.cache.get('1126211365078581309').send({ embeds:[em] });

 //  const content = message.content;
 message.reply("Sorry! Our Team is hard at work to restore this feture! please join our support server for updates! Server: https://discord.gg/vyNaNKCsJT")
    console.log(message.content); //log messages
    return;
});