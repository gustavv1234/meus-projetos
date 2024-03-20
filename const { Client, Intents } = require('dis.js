const { Client, Intents } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const id_do_servidor = '1134496632239575041';

const commands = [
  new SlashCommandBuilder()
    .setName('rolar-dado')
    .setDescription('Lança um dado de 20 lados'),
  new SlashCommandBuilder()
    .setName('olá')
    .setDescription('Teste'),
  new SlashCommandBuilder()
    .setName('boa-noite')
    .setDescription('Boa noite André'),
];

client.once('ready', async () => {
  console.log(`Entramos como ${client.user.tag}.`);
  await client.guilds.cache.get(id_do_servidor)?.commands.set(commands);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'rolar-dado') {
    const resultado = Math.floor(Math.random() * 20) + 1;
    await interaction.reply(`Você rolou um dado de 20 lados e o resultado foi: ${resultado}`);
  } else if (commandName === 'olá') {
    await interaction.reply('Estou funcionando!');
  } else if (commandName === 'boa-noite') {
    await interaction.reply('Estou funcionando!');
  }
});

client.login('code');
