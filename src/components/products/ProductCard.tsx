import type { Product } from "@/utils/type/productsType";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Card, Col } from "antd";
import { Meta } from "antd/es/list/Item";
import React from "react";
import { Link } from "react-router";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Col span={6}>
      <Link to={`/products/${product.id}`} style={{ display: "inline-flex" }} title={product.name}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt={product.name}
              src={product.image}
              style={{ width: "100%", height: "150px", objectFit: "contain" }}
            />
          }
        >
          <Meta
            title={product.name}
            description={product.price}
            avatar={product.favorite ? <StarFilled /> : <StarOutlined />}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          />
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
