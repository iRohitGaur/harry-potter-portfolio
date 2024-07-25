# Harry Potter Portfolio Website

This is a Harry Potter-themed portfolio website created using Express.js and EJS templating. The website showcases a personal portfolio with a magical twist, inspired by the Harry Potter universe.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Styling](#styling)
- [Projects](#projects)
- [Setting Up a Telegram Webhook for Notifications](#setting-up-a-telegram-webhook-for-notifications)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/irohitgaur/harry-potter-portfolio.git
   cd harry-potter-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

## Usage

After starting the application, open your web browser and go to `http://localhost:3000` to view the portfolio website.

## Project Structure

```
portfolio/
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   ├── pages/
│   │   ├── home.ejs
│   │   ├── about.ejs
│   │   ├── projects.ejs
│   │   ├── contact.ejs
│   │   ├── newProject.ejs
│   │   ├── project.ejs
│   │   ├── editProject.ejs
├── public/
│   ├── css/
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── projects.css
│   │   ├── contact.css
│   │   ├── newProject.css
│   │   ├── project.css
│   │   ├── editProject.css
│   │   ├── styles.css
│   ├── js/
│   │   ├── script.js
├── routes/
│   ├── projects.js
├── models/
│   ├── Project.js
├── utils/
│   ├── constants.js
│   ├── telegram.js
├── .env
├── server.js
├── package-lock.json
├── package.json
├── README.md
├── vercel.json
```

## Routes

- **Home Page**: `/`
- **About Page**: `/about`
- **Projects Page**: `/projects`
- **Contact Page**: `/contact`

## Styling

The website uses a Harry Potter theme with the following primary colors defined as CSS variables:

```css
:root {
  --primary-color: #4a1a2c; /* Dark red */
  --secondary-color: #ffdf00; /* Gold */
  --background-color: #ececec; /* Light grey */
  --text-color: #333; /* Dark grey */
  --highlight-color: #6e243d; /* Slightly lighter dark red */
  --max-width: 1200px;
}
```

## Projects

Here are some example projects included in the portfolio:

### 1. Marauder's Map

- **Description**: A magical document revealing all of Hogwarts, showing the location of everyone within the castle and secret passages.
- **Technologies**: Magic, Enchantments, Cartography

### 2. Invisibility Cloak

- **Description**: A magical cloak that renders the wearer invisible.
- **Technologies**: Magic, Fabric Enchantment

### 3. Dumbledore's Army

- **Description**: A secret group founded by Harry to teach practical Defense Against the Dark Arts to fellow students.
- **Technologies**: Leadership, Training, Magic

### 4. Triwizard Tournament

- **Description**: A magical competition between three schools of magic.
- **Technologies**: Magic, Event Management, Strategy

### 5. Horcrux Hunt

- **Description**: The mission to locate and destroy Voldemort's Horcruxes.
- **Technologies**: Magic, Research, Combat

### 6. Patronus Charm

- **Description**: An advanced defensive spell that conjures a magical guardian.
- **Technologies**: Advanced Magic, Emotional Control, Defense Against the Dark Arts

## Setting Up a Telegram Webhook for Notifications

Using Telegram for notifications involves setting up a bot and using its API to send messages.

### Steps:

- **Create a Telegram Bot**:

  - Open Telegram and search for `@BotFather`.
  - Start a chat and use the `/newbot` command to create a new bot.
  - Follow the prompts to name your bot and get the bot token.

- **Bot Token**: The token received from BotFather.
- **Chat ID**: The ID of the chat where you want to receive the notifications. You can get this by starting a chat with your bot and sending a message. Then, use the `getUpdates` API to fetch your chat ID.
- **Markdown**: Used to format the message text.

### To get your chat ID for Telegram notifications:

1. **Send a Message to Your Bot**:
   - Open Telegram and search for your bot.
   - Send a message to your bot (e.g., "Hello").
2. **Get Updates**:
   - Use your browser to access
     `https://api.telegram.org/bot<your-bot-token>/getUpdates`
   - Replace `<your-bot-token>` with your actual bot token.
3. **Find Chat ID**:
   - Look for the `chat` object in the response JSON.
   - The `id` field within the `chat` object is your chat ID.

This chat ID will be a numeric value that you can use in your code.

---

Enjoy building and showcasing your magical portfolio!
