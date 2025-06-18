import SidebarCategories from "@/components/products/SidebarCategories";
import Header from "@/components/shared/header";
import {
  selectProducts,
  setCategories,
  setProducts,
} from "@/store/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import axios from "axios";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const { Footer, Content } = Layout;

const ProductLayout: React.FC = () => {
  const { products, categories } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length === 0) {
      axios.get("http://localhost:3000/products").then((res) => {
        dispatch(setProducts(res.data));
      });
    }
    if (categories.length === 0) {
      axios.get("http://localhost:3000/categories").then((res) => {
        dispatch(setCategories(res.data));
      });
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider width={300} style={{ padding: "16px" }}>
          <SidebarCategories />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default ProductLayout;
