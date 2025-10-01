# Step 1 : Build 
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2 : Run
FROM node:20-alpine AS runner
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
EXPOSE 3000
CMD ["npm", "start"]