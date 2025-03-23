FROM node:16-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

ENV VITE_API_URL="http://54.167.33.212:5000/api/v1/"

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
