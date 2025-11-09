# Multi-stage build for optimal image size and security

# Stage 1: Build the React application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Create non-root user for security (required by OpenShift/Rahti)
RUN chgrp -R 0 /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html && \
    chmod -R g+rwX /var/cache/nginx /var/run /var/log/nginx /usr/share/nginx/html && \
    chmod g+w /etc/nginx/conf.d

# Use non-root user
USER 1001

# Expose port 8080 (Rahti/OpenShift default)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]