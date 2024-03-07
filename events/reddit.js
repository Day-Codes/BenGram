const Discord = require('discord.js');
const snoowrap = require('snoowrap');
const axios = require('axios');
const cron = require('node-cron');
const client = require("../main");
const db = require('quick.db');
// Reddit API credentials
const reddit = new snoowrap({
  userAgent: 'Discos/1.0',
  clientId: process.env.CID,
  clientSecret: process.env.CS,
  username: process.env.RE,
  password: process.env.PAD
});
client.guilds.cache.forEach(guild => {
  console.log("got guilds")
});
// List of subreddits to choose from
const subreddits = ['nsfw', 'hentai_gifs', 'pussy', 'creampie', 'hentai', 'LegalTeens', 'tiktokporn', 'homemadensfw', 'cum', "Nudes", 'GodPussy', 'Ratemypussy', 'SchoolgirlsXXX', 'Rule34', 'Penatration', 'stripgirls', 'snapleak', 'CumDumpsters',];

// Set up Discord client
const channelId = '1134261634051887224';

// Fetch random posts from subreddit
async function fetchRandomPosts(subreddit) {
  const sub = await reddit.getSubreddit(subreddit);
  const randomPost = await sub.getRandomSubmission();
  return randomPost;
}

// Fetch redgifs direct video URL
async function fetchRedgifsVideoURL(url) {
  const response = await axios.get(url);
  const videoURL = response.data.mp4;
  return videoURL;
}

// Post content to Discord channel
async function postContentToDiscord(content) {

     
  const channel = await client.channels.fetch(channelId);
  await channel.send(content);
}

// Schedule the bot to run every 30 minutes
cron.schedule('*/2 * * * *', async () => {
  try {
    const randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    const randomPost = await fetchRandomPosts(randomSubreddit);
    
    let content = randomPost.url;
    
    if (randomPost.domain === 'redgifs.com') {
      const videoURL = await fetchRedgifsVideoURL(randomPost.url);
      content = videoURL;
    }
    
       client.guilds.cache.forEach(async guild => {
//console.log(` guild id: ${guild.id}`)

  let channel = await db.get(`porn_channel_${guild.id}`)
        if (channel) {
   const client = require("../main");
const channels = await client.channels.fetch(channel);
       await channels.send({ content: ` [.](${content}) | BETA SYSTEM` });
          console.log("messahe sent?")
        } else {
            return;
        }
       });
  } catch (error) {
    console.error('An error occurred:', error);
  }
});


