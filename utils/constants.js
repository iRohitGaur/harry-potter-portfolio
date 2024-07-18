const botToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;

const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

module.exports = { telegramUrl, telegramChatId };
