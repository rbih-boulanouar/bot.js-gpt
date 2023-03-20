const { SlashCommandBuilder } = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
  });
const openai = new OpenAIApi(configuration);
module.exports = {
	data: new SlashCommandBuilder()
		.setName('chatgpt')
		.setDescription('openai bot').addStringOption(option =>
            option.setName('question')
                .setDescription('ask chatgpt bot')
        ),
	async execute(interaction) {
        const q=interaction.options.getString('question')
        await interaction.deferReply();
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: q,
            max_tokens: 1000,
            temperature: 0,
          });  
		await interaction.editReply(response.data.choices[0].text);
	},
};