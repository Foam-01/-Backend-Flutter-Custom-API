# Backend-Flutter-Custom-API

This project is a backend RESTful API built with Node.js and Express.js to serve data for Flutter applications using custom APIs.

## Author

Foam-01


## Project Structure

- `models/` - Mongoose data models  
- `routes/` - Express route handlers  
- `node_modules/` - Installed Node.js packages  
- `.env` - Environment variables for configuration  
- `index.js` - Main server entry point  
- `package.json` - Project metadata and scripts  
- `package-lock.json` - Locked dependencies  

## Technologies Used

- Node.js: JavaScript runtime  
- Express.js: Web framework for building APIs  
- MongoDB (via Mongoose): NoSQL database  
- dotenv: Environment variable management  

## Features

- RESTful API endpoints supporting CRUD operations  
- Designed for integration with Flutter apps  
- Environment-based configuration  
- Modular code structure  

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Foam-01/Backend-Flutter-Custom-API.git
cd Backend-Flutter-Custom-API

# 2. Install dependencies
npm install

# 3. Setup environment variables
# Create a `.env` file with your configuration (e.g., MongoDB connection URI)

# 4. Start the server
npm start

# 5. The API server will run at http://localhost:3000 (default port)
