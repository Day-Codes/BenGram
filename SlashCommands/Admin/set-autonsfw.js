const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "set-channel-nsfw",
    description: "Set the channel where the bot will send the auto nsfw",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'channel',
            description: 'The channel where the bot will send the message',
            type: 'CHANNEL',
            required: true
        }
    ],
    run: async (client, interaction, args) => {
        const channel = interaction.options.getChannel("channel");

        console.log(interaction.user.username+' use /set-channel')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

        db.set(`porn_channel_${interaction.guild.id}`, channel.id)
        
      

    const embed = new MessageEmbed()
        .setAuthor(`Auto NSFW`, client.user.displayAvatarURL())
        .setDescription(`The channel were all the  messages will be sent is now set to <#${channel.id}> and it will send every 30 mins`)
        .setColor("RANDOM")

        return interaction.followUp({ embeds: [embed], ephemeral: true })
    },
};