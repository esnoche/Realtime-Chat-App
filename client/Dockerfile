# Build the frontend application
FROM node:16 AS build

WORKDIR /app

# Copy the package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

RUN npm install

# Copy the rest of the frontend code
COPY . ./

RUN npm run build

# Serve the frontend using Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the frontend to be accessible
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
