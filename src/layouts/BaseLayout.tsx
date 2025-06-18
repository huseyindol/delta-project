import Header from "@/components/shared/header";
import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";

const { Footer, Content } = Layout;

const BaseLayout: React.FC = () => (
  <Layout>
    <Header />
    <Content>
      <Outlet />
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default BaseLayout;
