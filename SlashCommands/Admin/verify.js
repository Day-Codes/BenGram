const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "verify",
    description: "verify yourself",
    type: 'CHAT_INPUT',

    run: async (client, interaction, args) => {
      

            let msg = await interaction.followUp("**Verifying**")
        

          
              let role = await db.get(`verify_role_${interaction.guild.id}`)

   
       const member = interaction.member;

        // Add verified role to the member
        const roles = member.guild.roles.cache.get(role);
        await member.roles.add(roles);        
     
 //  const shift = db.get(`custom_msg_${interaction.guild.id}`, msg)
          
  

       //   channel.send({ content: `<@&${role}>`, embeds: [embed] })
    //   client.channels.cache.get(channel.id).send({ content:`<@&${role}>`, embeds: [embed] })
          console.log("dose it post?")
  


     msg.edit({ content: "Your Verifed" }) 
        }
  
    
}