import {
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Flex, Layout, Menu, Typography, type MenuProps } from "antd";
import type React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

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
  {
    label: "Ayarlar",
    key: "/settings",
    icon: <SettingOutlined />,
  },
];
const HeaderComponent: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();

  const handleClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key as string);
  };

  return (
    <Header>
      <Flex justify="space-between" align="center" gap="middle">
        <Typography.Title level={3}>Delta Project</Typography.Title>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          onClick={handleClick}
          selectedKeys={[current]}
        />
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
