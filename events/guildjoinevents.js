const client = require("../main");
const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
//const { MessageEmbed } = require("discord.js")
client.on("guildCreate", guild => {
 
 
 guild.me.setNickname("[/]Discoverse");


});
//client.on("guildCreate", guild => {
//console.log("made server role!")
//guild.roles.create({
  //data: {
///    name: 'BIGGG BRAIN',
  ///  color: '#324ab2',
 // },
 // reason: 'Bc i am cool',
//})

//})

//client.on("guildCreate", guild => {
//console.log("Joined server!")

//guild.channels.create("chat-bot", {type: 'text'})
//})



client.on("guildCreate", (guild) => {
  let channelToSend;
  let commands = client.commands.map(command => command.name).join(", ");

  guild.channels.cache.forEach((channel) => {
    if (channel.type === "GUILD_TEXT" && !channelToSend && channel.permissionsFor(guild.me).has("SEND_MESSAGES")) channelToSend = channel;
  });

  if (!channelToSend) return;

  let joinMessageEmbed = new MessageEmbed()
    .setTitle("Thanks for inviting me!")
    .setURL("")
    .setDescription(`I'm in slash!! Use /help to get started\nMade by [Radon Dev Team](https://discord.gg/fb9YDmztS3)`)
    .setFooter({ text: `TNX FOR INVITING ME 💖` });
      const actionRow = new MessageActionRow()
      .addComponents([
        new MessageButton()
          .setLabel('Support Server')
          .setURL('https://discord.gg/fb9YDmztS3')
          .setStyle("LINK")
          .setEmoji(":link:")
          .setDisabled(false)
        
      ])
  channelToSend.send({ embeds: [joinMessageEmbed] , components: [actionRow] });
});