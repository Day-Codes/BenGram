const { WebhookClient } = require('discord.js');

const webhookClient = new WebhookClient({ id: 'your-webhook-id', token: 'your-webhook-token' });

process.on('unhandledRejection', (err) => {
  console.error(err);
  const embed = {
    color: 0xff0000,
    title: 'Unhandled Promise Rejection',
    description: `\`\`\`js\n${err.stack}\n\`\`\``
  };
  webhookClient.send({ embeds: [embed] });
});