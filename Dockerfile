FROM node:18-alpine as svelte-build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build
ENV PORT=8088
EXPOSE 8088
CMD ["node", "-r", "dotenv/config", "build"]
