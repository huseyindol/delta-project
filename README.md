# 🚀 Delta Project

A modern React-based e-commerce management system built with TypeScript, featuring product and user management capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [Contributing](#contributing)

## ✨ Features

### 🛍️ Product Management

- **Product Catalog**: Browse products with categories (Mobilya, Elektronik)
- **Product Details**: View detailed information about each product
- **Product CRUD**: Add, edit, and delete products
- **Category Filtering**: Filter products by categories
- **Search**: Search products by name
- **Favorites**: Mark products as favorites

### 👥 User Management

- **User Listing**: View all registered users
- **User Details**: View complete user profiles
- **User CRUD**: Add, edit, and delete users
- **Search Users**: Find users by name or email
- **Form Validation**: Comprehensive form validation

### 🎨 UI/UX Features

- **Modern Design**: Built with Ant Design components
- **Responsive Layout**: Mobile-first responsive design
- **Loading States**: Smooth loading indicators
- **Error Handling**: Comprehensive error boundaries
- **Toast Notifications**: User-friendly notifications

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Ant Design 5** - Professional UI components
- **React Router v7** - Client-side routing
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence
- **Axios** - HTTP client

### Backend

- **JSON Server** - Mock REST API
- **Local Database** - JSON-based data storage

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- bun or npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd delta-project
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Start the backend server**

   ```bash
   # Start JSON Server on port 3001
   npx json-server backend/db/db.json --port 3001
   ```

4. **Start the development server**

   ```bash
   bun run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
delta-project/
├── public/                 # Static assets
│   └── assets/
│       └── images/        # Product images
├── backend/               # Backend data
│   └── db/
│       └── db.json       # JSON database
├── src/
│   ├── components/       # React components
│   │   ├── products/     # Product-related components
│   │   ├── users/        # User-related components
│   │   └── shared/       # Shared components
│   ├── layouts/          # Layout components
│   ├── services/         # API services
│   ├── store/            # Redux store
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom hooks
│   └── assets/           # Source assets
├── package.json
├── vite.config.ts
└── README.md
```

## 🔌 API Endpoints

The application uses JSON Server as a mock backend with the following endpoints:

### Products

- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `POST /products` - Create new product
- `PUT /products/:id` - Update product
- `DELETE /products/:id` - Delete product

### Categories

- `GET /categories` - Get all categories

### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Implementation

### State Management

- Redux Toolkit for efficient state management
- Redux Persist for data persistence
- Typed Redux hooks for type safety

### Routing

- React Router v7 for modern routing
- Nested routes for better organization
- Protected routes implementation

### Form Handling

- Ant Design Form components
- Custom validation rules
- Type-safe form submissions

### Error Handling

- Error boundaries for component-level errors
- API error handling with user notifications
- Loading states management

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

- The project uses path aliases (`@/`) for cleaner imports
- All components are written in TypeScript for type safety
- Ant Design provides the UI component library
- JSON Server provides a quick backend solution for development

## 🔧 Environment Setup

Create a `.env` file in the root directory for environment variables:

```env
VITE_API_URL=http://localhost:3000
```

---

**Happy Coding! 🎉**
