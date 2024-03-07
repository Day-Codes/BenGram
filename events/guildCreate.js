const client = require("../main");
const { MessageEmbed } = require("discord.js")

client.on('guildCreate', guild =>{
//dm owner

   

    // MEssage
  const channelId = '1126211436998299868'; //put your channel ID here

  const channel = client.channels.cache.get(channelId); 
   //This Gets The Guild Owner
  if(!channel) return; //If the channel is invalid it returns
  const embed10 = new MessageEmbed()
    .setTitle("Bot joined a new server")
      .setDescription(`Hi`)
  .addFields({ name: ' Guild info', value: ` Guild name - ${guild.name}\n Guild Id - ${guild.id}\n Guild members - ${guild.memberCount}`, inline: true })

.addFields({ name: ' Owner info', value: ` Owner Name - <@${guild.ownerId}>\n Guild Owner Id - ${guild.ownerId}`, inline: true })

.addFields({ name: 'Info', value: `Total Guild - ${client.guilds.cache.size}\n Total User - ${client.users.cache.size}`, inline: true })
  
      .setColor('RANDOM')
      
      channel.send({ embeds: [embed10]});
});


// guild delete 
client.on('guildDelete', guild =>{
  const channelId = '1126211436998299868';//add your channel ID
  const channel = client.channels.cache.get(channelId); //This Gets That Channel
  
  if(!channel) return;  //If the channel is invalid it returns
  const embed11 = new MessageEmbed()
    .setTitle("Bot is kicked")
     .setDescription(``)
  .addFields({ name: ' Guild info', value: `Guild name - ${guild.name}\n: Guild Id - ${guild.id}\n: Guild members - ${guild.memberCount}`, inline: true })

.addFields({ name: ' Owner info', value: `Owner Name - <@${guild.ownerId}>\n Guild Owner Id - ${guild.ownerId}`, inline: true })

.addFields({ name: 'Info', value: `Total Guild - ${client.guilds.cache.size}\n Total User - ${client.users.cache.size}`, inline: true })
      
      .setColor('RANDOM')
      channel.send({ embeds: [embed11]});
});
