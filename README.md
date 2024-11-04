# Microservices Application with User and Notification Services

This project demonstrates a microservices architecture using Node.js, TypeScript, Docker, and RabbitMQ. It consists of two microservices: **User Service** and **Notification Service**.

## Overview

The User Service handles user management with CRUD operations, while the Notification Service listens for events from RabbitMQ and sends notifications based on user actions.

## Setup & Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Setting Up Environment Variables**

   copy .env.example to .env for each service

3. **Build and start the services**:

   ```bash
   docker-compose up --build
   ```
