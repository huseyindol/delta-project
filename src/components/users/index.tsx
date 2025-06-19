import SearchBoxInput from "@/components/users/ui/filter/SearchBoxInput";
import { deleteUser, selectUsers } from "@/store/userSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { User } from "@/utils/type/userType";
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Space, Table, Typography, type TableProps } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Users: React.FC = () => {
  const { usersTemp } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const columns: TableProps<User>['columns'] = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Link to={`/users/${record.id}`} style={{ color: "lightblue" }}><EyeOutlined /></Link>
          <Link to={`/users/${record.id}/edit`} style={{ color: "lightcoral" }}><EditOutlined /></Link>
          <span style={{ cursor: "pointer", color: "red" }} onClick={() => {
            dispatch(deleteUser(record.id));
          }}><DeleteOutlined /></span>
        </Space>
      ),
    },
  ];

  return (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex justify="space-between" align="center">
        <Typography.Title level={3}>Users</Typography.Title>
        <Flex gap={32} align="center">
          <Button type="primary" size="small" title="Add User" icon={<PlusOutlined />} onClick={() => {
            navigate("/users/add");
          }} />
          <SearchBoxInput />
        </Flex>
      </Flex>
      <Flex
        gap={16}
        style={{ flex: 1, width: "100%" }}
      >
        <Table<User> pagination={{ hideOnSinglePage: true }} columns={columns} dataSource={usersTemp.map((user: User) => ({
          key: user.id,
          ...user,
        }))} style={{ width: "100%" }} />
      </Flex>
    </Flex>
  );
};

export default Users;
