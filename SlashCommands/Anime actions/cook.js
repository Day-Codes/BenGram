const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const axios = require('axios')
const anime = require('anime-actions')
const fetch = require('node-fetch');

module.exports = {
    name: "rule34",
    description: "search up",
    type: 'CHAT_INPUT',
   options: [
    {
      name: 'search',
      description: 'what you want to search',
      type: 'STRING',
      required: true
    }
  ],
    run: async (client, interaction, args) => {
          const user = interaction.options.getString('search');
           
const axios = require('axios');


  
    const response = await axios.get('https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=pussy');
    const imageUrl = response.data.url;
    console.log(`Random Image URL: ${imageUrl}`);




      let msg = await interaction.followUp(`Loading..`);


      
      setTimeout(() => {
        msg.edit({ content:`${imageUrl}` });
      }, 500);
    }
};