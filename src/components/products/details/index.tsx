import { selectProducts, setFavorite } from "@/store/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { Product } from "@/utils/type/productsType";
import { ArrowLeftOutlined, EditOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { products } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProduct(
      products.filter((product: Product) => Number(product.id) === Number(id))[0],
    );
  }, [products, id]);

  return product ? (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex justify="space-between" align="center">
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            navigate("/products");
          }}
        ></Button>
        <Typography.Title level={3}>Product Detail</Typography.Title>
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => {
            navigate(`/products/${id}/edit`);
          }}
        ></Button>
      </Flex>
      <Flex gap={16} style={{ margin: "0 16px" }}>
        <img src={product?.image} alt={product?.name} />
        <Flex vertical gap={16}>
          <Typography.Title level={3}>{product?.name}</Typography.Title>
          <Typography.Text>{product?.price}</Typography.Text>
          <Typography.Text>{product?.description}</Typography.Text>
          {product?.favorite ? (
            <StarFilled style={{ fontSize: 24 }} onClick={() => {
              dispatch(setFavorite(product.id));
            }} />
          ) : (
            <StarOutlined style={{ fontSize: 24 }} onClick={() => {
              dispatch(setFavorite(product.id));
            }} />
          )}
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <div>Product not found</div>
  );
};

export default ProductDetail;
