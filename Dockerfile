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

# Replace default Nginx config with custom one (for single-page apps)
RUN rm /etc/nginx/conf.d/default.conf
RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $$uri $$uri/ /index.html; \
    } \
    error_page 404 /index.html; \
}' > /etc/nginx/conf.d/default.conf

# Fix permissions (important for OpenShift/Rahti)
RUN mkdir -p /var/cache/nginx /var/run /var/log/nginx /tmp/nginx && \
    chmod -R 777 /var/cache/nginx /var/run /var/log/nginx /tmp/nginx /usr/share/nginx/html /etc/nginx/conf.d

# Switch to non-root user (Rahti will override UID)
USER 1001

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
