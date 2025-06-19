import { filterProducts, selectProducts } from "@/store/productSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { Category } from "@/utils/type/productsType";
import { DownOutlined } from "@ant-design/icons";
import { Checkbox, Dropdown, Flex, Space, Typography, type CheckboxProps } from "antd";


const FilterCheckbox = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(selectProducts);
  const onChange: CheckboxProps["onChange"] = (e) => {
    dispatch(
      filterProducts({ categoryId: e.target.value, searchTerm: "default" }),
    );
  };

  return (
    <Dropdown
      popupRender={() => (
        <Flex vertical gap={16} style={{ backgroundColor: "black", padding: "16px", borderRadius: "8px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)" }}>
          {categories.map((category: Category) => (
            <Flex key={category.id} justify="space-between" align="center">
              <Checkbox onChange={(e) => onChange(e)} value={category.id}>
                <Typography.Text>{category.name}</Typography.Text>
              </Checkbox>
            </Flex>
          ))}
        </Flex>
      )}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Kategoriler
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default FilterCheckbox