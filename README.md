# MiniApp JWT Authentication

MiniApp is a Node.js application that demonstrates JWT (JSON Web Token) based authentication. It allows users to securely register, log in, and access protected routes using JWT tokens.

## Features

- **User Registration**: Secure user sign-up with password hashing.
- **User Login**: Authentication with JWT token issuance.
- **Protected Routes**: Access control using JWT tokens.
- **Environment Configuration**: Easy setup using environment variables.

## Installation

1. Clone the repository:
   git clone https://github.com/ololadetemi/miniapp_jwt.git
   cd miniapp_jwt
   ```

2. Install dependencies:
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   PORT=5040
   JWT_SECRET=your_jwt_secret
   MONGODB_URI=your_mongodb_uri
   ```

4. Start the server:
   npm start
   ```

## API Endpoints

- `POST /register`: Register a new user.
- `POST /login`: Authenticate a user and return a JWT token.
- `GET /protected`: Access a protected route (requires JWT token).

## Docker

1. Build the Docker image:
   docker build -t miniapp_jwt .
   

2. Run the container:
   docker run -p 5040:5040 miniapp_jwt
   ```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
