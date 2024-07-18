require("dotenv").config();
const axios = require("axios");
const { telegramUrl, telegramChatId } = require("./constants");

const sendTelegramNotification = async (name, email, message) => {
  const text = `New Contact Form Submission:\n*Name*: ${name}\n*Email*: ${email}\n*Message*: ${message}`;

  try {
    await axios.post(telegramUrl, {
      chat_id: telegramChatId,
      text: text,
      parse_mode: "Markdown",
    });
    console.log("Telegram notification sent");
  } catch (error) {
    console.error("Error sending Telegram notification:", error);
  }
};

module.exports = { sendTelegramNotification };
