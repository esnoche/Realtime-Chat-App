FROM node:22

WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

RUN npm install

COPY . ./

# Expose port 2668 for the backend API to be accessible
EXPOSE 2668

# Set environment variable for development mode
ENV NODE_ENV=development

# Command to start the backend (using npm run dev for development)
CMD ["npm", "run", "dev"]
