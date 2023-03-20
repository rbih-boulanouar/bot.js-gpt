const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);
module.exports = {
	data: new SlashCommandBuilder()
		.setName('imggpt')
		.setDescription('openai bot').addStringOption(option =>
            option.setName('dis')
                .setDescription('ask chatgpt bot')
        ),
	async execute(interaction) {
        const dis=interaction.options.getString('dis')
        await interaction.deferReply();
        const response = await openai.createImage({
            prompt: dis,
            n: 1,
            size: "1024x1024",
          });
		await interaction.editReply(response.data.data[0].url);
	},
};