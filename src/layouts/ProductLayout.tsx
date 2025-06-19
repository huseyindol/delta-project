import { getCategories } from "@/services/cateoryServices";
import { getProducts } from "@/services/productServices";
import {
  selectProducts,
  setCategories,
  setProducts,
} from "@/store/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { Category, Product } from "@/utils/type/productsType";
import { Layout } from "antd";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const ProductLayout: React.FC = () => {
  const { products, categories } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (products.length === 0) {
      getProducts().then((res) => {
        dispatch(setProducts(res as Product[]));
      });
    }
    if (categories.length === 0) {
      getCategories().then((res) => {
        dispatch(setCategories(res as Category[]));
      });
    }
  }, []);

  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default ProductLayout;
