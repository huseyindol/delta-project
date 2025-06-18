import { selectProducts, setFavorite } from "@/store/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { Product } from "@/utils/type/productsType";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
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
      products.filter((product) => Number(product.id) === Number(id))[0],
    );
  }, [products, id]);

  return product ? (
    <Flex vertical gap={16} style={{ padding: "16px" }}>
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
          <Button
            type="primary"
            onClick={() => {
              dispatch(setFavorite(product.id));
            }}
          >
            {product?.favorite ? "Remove from favorite" : "Add to favorite"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <div>Product not found</div>
  );
};

export default ProductDetail;
