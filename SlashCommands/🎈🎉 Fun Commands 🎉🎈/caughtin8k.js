


const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "caughtin8k",
   nodefer: false,
    category: ":beginner: Info",
    description: "caught in 8k gif",
    type: 'CHAT_INPUT',

    run: async (client, interaction, args) => {

      let msg = await interaction.followUp({ content:"https://tenor.com/view/caught-in8k-caight-in8k-memee-caught-in8k-samham-samham-caught-in4k-gif-24826364" })
 

  
    
 
    },     
};