FROM node:20
WORKDIR /app
RUN apt-get update && apt-get install -y ffmpeg
COPY . .
RUN npm install
CMD ["npm", "start"]