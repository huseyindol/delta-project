import GlobalSpinner from "@/components/shared/ui/GlobalSpinner";
import { ConfigProvider, theme } from "antd";
import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/reset.css";
import { router } from "./routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          // Custom tokenlar da ekleyebilirsiniz
          // colorPrimary: '#1890ff',
          // borderRadiusLG: 12,
          // paddingLG: 24,
        },
      }}
    >
      <Suspense fallback={<GlobalSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
