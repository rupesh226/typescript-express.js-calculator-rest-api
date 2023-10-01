# Simple REST API Calculator

This project is a straightforward calculator built to understand and implement a REST API using Node.js, TypeScript, and Express.js. It showcases the application of middleware logging in Node.js and utilizes interfaces and classes in TypeScript.

## Technologies Used

- **Node.js:** JavaScript runtime for building scalable network applications.
- **TypeScript:** A strongly typed superset of JavaScript.
- **Express.js:** A minimal and flexible Node.js web application framework.

## Features

- Perform basic arithmetic operations via REST API.
- Middleware logging in Node.js.
- Use of TypeScript interfaces and classes.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Ensure you have Node.js installed on your local machine. If not, download and install it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rupesh226/typescript-expressjs-calculator-rest-api.git
   cd typescript-expressjs-calculator-rest-api
   ```

2. **Install Dependencies:**

   Install the necessary project dependencies by running:

   ```bash
   npm install --save-dev typescript @types/express
   npm install --save-dev nodemon
   ```

3. **Initialize TypeScript Configuration:**

   ```bash
   tsc --init
   ```

### Running the Project

To start the project on your local machine, execute the following command:

```bash
npm run dev
```

The server will start and listen on a predefined port (e.g., `localhost:3000`).

## API Usage

You can perform calculations using the following `curl` command:

```bash
curl --location 'localhost:3000/calculator/' \
--header 'Content-Type: application/json' \
--data '{
    "operator": "+", 
    "operand1": 1, 
    "operand2": 2
}'
```

This API takes three parameters:

- `operator`: The arithmetic operation to perform (`+`, `-`, `*`, `/`).
- `operand1`: The first number in the calculation.
- `operand2`: The second number in the calculation.

