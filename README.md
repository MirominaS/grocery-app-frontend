# Grocery App - Frontend

## Project Overview

This is the frontend application for the Grocery App.

- Browse grocery products
- Search and filter items
- Add products to a cart
- Place orders

---

## Features

### Customer Side

- Display list of products
- Search products by name
- Filter products by category
- Add items to cart
- Update/remove items from cart
- View cart total
- Checkout form with:
  - Customer name
  - Phone number
  - Delivery address
- Place order successfully

---

## Tech Stack

- React (Vite)
- React Router
- CSS 
- Fetch API
---
 
 ## Architecture Overview

This project follows a **simple full-stack architecture** with a clear separation between frontend and backend.

---

### Frontend (React + Vite)

- Built using React with a component-based structure
- Pages are separated into:
  - Home (product listing)
  - Cart
  - Checkout
  - Admin 
- Reusable components are used to keep the UI modular
- State management is handled using `useState` and props 
- API calls are abstracted into a separate `/api` layer

---

### Backend (Node.js + Express)

- RESTful API built using Express
- Follows a layered structure:
  - Routes → handle endpoints
  - Controllers → handle business logic
  - Config → database connection
- Handles:
  - Product fetching 
  - Order creation 
  - Order retrieval

---
### Database (PostgreSQL)

- Relational database design with normalized structure:
  - `products` → stores product data
  - `orders` → stores order details
  - `order_items` → stores items per order
- Supports one-to-many relationship between orders and products
- Ensures data consistency using transactions during order creation

---

### Data Flow

1. Frontend sends API request
2. Backend processes request and queries database
3. Database returns data to backend
4. Backend sends JSON response to frontend
5. Frontend updates UI accordingly
---
## Project Structure
```
grocery-app-frontend/ 
   ├── src/
   │   ├── assets/
   │   ├── components/
   │   ├── pages/
   │   ├── api/
   │   ├── App.js
   │   ├── App.css
   │   └── main.js
   └── package.json
```
---
## Clone repository

```bash
git clone https://github.com/MirominaS/grocery-app-frontend.git
cd grocery-app
```
## Installation & Running

### Install dependencies

```bash
npm install
npm install react-router-dom
```
#### Run development server
```bash
npm run dev
```

#### Application runs at

http://localhost:5173

#### Backend Connection
The frontend connects to the backend API running at:

http://localhost:3000

Make sure your backend server is running before starting the frontend.
- API Integration
- Fetch Products

GET /grocery/products?search=&category=
- Create Order

POST /grocery/orders
- Get Orders (Admin)

GET /grocery/orders

### State Management
- Cart state is managed using useState in App.jsx
- Data is passed to components via props
- No external state management library is used
### Key Design Decisions
1. Component-Based Architecture
Reusable components (ProductCard, CartItem, etc.)
Separation of UI and logic
2. Props-Based State Management
Avoided complexity of Context API
Suitable for small-scale applications
3. API Layer Separation
API calls handled in /api folder
Keeps components clean and maintainable
### Error Handling
Handles API failures gracefully
Displays fallback messages:
"No products available"
"Your cart is empty"
 
### Future Improvements
Use Context API or Redux for state management
Improve UI/UX design
Add authentication
Add order success page
Pagination for products

## Author

**Miromina**  
 smirona16@gmail.com  
 [LinkedIn](https://www.linkedin.com/in/miromina/) | [GitHub](https://github.com/MirominaS)
