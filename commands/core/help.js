const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

const Embed = new MessageEmbed()
	.setColor('#0099ff');
	.setAuthor({ name: 'BG MUSIC', iconURL: 'https://imgur.com/ZokD85J'});
	.setDescription('Music is your own experience, your thoughts, your wisdom. If you don’t live it, it won’t come out of your horn.');
	.setTimestamp();
	.setFooter({text: 'Some footer text here', iconURL: 'https://imgur.com/ZokD85J'});

channel.send({ embeds: [Embed] });
