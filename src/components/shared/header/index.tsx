import { Flex, Layout, Typography } from "antd";
import type React from "react";
import { Link } from "react-router-dom";
const { Header } = Layout;


const HeaderComponent: React.FC = () => {

  return (
    <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Flex>
        <Link to="/">
          <Typography.Title level={3} style={{ display: "inline-flex", margin: 0 }}>Delta Project</Typography.Title>
        </Link>
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
