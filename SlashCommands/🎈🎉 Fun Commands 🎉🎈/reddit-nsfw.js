const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const axios = require('axios')
const anime = require('anime-actions')
const snoowrap = require('snoowrap');
const cron = require('node-cron');
module.exports = {
    name: "reddit",
    description: "play truth or dare",
    type: 'CHAT_INPUT',
 
    run: async (client, interaction, args) => {

       if (channel?.type === 'GUILD_TEXT' && channel?.nsfw) {
      let msg = await interaction.followUp(`Loading..`);
   const emb = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Select a Option for NSFW!`)
     .setDescription("Everything off Reddit")
      .setFooter(`EEE`) 
const rows = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('dropdown_menu')
          .setPlaceholder('Select an catorgory')
          .addOptions([
            {
              label: 'Ass',
              description: 'Get a ass pic of Reddit',
              value: 'ass',
            },
            {
              label: 'Pussy',
              description: 'The Pussy catorgory',
              value: 'puss',
            },
            {
              label: 'Random',
              description: 'The Radnom catorgory',
              value: 'ran',
            },
           
          ])
      );
      setTimeout(() => {
        msg.edit({ embeds: [emb], components: [rows], content: "NFSW"
          });
      }, 500);
       } else {
          interaction.reply('This command is only allowed in NSFW channels.');
       }
    }
};
