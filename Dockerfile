FROM node:14.20-alpine3.15 as build
WORKDIR /app
COPY package.json .
COPY . .
RUN npm run build

FROM nginx:1.15
COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
