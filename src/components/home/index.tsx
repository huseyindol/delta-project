import { Flex, Typography } from "antd";
import type React from "react";

const Home: React.FC = () => {
  return (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Home
        </Typography.Title>
      </Flex>
    </Flex>
  );
};

export default Home;
