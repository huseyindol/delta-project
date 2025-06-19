import type { Product } from "@/utils/type/productsType";
import { Avatar, List, Skeleton } from "antd";
import React from "react";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <List.Item
      actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
    >
      <Skeleton avatar title={false} loading={false} active>
        <List.Item.Meta
          avatar={<Avatar src={product.image} />}
          title={<a href="https://ant.design">{product.name}</a>}
          description={product.price}
        />
        <div>{product.description}</div>
      </Skeleton>
    </List.Item>
  );
};

export default ProductCard;
