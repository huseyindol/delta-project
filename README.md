# 🚀 Delta Project

A modern React-based e-commerce management system built with TypeScript, featuring product and user management capabilities with advanced design token system.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [API Endpoints](#api-endpoints)
- [Scripts](#scripts)
- [Contributing](#contributing)

## ✨ Features

### 📊 Dashboard

- **Statistics Overview**: Real-time statistics with visual indicators
- **System Navigation**: Quick access to all management modules
- **Design Token Integration**: Consistent theming across all components
- **Responsive Cards**: Adaptive layout for different screen sizes

### 🛍️ Product Management

- **Product Catalog**: Browse products with categories (Mobilya, Elektronik)
- **Product Details**: View detailed information about each product
- **Product CRUD**: Add, edit, and delete products
- **Category Filtering**: Filter products by categories
- **Advanced Search**: Debounced search with reusable components
- **Favorites**: Mark products as favorites

### 👥 User Management

- **User Listing**: View all registered users
- **User Details**: View complete user profiles
- **User CRUD**: Add, edit, and delete users
- **Advanced Search**: Find users with optimized search functionality
- **Form Validation**: Comprehensive form validation

### 🎨 UI/UX Features

- **Modern Design**: Built with Ant Design components and design tokens
- **Design Token System**: Consistent spacing, colors, typography, and animations
- **Dark Theme**: Full dark theme support with automatic token switching
- **Responsive Layout**: Mobile-first responsive design
- **Loading States**: Smooth loading indicators with design token styling
- **Error Handling**: Comprehensive error boundaries
- **Toast Notifications**: User-friendly notifications
- **Performance Optimized**: useCallback hooks for preventing unnecessary re-renders

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Ant Design 5** - Professional UI components with design token system
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
│   │   ├── shared/       # Shared/reusable components
│   │   │   └── ui/       # Shared UI components
│   │   │       └── filter/ # Reusable filter components
│   │   └── home/         # Dashboard components
│   ├── layouts/          # Layout components
│   ├── services/         # API services
│   ├── store/            # Redux store
│   ├── utils/            # Utility functions
│   ├── hooks/            # Custom hooks (useDebounce, etc.)
│   └── assets/           # Source assets
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Design System

### Design Token Implementation

The project uses Ant Design's design token system for consistent theming:

#### Key Features

- **Spacing Tokens**: `paddingLG`, `marginXL`, `marginMD` for consistent spacing
- **Color Tokens**: `colorPrimary`, `colorBgLayout`, `colorTextHeading` for theming
- **Typography Tokens**: `fontSizeHeading2`, `fontWeightStrong`, `lineHeight`
- **Border & Shadow Tokens**: `borderRadiusLG`, `boxShadowSecondary`
- **Motion Tokens**: `motionDurationMid` for smooth animations

#### Benefits

- **Theme Consistency**: Automatic dark/light theme switching
- **Maintainability**: Centralized design system management
- **Accessibility**: Built-in accessibility standards
- **Responsive**: Adaptive design tokens for different screen sizes

### Reusable Components

- **SearchBoxInput**: Optimized search component with debouncing
- **Error Boundaries**: Comprehensive error handling
- **Loading States**: Consistent loading indicators

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

### Performance Optimization

- **useCallback**: Preventing unnecessary re-renders
- **Debounced Search**: Optimized search functionality
- **Component Reusability**: Shared components reduce bundle size
- **Lazy Loading**: Suspense with custom loading states

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
- Ant Design provides the UI component library with design token system
- JSON Server provides a quick backend solution for development
- Design tokens ensure consistent theming across the application
- useCallback hooks are used for performance optimization

## 🔧 Environment Setup

Create a `.env` file in the root directory for environment variables:

```env
VITE_API_URL=http://localhost:3001
```

## 🆕 Recent Updates

- ✅ **Design Token System**: Comprehensive design token implementation
- ✅ **Dashboard Enhancement**: Statistics cards and improved navigation
- ✅ **Component Optimization**: Reusable SearchBoxInput with performance improvements
- ✅ **Dark Theme**: Full dark theme support with automatic token switching
- ✅ **Performance**: useCallback implementation for preventing infinite loops

---

**Happy Coding! 🎉**
