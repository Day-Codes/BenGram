const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "setup-shift-message",
    description: "the message for shifts",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'message',
            description: 'the custom message (use \n for new line)',
            type: 'STRING',
            required: true
        }
    ],
    run: async (client, interaction, args) => {
        const msg = interaction.options.getString("message");

        console.log(interaction.user.username+' use /set-channel')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

        db.set(`custom_msg_${interaction.guild.id}`, msg)
        
      

    const embed = new MessageEmbed()
        .setAuthor(`Custom Shift Message`, client.user.displayAvatarURL())
        .setDescription(`Yours custom message is: \n ${msg}`)
        .setColor("RANDOM")

        return interaction.followUp({ embeds: [embed], ephemeral: true })
    },
};