# Use the an official Node.js image as the base image
FROM node:20.11.1

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the frontend directory from the local machine to the /app directory in the container
COPY . .

# Expose port 5173 to allow external connections to the application
EXPOSE 5173

# Install Node.js dependencies using npm and start the development server
CMD ["sh", "-c", "npm install --legacy-peer-deps && npm run dev -- --host"]