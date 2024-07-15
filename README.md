# Techy Software Website

Welcome to the Techy Software website project! This project is built using the MERN stack (MongoDB, Express, React, Node.js) with Vite for the frontend setup.

## Live Website

You can visit the live website [Techy Software](https://techy-software-5r4b.onrender.com/)

## Project Setup

Follow the steps below to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v6 or higher)
- MongoDB


### **Clone the Repository:**

 ```bash
  git clone https://github.com/urmilgadhiya18/techy_Software.git
  cd techy_Software
 ```
    
### Backend Setup

1. **Install Backend Dependencies:**

    ```bash
    cd server
    npm install
    ```

2. **Create a `.env` File:**

    Create a `.env` file in the `server` directory and add the following environment variables:

    ```env
    PORT=4004
    MONGO_URI=your_mongodb_connection_string
    ```

3. **Start the Backend Server:**

    ```bash
    node app.js
    ```

    The backend server should now be running on `http://localhost:4004`.

### Frontend Setup

1. **Navigate to the Frontend Directory:**

    ```bash
    cd ../client
    ```

2. **Install Frontend Dependencies:**

    ```bash
    npm install
    ```

3. **Start the Frontend Server:**

    ```bash
    npm run dev
    ```

    The frontend should now be running on `http://localhost:5173`.

## Scripts

### Backend

- **`node app.js`**: Start the backend server.

### Frontend

- **`npm run dev`**: Start the frontend server with Vite.

## Contributing

Feel free to open issues or submit pull requests if you find any bugs or want to add new features.



