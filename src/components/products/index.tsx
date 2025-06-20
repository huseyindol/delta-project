import FilterSelect from "@/components/products/ui/filter/FilterCheckbox";
import SearchBoxInput from "@/components/shared/ui/filter/SearchBoxInput";
import { deleteProduct, filterProducts, selectProducts } from "@/store/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { Category, Product } from "@/utils/type/productsType";
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { Avatar, Button, Flex, Space, Table, Typography, type TableProps } from "antd";
import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Products: React.FC = () => {
  const { tempProducts, categories } = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleProductSearch = useCallback((searchTerm: string) => {
    dispatch(filterProducts({ searchTerm }));
  }, [dispatch]);

  const columns: TableProps<Product>['columns'] = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (text) => <Avatar src={text} size={48} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'categoryId',
      key: 'categoryId',
      render: (text) => <span>{categories.find((category: Category) => Number(category.id) === Number(text))?.name}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      render: (record) => (
        <Space size="middle">
          <Link to={`/products/${record.id}`} style={{ color: "lightblue" }}><EyeOutlined /></Link>
          <Link to={`/products/${record.id}/edit`} style={{ color: "lightcoral" }}><EditOutlined /></Link>
          <span style={{ cursor: "pointer", color: "red" }} onClick={() => {
            dispatch(deleteProduct(record.id));
          }}><DeleteOutlined /></span>
        </Space>
      ),
    },
  ];

  return (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex vertical gap={16}>
        <Typography.Title level={3}>Products</Typography.Title>
        <Flex gap={32} justify="space-between">
          <Button type="primary" title="Add Product" icon={<PlusOutlined />} onClick={() => {
            navigate("/products/add");
          }} />
          <Flex gap={16} align="baseline">
            <FilterSelect />
            <SearchBoxInput onSearch={handleProductSearch} placeholder="Search products" />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap={16}
        style={{ flex: 1, width: "100%" }}
      >
        <Table<Product>
          pagination={{ hideOnSinglePage: true }}
          bordered
          columns={columns}
          scroll={{ x: 'max-content' }}
          style={{ width: "100%" }}
          dataSource={tempProducts.map((product: Product) => ({
            key: product.id,
            ...product,
          }))} />
      </Flex>
    </Flex>
  );
};

export default Products;
