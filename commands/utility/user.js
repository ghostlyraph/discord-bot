const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("simple user information command"),
  async execute(interaction) {
    await interaction.reply(
      `user - ${interaction.user.username}, joined - ${interaction.member.joinedAt}.`
    );
  },
};
