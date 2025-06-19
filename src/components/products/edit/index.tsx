import { getProductById } from "@/services/productServices";
import { selectProducts, updateProduct } from "@/store/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { Category, Product, ProductFormValues } from "@/utils/type/productsType";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Select, Typography } from "antd";
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
        products.filter((product: Product) => Number(product.id) === Number(id))[0],
      );
    } else {
      getProductById(id as string).then((res) => {
        setProduct(res as Product);
      });
    }
  }, [products, id]);

  const handleSubmit = (values: ProductFormValues) => {
    dispatch(updateProduct({
      ...values,
      id: Number(id),
    }));
    navigate(-1);
  };

  const initialFormValues = product ? {
    ...product,
    categoryId: {
      label: categories.find((cat: Category) => Number(cat.id) === Number(product.categoryId))?.name,
      value: Number(product.categoryId)
    }
  } : {};

  return product ? (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex vertical gap={16}>
        <Typography.Title level={3}>Product Edit</Typography.Title>
        <Flex gap={32} justify="space-between">
          <Button
            type="primary"
            icon={<ArrowLeftOutlined />}
            onClick={() => {
              navigate(-1);
            }}
          ></Button>
        </Flex>
      </Flex>
      <Flex gap={16} style={{ margin: "0 16px" }}>
        <Form
          labelCol={{ flex: "180px" }}
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          onFinish={handleSubmit}
          initialValues={initialFormValues}
        >
          <Form.Item
            label="Product Image"
            name="image"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter product image"
            />
          </Form.Item>

          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter product name"
            />
          </Form.Item>

          <Form.Item
            label="Product Price"
            name="price"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter product price"
            />
          </Form.Item>

          <Form.Item
            label="Product Description"
            name="description"
            rules={[{ required: true }]}
          >
            <Input.TextArea
              placeholder="Enter product description"
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
              labelInValue
              value={product.categoryId}
            >
              {categories.map((category: Category) => (
                <Select.Option key={category.id} value={category.id}>
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
