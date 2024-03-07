const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const mongoose = require('mongoose');
let cpuStat = require("cpu-stat");
let os = require("os");
const Discord = require(`discord.js`);

module.exports = {
    name: "botinfo",
    category: "Info",
    description: "gathers the bot's information",
    type: "bot",
    run: async (client, interaction, args) => {

      const version = "0.1";

      embeds = [];
      let totalguilds;

      let date = new Date();
      let timestamp = date.getTime() - Math.floor(client.uptime);

      

        const embed = new MessageEmbed()
          .setAuthor(`Bot Information of: ${client.user.tag}`, client.user.displayAvatarURL())
          .addField(`⏳ Memory Usage`, `> \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``, true)
          .addField(`👾 Discord.js`, `> \`v${Discord.version}\``, true)
          .addField(`🤖 Node.js`, `> \`${process.version}\``, true)
          .addField(`🤖 CPU`, `> \`${os.cpus().map((i) => `${i.model}`)[0]}\``, true)
          .addField(`📡 Ram`, `> \`${(process.memoryUsage().heapUsed/1024/1024).toFixed(0)}\``, true)
          .addField(`🕒 Arch`, `> \`${os.arch()}\``, true)
            .addField(`💻 Version`, `> \`${version}\``, true)
      
          .addField(`**Developer __Information__**`, `\`\`\`yml\nDeveloper: Radon Dev Group\n\`\`\``)
          
          .setThumbnail(interaction.guild.iconURL())
      .setColor(`GREEN`)
          .setFooter(`${client.user.username}︲Coded by Radon Devs`, interaction.guild.iconURL())
          

      

      return interaction.followUp({ embeds: [embed] })
      
    },
};