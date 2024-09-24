# Mercado Pago Customer Management

This project is a NestJS microservice that manages customers using the Mercado Pago Sandbox environment.

## Features

- List customers registered in Mercado Pago Sandbox
- Get one specific customer
- Register new customers
- Update customers

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Mercado Pago Sandbox account and credentials

## Installation
1. Clone the repository:
- git clone https://github.com/LauraCZambrano/lzambrano-test-challenge.git

2. Install dependencies:
- npm install

3. Create a `.env` file in the root directory and add your Mercado Pago Sandbox access token:
- MERCADOPAGO_ACCESS_TOKEN=XXXX_XXXXX_XXXX_XXXX_XXXX

## Running the application
- npm run start

The application will be available at `http://localhost:3000`.

## API Documentation

Swagger documentation is available at `http://localhost:3000/api` when the application is running.

## API Endpoints

- GET /mercadopago/customers - List all customers
- GET /mercadopago/customers/:id - Get one specific customer
- POST /mercadopago/customers - Create a new customer
- PUT /mercadopago/customers/:id - Update an existing customer