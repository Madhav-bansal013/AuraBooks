
# AuraBooks Backend

AuraBooks is a MERN stack project for managing bookstore Website. This project is built using React , Node.js, Express, MongoDB and Tailwind for styling.

## Features

- User signup with password hashing
- Courses as protected routes
- Stylish Website using Tailwind

## Prerequisites

- Node.js installed
- MongoDB database (local or cloud)
- NPM or Yarn package manager

## Getting Started

### Installation
For Frontend:
1. Vite 
    - npm create vite@latest my-project -- --template react
    - cd my-project
2. Tailwind Install
    - npm install -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p

For Backend:
1. Clone the repository:

    - git clone 'https://github.com/your-username/aurabooks-backend.git'
    - cd aurabooks-backend
    

2. Install the dependencies:
    - npm install
  

### Configuration

1. Create a `.env` file in the root of your project:
   
    MONG_URI="your mongo connection string"
    PORT=4000

### Running the Application

Start the Frontend server:

npm run dev

Start the Backend server:

npm start



## Technologies Used
- React
- Tailwind
- Node.js
- Express
- MongoDB
- Mongoose
- Bcrypt
- dotenv
- CORS

