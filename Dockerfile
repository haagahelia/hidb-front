# Stage 1: Build the app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:stable-alpine

# Copy build output to Nginx web directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 8080 (Rahti expects apps to listen on 8080)
EXPOSE 8080

# Replace default Nginx config to use port 8080
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
