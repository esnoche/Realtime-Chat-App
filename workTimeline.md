# **Project Timeline: Realtime Chat Application**

Hello! I'm Pratik, a full stack developer, and I’ve been working on a project called **"Realtime Chat Application,"** which is designed to function similarly to WhatsApp. This timeline documents my progress, challenges, and key learnings throughout the project. Let’s dive in!

## **Project Overview**
The "Realtime Chat Application" is a project aimed at deepening my understanding of real-time communication and full stack development. Leveraging technologies like the MERN stack, Socket.io, and Zustand, I set out to build a robust chat application that mimics the functionality of popular messaging platforms.

---

## **Day 0: Project Inception**
- **Conceptualization**: After exploring various project ideas, I chose to develop a "Realtime Chat Application" to refine my skills in real-time data handling.
- **Research**: Conducted research on additional technologies like Socket.io for real-time communication and Shadecn for UI enhancements.
- **Planning**: Drafted the application's architecture, outlining the division of components and the development sequence.

---

## **Day 1 (31-07-2024): Initial Setup**
- **Project Setup**: Initialized the project using Vite with React and configured TailwindCSS for styling.
- **Routing**: Established basic routing with `react-router-dom`, creating pages for authentication, chat, and profile management.
- **Frontend Development**: Focused on creating a dynamic login/signup page, iterating through several designs until the layout felt user-friendly.

---

## **Days 2 & 3 (01-08-2024 & 02-08-2024): Server-Side Development**
- **Backend Setup**: Installed essential packages like `express`, `dotenv`, `cors`, `cookie-parser`, `mongoose`, `bcrypt`, and `jsonwebtoken`.
- **Database Connection**: Connected to MongoDB and set up middleware in `index.js`.
- **User Authentication**: 
  - Created the `UserModel` to handle user data.
  - Implemented signup and login logic in `authControllers`.
  - Set up routing in `authRoutes`.
- **Challenges**: Faced persistent 404 errors during login due to incorrect Axios POST request URLs, which were resolved after thorough debugging.
- **State Management**: Integrated `zustand` to manage user data across the application.
- **UI Development**: Designed and refined the profile page UI through multiple iterations.

---

## **Days 4 & 5 (03-08-2024 & 04-08-2024): Exam Break**
- **Break**: Focused on exams while planning the next steps for the project. This pause also provided a chance to reassess the project’s direction.

---

## **Day 6 (05-08-2024): Profile Functionality Enhancements**

### **Profile Setup and Management**
- **User Profile**: Implemented functionality to allow users to set up and update their profiles.
- **Navigation Logic**: 
  - If the profile is complete, users are redirected to the chat page.
  - If incomplete, users are prompted to finish their profile setup.

### **Profile Image Management**
- **Image Uploading**: Utilized the `multer` package to handle image uploads, storing them in the `/uploads/profiles` directory.
- **Static File Serving**: Used `express.static` middleware to serve profile images.
- **File Handling**: Resolved issues related to incorrect image storage by implementing appropriate file handling logic.
- **Image Deletion**: Added functionality for users to delete their profile images, ensuring proper file removal from the server.

---

## **Day 7 (06-08-2024): Chat Page Layout**

### **Chat Page Structure**
- **Component Organization**: Developed the chat page layout, organizing it into three main containers: `Chat`, `Contacts`, and `EmptyChat`, each with its own `index.jsx` file for better structure and maintainability.
  - **Chat Container**: Designed placeholders for `ChatHeader`, `MessageBar`, and `MessageContainer`.
  - **Contacts Container**: Added `ProfileInfoComponent` for user profiles, including edit and logout options, with a top-left animation for the app name.
  - **Empty Chat Container**: Included a placeholder for an animation when no chats are active.
- **Styling**: Applied basic styling to ensure a cohesive and user-friendly interface.

---

## **Day 8 (07-08-2024): Contact Search, UI Enhancements, Zustand State Management & Socket.io**

### **Contact Search**
- **Search Implementation**: 
  - Added a "React Faplus" button for initiating contact searches.
  - Used the Shadcn Dialog component to create a search popup, complete with a search bar and ScrollArea for results.
  - Animated empty or initial search results for better user experience.

### **Backend Enhancements**
- **Code Structure**: Improved the backend by adding `contactsController.js` for handling contact operations and `contactRoutes.js` for managing contact-related routing.
- **Search Functionality**: Developed the `searchContacts` function to efficiently query contacts.

### **State Management & UI Enhancements**
- **Zustand Integration**: Extended Zustand to manage chat state, including chat type, data, and messages via `chat-slice.js`.
- **UI Updates**: 
  - Updated the Chat Page to include conditional rendering for active chats and empty states.
  - Improved the `ChatHeader` to display user images and names, with a close button integrated using `closeChat` from `useAppStore`.

### **Socket Integration**
- **Socket.io Setup**: Set up Socket.io on the server to manage real-time communication and user connections.
- **Socket Context & Provider**: 
  - Created a context and provider using React's `createContext` and `useSocket` hook.
  - Managed socket connections through the `SocketProvider`, syncing with Zustand state.
  - Utilized `socket.io-client` for seamless real-time messaging.

### **Message Handling**
- **Message Listener**: Implemented a listener in the SocketProvider to handle incoming messages.
- **Message Processing**: Developed the `handleReceiveMessages` function to check if the message belongs to the current chat, adding it to the chat state using `addMessage`.

**Error Note**: Encountered an issue with message rendering that required further investigation and will be addressed tomorrow.

**Work Duration**: Worked extensively from 8 AM to 11 PM with only 2 meals and a 1-hour tea break.

---

## **Day 9 (08-08-2024): Message Rendering Fixes and Final Adjustments**

### **Issue Resolution**
- **Message Rendering Issue**: Discovered that messages were not rendering correctly due to an error in the message schema.
- **Schema Update**: Corrected the schema, ensuring proper message rendering within the chat UI.

### **Feature Development**
- **Conversation History**: Added a `getMessages` function to fetch and display the entire conversation history from the database.
- **Contacts History**: Implemented functionality to fetch and display chat history with contacts, allowing users to select and continue conversations seamlessly.

### **Rest and Recovery**
- **Rest**: After a productive workday, spent time resting and catching up on sleep.

---

## **Day 10 (09-08-2024): Project Conclusion and Reflections**

### **Project Closure**
- **Concluding the Project**: After careful consideration, I decided to wrap up the "Realtime Chat Application" project. Although there were additional features like message deletion, channel creation, and file sharing that I could have implemented, I felt the project had already served its purpose by significantly advancing my understanding of real-time communication and full stack development.

### **Key Learnings**
- **Learning & Adaptation**: This project was a great exercise in rapid learning and adaptation. I explored new libraries, debugged complex issues, and honed my problem-solving skills.
- **Project Management**: The experience provided valuable insights into project management, simulating how real-world projects are handled. Initially, managing the various components felt overwhelming, but as I progressed, it became a rewarding learning opportunity.

### **Moving Forward**
- **Next Steps**: With the foundational work completed, I’m shifting my focus to mastering TypeScript, Next.js, and other advanced technologies. These are crucial for my growth, and I’m eager to dive into them.
- **Future Projects**: While this project is concluding, I’m excited to apply the skills and knowledge I’ve gained to future endeavors. The journey continues, and I’m ready for the next challenge.

---

