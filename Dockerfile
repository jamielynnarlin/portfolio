# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG VITE_BASE=/
ARG VITE_API_URL=
ENV VITE_BASE=${VITE_BASE}
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build

# Runtime stage
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY server/ ./server/
COPY --from=build /app/dist ./dist
EXPOSE 8080
ENV PORT=8080
CMD ["node", "server/server.js"]
