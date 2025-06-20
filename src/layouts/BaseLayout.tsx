import Header from "@/components/shared/header";
import {
  HomeOutlined,
  MailOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, type MenuProps } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const { Footer, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Anasayfa",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Ürünler",
    key: "/products",
    icon: <MailOutlined />,
  },
  {
    label: "Kullanıcılar",
    key: "/users",
    icon: <UserOutlined />,
  },
];

const BaseLayout: React.FC = () => {

  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key as string);
  };

  return (
    <Layout>
      <Header />
      <Content style={{ flex: 1, width: "100%" }}>
        <Layout>
          <Sider width={250} style={{ zIndex: 1000 }} breakpoint="md" collapsedWidth="0" defaultCollapsed={true} zeroWidthTriggerStyle={{ top: -54 }}>
            <Menu
              theme="dark"
              mode="vertical"
              items={items}
              onClick={handleClick}
              selectedKeys={[current]}
            />
          </Sider>
          <Outlet />
        </Layout>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
export default BaseLayout;
