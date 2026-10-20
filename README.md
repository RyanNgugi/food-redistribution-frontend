# WasteNot KE: Frontend

React frontend for **WasteNot KE**, a prototype web system for redistributing surplus food in Nairobi. It is designed to connect restaurants and event organizers that have surplus food with charities and farms that can use it.

This was a university project for my BSc in Informatics and Computer Science at Strathmore University. I built the frontend; a project partner built the backend.

## What the frontend includes

- React and Vite single-page app with client-side routing
- Authentication context for logged-in users
- Admin dashboard for user management and listing moderation
- Admin-only route guard (`AdminRoute`) that restricts access to admin pages

## Tech stack

- React
- Vite
- JavaScript, HTML, CSS

The backend (Node.js, Express, Prisma, MySQL) is in a separate repository: [food-redistribution-api](https://github.com/kylemwastaken/food-redistribution-api)


## Running locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the backend API URL (see `.env.example` if present)
4. Start the dev server: `npm run dev`

The backend must be running for data-driven pages to work.

## Status

Prototype built for coursework and run locally; it is not deployed. Authentication for creating listings is still being completed on both the frontend and the backend.

## Author

Ryan Ngugi Wainaina, Strathmore University
