 const { Client, MessageEmbed, CommandInteraction, MessageButton, MessageActionRow, MessageSelectMenu } = require("discord.js");

 module.exports = {
     name: "allservers",
     description: "Public all-servers command",
    category: "Owner",
     run: async (client, interaction, args) => {
       let msg = await interaction.followUp({ content: `Fetching..` })

       const developers = ["959215890321260545"]
// put the userIDs here or use a client.config function

       if (!developers.includes(interaction.user.id)) return msg.edit({ content: `🔐 **This command is locked to the "BOT DEVELOPERS" only!**`, ephemeral: true})

       let array = []
       client.guilds.cache.forEach(async(x) => {
           array.push(`${x.name} - [${x.memberCount}]`);
           return msg.edit(`${array.join("\n")}`)
       });
     },
 };