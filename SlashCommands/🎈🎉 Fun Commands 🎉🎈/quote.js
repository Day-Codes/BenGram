const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const axios = require('axios')
module.exports = {
    name: "quote",
    description: "get an Random Quote! | ",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      let msg = await interaction.followUp(`Loading..`);
          let ok = async () => {
  let wow = await axios.get('https://apis-1.daylncode.repl.co/quote');
  let ee = wow.data
  return ee
}
let eeValue = await ok();
      
      const emb = new MessageEmbed()
      .setColor(client.config.color.main)
      .setTitle(`Memes!!!`)
      .setImage(`${eeValue.result}`)
      .setThumbnail(client.user.displayAvatarURL({ dynamic : true }))
      .setFooter(`Made with 💖 by .gg/azury | apis.daylnapi.tk`) 

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setURL(`https://apis.daylnapi.tk`)
				.setLabel('API')
				.setStyle('LINK'),
			);
      
      setTimeout(() => {
        msg.edit({ content: `${eeValue.result}` });
      }, 500);
    },
};
