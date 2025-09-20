#Get base image
FROM node:20-alpine

#Set working directory
WORKDIR /app

#Copy package.json and package-lock.json
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy application code
COPY . .

#Expose port
EXPOSE 5000

#Start application
CMD ["npm", "start"]
