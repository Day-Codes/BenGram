const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton} = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: "setup-verify",
    description: "setup-verify system",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'channel',
            description: 'The channel where the verify message will be send',
            type: 'CHANNEL',
            required: true
        },
        {
       name: 'role',
      description: 'The role to save',
      type: 'ROLE',
      required: true
      },
    ],
    run: async (client, interaction, args) => {
        const channel = interaction.options.getChannel("channel");
   const roles = interaction.options.getRole('role');
        console.log(interaction.user.username+' use /set-channel')

        if(!interaction.member.permissions.has("ADMINISTRATOR")) return interaction.followUp({ content: "You can't do that" })

   db.set(`verify_role_${interaction.guild.id}`, roles.id);
        const em = new MessageEmbed()
      .setTitle("Verify here!")
      .setDescription(`Please use **/verify** to gain acess to this guild!`)
      channel.send({ embeds: [em] })

    const embed = new MessageEmbed()
        .setAuthor(`Verify Message`, client.user.displayAvatarURL())
        .setDescription(`The verify system has been setup!`)
        .setColor("RANDOM")

        return interaction.followUp({ embeds: [embed], ephemeral: true })
    },
};