import ProductCard from "@/components/products/ProductCard";
import SearchBoxInput from "@/components/shared/ui/input/SearchBoxInput";
import { selectProducts } from "@/store/product/productSlice";
import { useAppSelector } from "@/utils/store/hooks";
import { Flex, Row, Typography } from "antd";
import React from "react";

const Products: React.FC = () => {
  const { tempProducts } = useAppSelector(selectProducts);

  return (
    <Flex vertical gap={16} style={{ padding: "16px" }}>
      <Flex justify="space-between" align="center">
        <Typography.Title level={3}>Products</Typography.Title>
        <SearchBoxInput />
      </Flex>
      <Flex
        gap={16}
        justify="center"
        align="center"
        style={{ margin: "0 16px" }}
      >
        <Row gutter={16} style={{ rowGap: 32, flex: 1 }}>
          {tempProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </Flex>
    </Flex>
  );
};

export default Products;
