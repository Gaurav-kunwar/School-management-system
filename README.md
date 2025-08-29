<h1 align="center">My School Management System</h1>

<h3 align="center">A MERN stack application to streamline school operations, manage classes, and connect students and faculty.</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/gaurav-singh-kunwar-iet-lucknow-student-7657b228b/"><strong>LinkedIn</strong></a>
</p>

## About The Project

This School Management System is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides distinct roles and dashboards for Admins, Teachers, and Students to simplify school administration and enhance communication.

## Key Features

-   **Role-Based Access:** Separate dashboards and functionalities for Admins, Teachers, and Students.
-   **Admin Controls:** Manage students, teachers, classes, and subjects with ease.
-   **Attendance & Performance:** Track student attendance and assess academic performance with marks and feedback.
-   **Data Visualization:** Interactive charts for students to visualize their progress.
-   **Seamless Communication:** Built-in messaging to connect users.

## Tech Stack

-   **Frontend:** React.js, Redux, Material-UI
-   **Backend:** Node.js, Express.js
-   **Database:** MongoDB

## Getting Started

Follow these steps to get a local copy up and running.

### Prerequisites

-   Node.js and npm installed.
-   MongoDB installed locally or a MongoDB Atlas account.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Gaurav-kunwar/School-management-system
    ```

2.  **Set up the Backend:**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```
    MONGO_URL="your_mongodb_connection_string"
    ```
    Then, start the backend server:
    ```sh
    npm start
    ```
    The backend will run on `http://localhost:5000`.

3.  **Set up the Frontend:**
    ```sh
    cd ../frontend
    npm install
    npm start
    ```
    The frontend will open automatically at `http://localhost:3000`.

    **Note:** If you encounter issues with API requests, ensure the backend is running. The frontend is configured to proxy requests to `http://localhost:5000`.

## Deployment

-   **Backend:** Can be deployed on services like Render or Heroku.
-   **Frontend:** Can be deployed on services like Netlify or Vercel.

