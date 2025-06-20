import SearchBoxInput from "@/components/shared/ui/filter/SearchBoxInput";
import { deleteUser, filterUsers, selectUsers } from "@/store/userSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { User } from "@/utils/type/userType";
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Space, Table, Typography, type TableProps } from "antd";
import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const Users: React.FC = () => {
  const { usersTemp } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUserSearch = useCallback((searchTerm: string) => {
    dispatch(filterUsers({ searchTerm }));
  }, [dispatch]);

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
      fixed: 'right',
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
      <Flex vertical gap={16}>
        <Typography.Title level={3}>Users</Typography.Title>
        <Flex gap={32} justify="space-between">
          <Button type="primary" title="Add User" icon={<PlusOutlined />} onClick={() => {
            navigate("/users/add");
          }} />
          <SearchBoxInput onSearch={handleUserSearch} placeholder="Search users" />
        </Flex>
      </Flex>
      <Flex
        gap={16}
        style={{ flex: 1, width: "100%" }}
      >
        <Table<User>
          pagination={{ hideOnSinglePage: true }}
          bordered
          columns={columns}
          scroll={{ x: 'max-content' }}
          style={{ width: "100%" }}
          dataSource={usersTemp.map((user: User) => ({
            key: user.id,
            ...user,
          }))} />
      </Flex>
    </Flex>
  );
};

export default Users;
