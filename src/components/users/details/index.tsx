import { selectUsers } from "@/store/userSlice";
import { useAppSelector } from "@/utils/store/hooks";
import type { User } from "@/utils/type/userType";
import { ArrowLeftOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Descriptions, Flex, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetail: React.FC = () => {
  const { users } = useAppSelector(selectUsers);
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    setUser(
      users.filter((user: User) => Number(user.id) === Number(id)),
    );
  }, [users, id]);

  return user.length > 0 ? (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex vertical gap={16}>
        <Typography.Title level={3}>User Detail</Typography.Title>
        <Flex gap={32} justify="space-between">
          <Button
            type="primary"
            icon={<ArrowLeftOutlined />}
            onClick={() => {
              navigate("/users");
            }}
          ></Button>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              navigate(`/users/${id}/edit`);
            }}
          ></Button>
        </Flex>
      </Flex>
      <Flex gap={16} style={{ margin: "0 16px" }}>
        <Flex vertical gap={16}>
          <Descriptions title=" " items={[{
            label: 'FullName',
            span: 3,
            children: user[0].fullName,
          }, {
            label: 'Name',
            span: 3,
            children: user[0].name,
          }, {
            label: 'Surname',
            span: 3,
            children: user[0].surname,
          }, {
            label: 'Email',
            span: 3,
            children: user[0].email,
          }, {
            label: 'Phone',
            span: 3,
            children: user[0].phone,
          }]} />
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <div>User not found</div>
  );
};

export default UserDetail;
