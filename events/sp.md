const client = require("../main");


async function authenticateSpotify() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${spotifyApi.getClientId()}:${spotifyApi.getClientSecret()}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  spotifyApi.setAccessToken(data.access_token);
  console.log("Login")
}

// Call the authenticateSpotify function before logging in the bot
await authenticateSpotify();