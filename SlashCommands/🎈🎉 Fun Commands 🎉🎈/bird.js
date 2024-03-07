


const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
const random = require('@sefinek/random-animals');
module.exports = {
    name: "random-bird",
   nodefer: false,
    category: ":beginner: Info",
    description: "random bird",
    type: 'CHAT_INPUT',

    run: async (client, interaction, args) => {
    const res = await random.bird();
    console.log(res.data.message);
     
      let msg = await interaction.followUp({ content: `${res.data.message}` })
 

  
    
 
    },     
};