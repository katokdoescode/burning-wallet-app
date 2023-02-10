FROM node:18-alpine as svelte-build
WORKDIR /svelte-kit
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=svelte-build /svelte-kit/ /app
COPY nginx.conf /etc/nginx/nginx.conf
