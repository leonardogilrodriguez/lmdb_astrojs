# Stage 1: Build
FROM node:20.11.0-alpine AS build
WORKDIR /usr/src/app

# Copy package.json
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application

# Stage 2: Production
FROM node:20.11.0-alpine AS production
WORKDIR /usr/src/app

# Copy only the build artifacts and runtime dependencies
COPY --from=build /usr/src/app/ ./

# Comando para correr la app en producción
CMD ["npm", "start"]