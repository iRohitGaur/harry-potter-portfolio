# Harry Potter Portfolio Website

This is a Harry Potter-themed portfolio website created using Express.js and EJS templating. The website showcases a personal portfolio with a magical twist, inspired by the Harry Potter universe.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Styling](#styling)

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
│   │   ├── styles.css
│   ├── js/
│   │   ├── script.js
├── server.js
├── package-lock.json
├── package.json
├── README.md
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

---

Enjoy building and showcasing your magical portfolio!
