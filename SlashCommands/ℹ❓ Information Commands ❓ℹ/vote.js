//https://vcodes.xyz/bot/1102700631120162847
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "vote",
    description: "Vote for our Discord bot!",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);

      const emb = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Vote for ${client.user.username}`)
      .setDescription(`Top.gg: [Top.gg](https://top.gg/bot/1115081520747642910)\n Vcodes: [Vcodes](https://vcodes.xyz/bot/1115081520747642910)`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`Powered By: Radon Devs`) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://vcodes.xyz/`)
				.setLabel('Vcodes')
				.setStyle('LINK'),
			);

      
      setTimeout(() => {
        msg.edit({ content: "Support us by voting!", embeds: [emb], components: [row] });
      }, 500);
    },
};
