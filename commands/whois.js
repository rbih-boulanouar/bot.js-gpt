const { SlashCommandBuilder } = require('discord.js');
const truecallerjs = require('truecallerjs');
var a;
module.exports = {
	data: new SlashCommandBuilder()
		.setName('whois')
		.setDescription('find phone number').addStringOption(option =>
            option.setName('number')
                .setDescription('phone number')
        ),	
        async execute(interaction) {
            const number=interaction.options.getString('number')
            var searchData = {
            number: number,
            countryCode: "DZ",
            installationId: "a1i0O--ePwqZgFlkKw-hsAeFnHvrgoCmVxm4yejyWjoRwEHFGPt3kLH9o6jpKqzy",
            output: "JSON"
        }
        await interaction.deferReply();
        var sn = truecallerjs.searchNumber(searchData);
        sn.then(response=> {
            interaction.editReply(response.data[0].name)
        });
        
	},
};