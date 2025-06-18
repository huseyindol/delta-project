import { selectProducts, updateProduct } from "@/store/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { Product } from "@/utils/type/productsType";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Select, Typography } from "antd";
import axios, { type AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductEdit: React.FC = () => {
  const { products, categories } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (products.length > 0) {
      setProduct(
        products.filter((product) => Number(product.id) === Number(id))[0],
      );
    } else {
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res: AxiosResponse<Product>) => {
          setProduct(res.data);
        });
    }
  }, [products, id]);

  const handleSubmit = (values: Product) => {
    dispatch(updateProduct(values));
  };

  return product ? (
    <Flex vertical gap={16} style={{ padding: "16px" }}>
      <Flex gap={16} align="baseline">
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            navigate(`/products/${id}`);
          }}
        ></Button>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Product Edit
        </Typography.Title>
      </Flex>
      <Flex gap={16} style={{ margin: "0 16px" }}>
        <Form
          labelCol={{ flex: "180px" }}
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          onFinish={handleSubmit}
          initialValues={product}
        >
          <Form.Item
            label="Product Image"
            name="image"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter product image"
              value={product?.image}
              defaultValue={product?.image}
            />
          </Form.Item>

          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter product name"
              value={product?.name}
              defaultValue={product?.name}
            />
          </Form.Item>

          <Form.Item
            label="Product Price"
            name="price"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter product price"
              value={product?.price}
              defaultValue={product?.price}
            />
          </Form.Item>

          <Form.Item
            label="Product Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              placeholder="Enter product description"
              value={product?.description}
              defaultValue={product?.description}
            />
          </Form.Item>

          <Form.Item
            name="categoryId"
            label="Product Category"
            hasFeedback
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select
              placeholder="Select a category"
              value={product?.categoryId}
              defaultValue={product?.categoryId}
            >
              {categories.map((category) => (
                <Select.Option value={category.id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  ) : (
    <div>Product not found</div>
  );
};

export default ProductEdit;
