# SpeedenChat - Realtime Chat Application

**SpeedenChat** is a sophisticated real-time chat application built with the MERN stack, designed to deliver a seamless and engaging messaging experience similar to WhatsApp. This project showcases the integration of modern technologies, including Socket.io for real-time communication and Zustand for state management.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

**SpeedenChat** aims to provide users with a fully-featured chat application incorporating essential functionalities like real-time messaging, user authentication, and profile management. This project demonstrates how to effectively use the MERN stack along with other modern libraries to create a robust communication tool.

## Features

- **User Authentication:** Secure user registration and login using JSON Web Tokens (JWT).
- **Profile Management:** Users can create and update their profiles, including uploading and managing profile images.
- **Real-Time Messaging:** Instantaneous message delivery and receipt facilitated by Socket.io.
- **User-Friendly Interface:** A well-structured chat interface designed for optimal user experience.
- **Contact Search:** Efficient contact management with a comprehensive search feature.
- **Conversation History:** Ability to view and manage complete conversation histories with contacts.

## Usage

- **Authentication:** Users can sign up and log in using their credentials.
- **Profile Management:** Update your profile information and upload a profile picture.
- **Chat:** Send and receive messages in real-time.
- **Search Contacts:** Use the search feature to find and manage contacts.
- **View Conversation History:** Access your past conversations with contacts.


## Tech Stack

- **Frontend:** React, TailwindCSS, Vite, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **State Management:** Zustand
- **Real-Time Communication:** Socket.io
- **Additional Libraries:** Axios, Cookie-Parser, Dotenv, Mongoose, Bcrypt, JSON Web Token

## Project Structure

```plaintext
SpeedenChat/
├── client/
│   ├── src/
│   │   ├── assets/              # Static assets like images and fonts
│   │   ├── components/          # Reusable React components
│   │   ├── lib/                 # Utility functions and helpers
│   │   ├── pages/               # Application pages
│   │   ├── store/               # Zustand store for state management
│   │   ├── utils/               # Helper functions
│   │   ├── App.css              # Global CSS
│   │   ├── App.jsx              # Main application component
│   │   ├── index.css            # Index-level CSS
│   │   └── main.jsx             # Entry point for React application
│   ├── .env                     # Environment variables
│   ├── .eslintrc.cjs            # ESLint configuration
│   ├── .gitignore               # Git ignore file
│   ├── components.json          # Component configuration
│   ├── index.html               # HTML template
│   ├── jsconfig.json            # JavaScript configuration
│   ├── package-lock.json        # NPM lock file
│   ├── package.json             # NPM package descriptor
│   ├── postcss.config.js        # PostCSS configuration
│   ├── tailwind.config.js       # TailwindCSS configuration
│   └── vite.config.js           # Vite configuration
├── server/
│   ├── controllers/             # Server-side logic
│   ├── middlewares/             # Middleware functions
│   ├── models/                  # Database models
│   ├── node_modules/            # Project dependencies
│   ├── routes/                  # API routes
│   ├── socket.js                # Socket.io setup and configuration
│   ├── .env                     # Environment variables
│   ├── index.js                 # Entry point for the server
│   ├── package-lock.json        # NPM lock file
│   └── package.json             # NPM package descriptor
├── README.md                    # Project overview and instructions
├── workTimeline.md              # Detailed timeline of project development
```
## Setup and Installation
1. **Clone the Repository:**
   ```
   git clone https://github.com/PKBOSS26/Realtime-Chat-App.git
   ```
2. **Install Dependencies:**
   ```
   cd client
   npm install
   cd ../server
   npm install
   ```
3. **Configure Environment Variables:**

   - Open the `.env` file located in the `server` directory.
   - Locate the `DATABASE_URL` variable and update it with the connection string for your MongoDB instance. It should look something like this:
     ```env
     MONGODB_URI=mongodb://username:password@host:port/database
     ```
   - Ensure you replace `username`, `password`, `host`, `port`, and `database` with your actual MongoDB connection details.
4. **Run the Application:**
   - **Start the Client:**
   ```
   cd ../client
   npm run dev
   ```
   - **Start the Server:**
   ```
   cd ../server
   npm run dev
   ```
## Contributing

We welcome contributions to the SpeedenChat project! If you'd like to contribute, please follow these steps:

1. **Fork the Repository:**
   - Click the "Fork" button at the top right of the repository page on GitHub to create your own copy of the repository.

2. **Clone Your Fork:**
   ```
   git clone https://github.com/your-username/SpeedenChat.git
   ```
   Replace `your-username` with your GitHub username.

3. **Create a New Branch:**
   ```
   git checkout -b feature/your-feature-name
   ```
   Replace feature/your-feature-name with a descriptive name for your branch.
4. **Make Your Changes:**

- Implement your feature or fix in the appropriate files.
- Ensure your code adheres to the project's coding standards and passes any tests.
5. **Commit Your Changes:**
   ```
   git add .
   git commit -m 'Add your descriptive commit message here'
   ```
6. **Push Your Changes:**
   ```
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request:**

- Go to the original repository on GitHub and click on the "New Pull Request" button.
- Select your branch from the "compare" dropdown and submit your pull request.
- Provide a clear description of the changes and any additional context.

