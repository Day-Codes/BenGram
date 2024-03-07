const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "annouce",
   nodefer: false,
    category: ":beginner: Info",
    description: "annouce commands",
    type: 'CHAT_INPUT',
    options: [
        {
          name: "say",
          description: "What you want to say.",
          type: "STRING",
          required: true,
        },
            {
          name: "channel",
          description: "channel for annoucment",
          type: "CHANNEL",
          channelTypes: ["GUILD_TEXT"],
          required: true,
      },
          {
          name: "ping",
          description: "What ping",
          type: "ROLE",
          required: true,
        },
    ],
    run: async (client, interaction, args) => {
      const channel = interaction.options.getChannel("channel");      
      let pings = interaction.options.getRole('ping')
      
      const input = interaction.options.getString("say")
      
      let msg = await interaction.followUp("**Sending**")

      client.channels.cache.get(channel.id).send({ content: `${input} \n ${pings} \n Message sent by - ${interaction.user}` })

         msg.edit({ content: "Your Message should be sent!" }) 

  
    
 
    },     
};
/* ============================================== */
/* :star: Azury Manager • Private • Server Manager :star: */
/* Coded by discord.gg/azury Copyrighted @ Azury  */
/* ============================================== */