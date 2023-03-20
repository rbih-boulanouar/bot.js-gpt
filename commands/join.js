const { SlashCommandBuilder } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice'); 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('join voice channel')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo into')) ,
	async execute(interaction) {
        const vchannel=interaction.options.getChannel('channel');
		const vc =joinVoiceChannel({
            channelId: vchannel.id,
            guildId:interaction.guildId,
            adapterCreator: interaction.guild.voiceAdapterCreator
        })
        await interaction.reply('joined');
	},
};