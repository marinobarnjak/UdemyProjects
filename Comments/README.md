# Comments App

This project is a basic comment management web application built as part of the *Web Developer Bootcamp 2025* course.

## Features

- View all comments  
- Add new comments  
- View a single comment  
- Edit an existing comment  
- Server-side routing and form handling  
- In-memory data storage using an array  

## Technologies Used

- Node.js  
- Express.js  
- EJS (Embedded JavaScript Templates)  
- Bootstrap (for simple styling)  
- Method-Override (to enable PUT/PATCH in forms)

## Structure

comments/
├── index.js # Main Express server logic  
├── views/comments    
│ ├── index.ejs # List all comments  
│ ├── new.ejs # Form to add a comment  
│ ├── show.ejs # View one comment  
│ └── edit.ejs # Edit a comment  


## Usage

1. Run `npm install` to install dependencies  
2. Run `node index.js`  
3. Visit `http://localhost:3000/comments` in your browser

This project does not use a database — all comments are stored temporarily in memory.

---

> This was a great exercise for learning basic RESTful routes and how to use EJS for dynamic web pages.
