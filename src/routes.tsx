import ErrorBoundary from "@/components/shared/error/ErrorBoundary.tsx";
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
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "products/:id/edit",
        element: <ProductEdit />,
      },
    ],
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
    ],
  },
]);
