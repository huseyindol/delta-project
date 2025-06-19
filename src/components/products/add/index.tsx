import { addProduct, selectProducts } from '@/store/productSlice';
import { useAppDispatch, useAppSelector } from '@/utils/store/hooks';
import type { Category, ProductFormValues } from '@/utils/type/productsType';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Select, Typography } from 'antd';
import type React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(selectProducts);
  const handleSubmit = (values: ProductFormValues) => {
    console.log(values);
    dispatch(addProduct({
      ...values,
    }));
    navigate(-1);
  };
  return (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex vertical gap={16}>
        <Typography.Title level={3}>Product Add</Typography.Title>
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
  )
}

export default ProductAdd