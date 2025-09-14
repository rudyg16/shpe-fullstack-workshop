# Use Node.js image
FROM node:22-alpine

# Set workdir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the app
RUN npm run build

# Run Next.js in production mode
CMD ["npm", "start"]
