const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "set-channel-welcome",
    description: "Set the channel where the bot will send the welcome messGe",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'channel',
            description: 'The channel where the bot will send the welcome message',
            type: 'CHANNEL',
            required: true
        }
    ],
    run: async (client, interaction, args) => {
        const channel = interaction.options.getChannel("channel");

        console.log(interaction.user.username+' use /set-channel')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

        db.set(`welcome_channel_${interaction.guild.id}`, channel.id)
        
      

    const embed = new MessageEmbed()
        .setAuthor(`Welcome Message`, client.user.displayAvatarURL())
        .setDescription(`The channel were all the welcome message will be sent is now set to <#${channel.id}>`)
        .setColor("RANDOM")

        return interaction.followUp({ embeds: [embed], ephemeral: true })
    },
};