import { Flex, Layout, Typography } from "antd";
import type React from "react";
const { Header } = Layout;


const HeaderComponent: React.FC = () => {

  return (
    <Header >
      <Flex align="baseline" gap="middle">
        <Typography.Title level={3} style={{ display: "inline-flex", margin: 0 }}>Delta Project</Typography.Title>
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
