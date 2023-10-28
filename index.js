const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log(`Bot ${client.user.tag} is ready!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'hello') {
    await interaction.reply('Hello, I am a bot!'); // Example slash command /hello
  }
});

const token = 'YOUR_BOT_TOKEN'; // Replace with your bot token

client.login(token);
