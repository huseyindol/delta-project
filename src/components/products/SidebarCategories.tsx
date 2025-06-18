import { filterProducts, selectProducts } from "@/store/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import { Checkbox, Divider, Flex, Typography, type CheckboxProps } from "antd";
import React, { useEffect } from "react";

const SidebarCategories: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categories, filterCategoryId } = useAppSelector(selectProducts);

  const onChange: CheckboxProps["onChange"] = (e) => {
    dispatch(
      filterProducts({ categoryId: e.target.value, searchTerm: "default" }),
    );
  };

  useEffect(() => {
    console.log("filterCategoryId :>> ", filterCategoryId);
  }, [filterCategoryId]);

  return (
    <>
      <Typography.Title level={5}>Kategoriler</Typography.Title>
      <Divider />
      {categories.map((category) => (
        <Flex key={category.id} justify="space-between" align="center">
          <Checkbox onChange={(e) => onChange(e)} value={category.id}>
            <Typography.Text>{category.name}</Typography.Text>
          </Checkbox>
        </Flex>
      ))}
    </>
  );
};

export default SidebarCategories;
