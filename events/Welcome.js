const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const client = require('../main.js');

// when someone delete a message logs it
client.on('guildMemberAdd', async (member, message) => {
//    if (message.author.bot) return;

        let channel = await db.get(`welcome_channel_${member.guild.id}`)
        if (channel) {
           
            member.guild.channels.cache.get(channel).send({ content:`<:join:1001325615389081650> <@${member.user.id}> welcome to **${member.guild.name}**!` });
        } else {
            return;
        }
    });


// Ghost Ping Detector
// Coded by aledlb8
// All Rights Reserved