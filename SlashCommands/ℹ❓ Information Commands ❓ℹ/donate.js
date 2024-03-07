const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "donate",
    description: "donate to us",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);

      const emb = new MessageEmbed()
      .setColor("GREEN")
      .setTitle(`Donate to us!`)
      .setDescription(`**Crypto Donations**: 0x4818Fd652b84D67f19543C6B02A0C414657d8Ade \n **Buy me a Coffee**: https://www.buymeacoffee.com/Daydev `)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`Made with 💖 by Our Team `) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://paypal.me/devjsbot`)
				.setLabel('Paypal')
				.setStyle('LINK'),
			);

      
      setTimeout(() => {
        msg.edit({ content: `Donate to us!`, embeds: [emb], components: [row] });
      }, 500);
    },
};
