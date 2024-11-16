# Nginx API Gateway using Docker

A robust API Gateway implementation using Nginx, designed to handle routing and request management for microservices architecture.

## Features

- Request routing to multiple backend services

## Prerequisites

- Docker
- Docker Compose
- Git

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/your-repo/nginx-api-gateway-docker.git
cd nginx-api-gateway-docker
```

2. Start the services:
```bash
cd auth && npm install && npm start && cd ..
```
```bash
cd cart && npm install && npm start && cd ..
```
```bash
cd analytics && npm install && npm start && cd ..
```
```bash
cd order && npm install && npm start && cd ..
```
```bash
cd payment && npm install && npm start && cd ..
```
```bash
cd product && npm install && npm start && cd ..
```

3. Start Nginx Docker Container:
```bash
docker-compose up -d
```

4. Make requests:
```bash
curl http://localhost:8080
```
```bash
curl http://localhost:8080/auth/
```
```bash
curl http://localhost:8080/auth/dummy
```
```bash
curl http://localhost:8080/auth/cart
```
```bash
curl http://localhost:8080/auth/product
```
```bash
curl http://localhost:8080/auth/order
```
```bash
curl http://localhost:8080/auth/payment
```
```bash
curl http://localhost:8080/auth/analytics
```