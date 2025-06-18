import { ConfigProvider, Spin, theme } from "antd";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/reset.css";
import { router } from "./routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {},
      }}
    >
      <Suspense fallback={<Spin size="large" className="global-spinner" />}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
