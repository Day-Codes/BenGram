const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: "help",
    description: "See all of the bots commands",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
     
      let categories = [];
      let cmdDescription = ""

      readdirSync("./SlashCommands/").forEach((dir) => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter((file) => file.endsWith(".js"));

        const cmds = commands.map((command) => {
          let file = require(`../../SlashCommands/${dir}/${command}`);
          if (!file.name) return "Missing file name.";
          let name = file.name.replace(".js", "");
          return `\`${name}\``;
        });
        let data = new Object();
        

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "Not FINISHED YET!" : cmds.join(" "),
        };

        categories.push(data);
      }); 

  //    const embed = new MessageEmbed()
    //  .setAuthor({ name: `${client.user.username}`, iconURL: `${client.user.displayAvatarURL()}` })
    //  .setColor("RANDOM")
//	.setImage("https://media.discordapp.net/attachments/973327104705957918/1006131252253958234/Azury.png?width=808&height=404")
  //    .setDescription(`Here are all the commands in one list, it goes from fun commands to info commands`)
  //    .addFields(categories)
   //   .setFooter(`Owned by: Radon Dev Dev`) 

const embed = new MessageEmbed()
.setTitle(`Help Menu | ${client.user.username}`)
.setThumbnail(`${client.user.displayAvatarURL()}`)
.setDescription(`To get the commands please use the drop down menu below and select the catorgory you want and then we will respond with all\n Commands that we have. \n\n System made by: Radon Dev`)
.setColor("RANDOM")
.setFooter(`Owned by: Radon Dev Group`)

const row = new MessageActionRow()
.addComponents(
  new MessageSelectMenu()
    .setCustomId('dropdown_menu')
    .setPlaceholder('Select an catorgory')
    .addOptions([
      {
        label: 'Fun',
        description: 'The fun catorgory',
        value: 'fun',
      },
      {
        label: 'Giveaway',
        description: 'The Giveaway catorgory',
        value: 'option2',
      },
      {
        label: 'Developer commands',
        description: 'Developer commands',
        value: 'option3',
      },
      {
        label: 'Admin commands',
        description: 'Admin commands',
        value: 'option4',
      },
      {
        label: 'Moderation commands',
        description: 'Mod commands',
        value: 'option5',
      },
      {
        label: 'Anime commands',
        description: 'Anime actions commands',
        value: 'option6',
      },
      {
        label: 'Info commands',
        description: 'Infomation commands',
        value: 'option7',
      },
    ])
);
      
      
        return interaction.followUp({ embeds: [embed], components: [row] })
      

      
      
    },
};
