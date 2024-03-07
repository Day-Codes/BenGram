const client = require('../main.js');
const fs = require('fs');
const QuickDB = require('quick.db');
const { createAudioPlayer, joinVoiceChannel, createAudioResource } = require('@discordjs/voice');
const audioPlayer = createAudioPlayer();

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!play')) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('You must be in a voice channel to use this command.');

    const connection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });

    const audioResource = createAudioResource('music.mp3');
    audioPlayer.play(audioResource);

    connection.subscribe(audioPlayer);

    message.reply('Playing audio in your voice channel.');
  }
});

