# SpeedenChat - Realtime-Chat-Application

SpeedenChat is a real-time chat application built using the MERN stack, designed to provide seamless communication similar to WhatsApp. This project leverages modern technologies like Socket.io and Zustand to enhance the real-time experience and state management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

SpeedenChat is designed to offer real-time messaging capabilities with features like user authentication, profile management, and real-time chat updates. This application serves as a practical example of integrating multiple technologies to build a robust, full-featured chat application.

## Features

- User Authentication (Signup/Login)
- Real-time Messaging
- User Profile Management
- Responsive Design with TailwindCSS

## Tech Stack

- **Frontend**: React, TailwindCSS, Vite, React Router
- **Backend**: Node.js, Express.js, MongoDB
- **State Management**: Zustand
- **Real-time Communication**: Socket.io
- **Other Libraries**: Axios, Cookie-Parser, Dotenv, Mongoose, Bcrypt, JSON Web Token

## Project Structure

```plaintext
SpeedenChat/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── components.json
│   ├── index.html
│   ├── jsconfig.json
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
├── README.md
```

## Usage
1. Open your browser and navigate to http://localhost:5173 (vite react default) to access the application.
2. Sign up for a new account or log in with an existing one.
3. Start chatting with other users in real-time.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature-name).
6. Open a pull request.

