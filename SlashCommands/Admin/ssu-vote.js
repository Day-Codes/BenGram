const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "shift-vote",
    description: "the message for voting for shifts",
    type: 'CHAT_INPUT',

    run: async (client, interaction, args) => {
      

            let msg = await interaction.followUp("**Sending**")
        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

              let channel = await db.get(`shift_channel_${interaction.guild.id}`)
              let role = await db.get(`shift_role_${interaction.guild.id}`)
      let codes = await db.get(`shift_msg_${interaction.guild.id}`)
         let cdes = await db.get(`shift_num_${interaction.guild.id}`)
        if (channel) {
     
 //  const shift = db.get(`custom_msg_${interaction.guild.id}`, msg)
          
  
const embed = new MessageEmbed()
        .setTitle(`Shift Votee!`)
        .setDescription(`Do you want a shift? vote with the green checkmark below! \n Host: ${interaction.user}`)
        .setColor("RANDOM")
   .setFooter(`${cdes} reactions for shift to start`)
          const uwu = await client.guilds.cache.get(interaction.guild.id).channels.cache.get(channel).send({ content: `<@&${role}>`, embeds: [embed] })
          await uwu.react('✅'); 
             //  await interactionEmbed.react('✅')
        await interactionEmbed.react('🔽')
       //   channel.send({ content: `<@&${role}>`, embeds: [embed] })
    //   client.channels.cache.get(channel.id).send({ content:`<@&${role}>`, embeds: [embed] })
          console.log("dose it post?")
  } else {


     msg.edit({ content: "Message Failed to Send" }) 
        }
  
    }
}