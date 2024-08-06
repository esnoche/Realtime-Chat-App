# Project Timeline: Realtime Chat Application

Hi! I'm Pratik, a full stack developer currently working on a project called "Realtime Chat Application," similar to WhatsApp. I'll be sharing the timeline of my progress on this project. Let's get started!

## Day 0: Project Inception
- After mastering the MERN stack and exploring various project ideas, I decided to develop a "Realtime Chat Application" similar to WhatsApp.
- Researched additional technologies such as Socket.io and Shadecn to enhance the application.
- Created a rough structure for the app, outlining the division of components and their development sequence after several days of planning.

## Day 1 (31-07-2024): Initial Setup
- Set up the project using Vite with React and configured TailwindCSS.
- Established basic routing with `react-router-dom`, creating pages for authentication, chat, and profile.
- Focused on the dynamic login/signup frontend page, iterating through several designs until it felt right.

## Days 2 & 3 (01-08-2024 & 02-08-2024): Server-Side Development
- Began server-side coding, installing necessary packages: `express`, `dotenv`, `cors`, `cookie-parser`, `mongoose`, `bcrypt`, `jsonwebtoken`.
- In `index.js`, connected to MongoDB and set up middleware.
- Created folders for middleware, controllers, and models:
  - Built the `UserModel`.
  - Implemented signup and login logic in `authControllers`.
  - Set up routing in `authRoutes`.
- Faced significant challenges while handling client-side requests:
  - Successfully implemented signup functionality but encountered persistent 404 errors during login.
  - After extensive debugging, resolved the issue by refining the Axios POST request URLs.
- Integrated `zustand` for state management to handle user data across the app.
- Designed the profile page UI, undergoing several iterations before finalizing the design.

## Days 4 & 5 (03-08-2024 & 04-08-2024): Exam Break
- Focused on exams while planning the next steps for the project.

## Day 6 (05-08-2024): Profile Functionality Enhancements

### Profile Setup and Update
- Implemented functionality to allow users to set their profile for the first time and update it anytime from the profile section.
- Added navigation logic for handling profile setup:
  - If the profile is complete, users are redirected to the chat page.
  - If the profile is incomplete, a popup prompts users to complete their profile before proceeding.

### Profile Image Management
- Enabled users to upload, update, and delete their profile pictures.
- Utilized the `multer` package for handling image uploads:
  - Configured `multer` to store images in the `/uploads/profiles` directory.
  - Used `express.static` middleware to serve static files from the uploads directory.

### Image Storage and Handling
- Addressed issues with images being stored in binary format:
  - Used `renameSync` to move and rename uploaded images properly.
  - Ensured images are saved with correct names and paths in the server’s file system.
  - Resolved issues related to incorrect image storage by implementing appropriate file handling logic.
- Added functionality to delete profile images:
  - Implemented logic to remove the profile image from the file system when a user removes their profile picture.

## Day 7 (06-08-2024): Chat Page Layout

### Chat Page Structure
- Developed the layout for the chat page, organizing it into distinct containers: `Chat`, `Contacts`, and `EmptyChat`, each with its own `index.jsx` file for better structure and maintainability.

- **Chat Container**: Designed placeholders for `ChatHeader`, `MessageBar`, and `MessageContainer`.
- **Contacts Container**: Added `ProfileInfoComponent` for user profiles, including edit and logout options. Included app name and a top-left animation.
- **Empty Chat Container**: Added placeholder for animation when no chats are active.
- **Styling**: Applied basic styling for a cohesive and user-friendly layout.
