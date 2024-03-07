
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "direct-message",
   nodefer: false,
    category: ":beginner: Info",
    description: "dm a user a message",
    type: 'CHAT_INPUT',
    options: [
        {
          name: "say",
          description: "What you want to say.",
          type: "STRING",
          required: true,
        },
           {
          name: "user",
          description: "the user want to message",
          type: "USER",
          required: true,
        },
    ],
    run: async (client, interaction, args) => {
              const target = interaction.options.getUser("user")
      const input = interaction.options.getString("say")
      let msg = await interaction.followUp("Message Sent")

  const apply = new MessageEmbed()
      .setTitle("Direct Messages | New Message")
      .setDescription(`Guild: ${interaction.guild} - ${interaction.guild.id} \n Message: ${input} \n User targeted: ${target} \n User who issue this command: ${interaction.member} \n This is for a message to make sure it safe **REPORT ANYTHING WRONG**`)
     .setColor("RANDOM")
      .setFooter("Note: Please review this")
  
client.guilds.cache.get("1125612660726177814").channels.cache.get("1126211303925616700").send({ embeds: [apply] }) 
        
     const embed = new MessageEmbed()   
.setTitle("New Message")
.setDescription(`Sent by: ${interaction.author}`)
  target.send(`${input} - Sent by ${interaction.user}`)
    
 
    },     
};
/* ============================================== */
/* :star: Azury Manager • Private • Server Manager :star: */
/* Coded by discord.gg/azury Copyrighted @ Azury  */
/* ============================================== */