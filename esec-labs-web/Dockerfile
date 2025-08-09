    # Use a Node.js base image
    FROM node:20-alpine

    # Set the working directory inside the container
    WORKDIR /src/app

    # Copy package.json and package-lock.json (or yarn.lock) to the container
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    EXPOSE 3000

    # Command to start the Next.js application
    CMD ["npm", "run", "dev"]
