const client = require("../main");
const { WebhookClient, Message, MessageEmbed } = require("discord.js");


client.on("interactionCreate", async (interaction) => {
if(!interaction.guild) return;
if (!interaction.isCommand()) return;

const cmd = client.slashCommands.get(interaction.commandName);
if(!cmd) return;

const webhook = new WebhookClient({
  id : process.env.cid,
  token : process.env.ctoken,
});
//https://discord.com/api/webhooks/1129600627908030584/6ZfjOF68hE00tnvsFDw8Nc3zkF1-Hetidcjlx17qijiNWYf-qrtqo1XyxlE0XL2bUygf
const embed = new MessageEmbed()
.setColor(`WHITE`)
.setAuthor(`${interaction.user.username} - Used a Command`, interaction.user.displayAvatarURL())
.addField(`Name`, `\`\`\`/${cmd.name}\`\`\``, true)
.addField(`Channel`, `\`\`\`${interaction.channel.name} - ${interaction.channel.id}\`\`\``, true)
.addField(`Used at:`, `<t:${Math.floor((Date.now()) / 1000)}:F> *(<t:${Math.floor((Date.now()) / 1000)}:D>)*`)
.setFooter(`Used in: ${interaction.guild.name} - ${interaction.guild.id}`, interaction.guild.iconURL())

webhook.send({
  username : ""+client.user.username+" - Command Logging", 
  avatarURL : client.user.displayAvatarURL(), 
  embeds : [embed], 
}).then(() => {
  console.log(`${interaction.user.tag} - Used the command (${cmd.name}) - In ${interaction.channel.name}`);
}).catch((e) => {
  console.warn(`Failed to send. Cmd Logging`);
  console.log(e.stack ? e.stack : e);
});

})