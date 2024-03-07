const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "set-shift",
    description: "Setup the shift system",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'channel',
            description: 'The channel where the bot will send the message',
            type: 'CHANNEL',
            required: true
        },
      {
       name: 'role',
      description: 'The role to save',
      type: 'ROLE',
      required: true
      },
        {
       name: 'code',
      description: 'The code to save',
      type: 'STRING',
      required: true
      },
           {
       name: 'number',
      description: 'number of votes to start',
      type: 'STRING',
      required: true
      },
    ],
    run: async (client, interaction, args) => {
        const channel = interaction.options.getChannel("channel");
       const roles = interaction.options.getRole('role');
      const shift = interaction.options.getString('code')
   const shft = interaction.options.getString('number')
        console.log(interaction.user.username+' use /set-shift')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

           //const roleId = roleOption.role.id;

    db.set(`shift_role_${interaction.guild.id}`, roles.id);
        db.set(`shift_msg_${interaction.guild.id}`, shift);
         db.set(`shift_num_${interaction.guild.id}`, shft);
db.set(`shift_channel_${interaction.guild.id}`, channel.id)
        
      

    const embed = new MessageEmbed()
        .setAuthor(`Shift System`, client.user.displayAvatarURL())
        .setDescription(`The channel were all the shift message will be sent is now set to <#${channel.id}> and the role are now <@&${roles.id}>`)
        .setColor("RANDOM")

        return interaction.followUp({ embeds: [embed], ephemeral: true })
    },
};