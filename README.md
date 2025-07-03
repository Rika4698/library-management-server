## Library Management Project Overview

This **Library Management** API, built with **TypeScript** and **Express.js**, integrates **MongoDB via Mongoose** and uses **Zod** for validation. It provides endpoints for managing books and borrow records, including creation, retrieval, updating, deletion, borrowing with due dates. The API also includes an aggregation-based summary of borrowed books, supporting business logic.

<br/>
<br/>

## Technology Used

-   Typescript
-   MongoDB (Mongoose)
-   Node.js
-   Express.js
-   Cors
-   dotenv
-   Zod for validation

<br/>

## Features

**Book Management**  
  - Add new books  
  - Update book details  
  - Delete books  
  - View all or individual books  

**Borrow System**  
  - Borrow a book with quantity and due date  
  - Automatically updates availability  
  - Prevents borrowing if copies are insufficient  

**Borrow Summary (Aggregation)**  
  - Returns total quantity borrowed per book  
  - Includes book title and ISBN  


<br/>
<br/>

# API Endpoints:

## Book System

Create a New Book

-   Endpoint: `/api/books`
-   Method: POST

Retrieve a List of All Books

-   Endpoint: `/api/books`
-   Method: GET

Retrieve a Specific Book by ID

-   Endpoint: `/api/books/:bookId`
-   Method: GET

Update Book Information

-   Endpoint: /`api/books/:bookId`
-   Method: PUT

Delete a Book

-   Endpoint: `/api/books/:bookId`
-   Method: DELETE

Filter, limit and sort for a Book

-   Endpoint: `/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5`
-   Method: GET

## Borrow System

Create a Borrow Book

-   Endpoint: `/api/borrow`
-   Method: POST

Retrieve Borrowed Books Summary

-   Endpoint: `/api/borrow`
-   Method: GET

<br/>
<br/>

## How to Run the Project

Clone the Repository

git clone https://github.com/Rika4698/Library-Management-Backend.git

cd Library-Management-Backend

## Install Dependencies

npm install

Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=5000

DATABASE_URL=< mongodb-uri >

Start the Server

npm start

The server will start running on http://localhost:5000.

Live Server Link: https://library-management-backend-five.vercel.app/

"# library-management-server" 
