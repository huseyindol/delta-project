import ProductAdd from "@/components/products/add/index.tsx";
import ErrorBoundary from "@/components/shared/error/ErrorBoundary.tsx";
import UserAdd from "@/components/users/add/index.tsx";
import UserDetail from "@/components/users/details/index.tsx";
import UserEdit from "@/components/users/edit/index.tsx";
import Users from "@/components/users/index.tsx";
import UserLayout from "@/layouts/UserLayout.tsx";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy loading için componentleri import ediyoruz
const Home = lazy(() => import("./components/home/index.tsx"));
const BaseLayout = lazy(() => import("./layouts/BaseLayout.tsx"));
const ProductLayout = lazy(() => import("./layouts/ProductLayout.tsx"));
const Products = lazy(() => import("./components/products/index.tsx"));
const ProductDetail = lazy(
  () => import("./components/products/details/index.tsx"),
);
const ProductEdit = lazy(() => import("./components/products/edit/index.tsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "products",
        element: <ProductLayout />,
        errorElement: <ErrorBoundary />,
        children: [
          {
            element: <Products />,
            index: true,
          },
          {
            path: "add",
            element: <ProductAdd />,
          },
          {
            path: ":id",
            element: <ProductDetail />,
          },
          {
            path: ":id/edit",
            element: <ProductEdit />,
          },
        ],
      },
      {
        path: "users",
        element: <UserLayout />,
        errorElement: <ErrorBoundary />,
        children: [
          {
            element: <Users />,
            index: true,
          },
          {
            path: "add",
            element: <UserAdd />,
          },
          {
            path: ":id",
            element: <UserDetail />,
          },
          {
            path: ":id/edit",
            element: <UserEdit />,
          },
        ],
      }
    ],
  },

]);
