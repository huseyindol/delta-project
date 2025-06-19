import { getUserById } from "@/services/userServices";
import { selectUsers, updateUser } from "@/store/userSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import type { User } from "@/utils/type/userType";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, InputNumber, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserEdit: React.FC = () => {
  const { users } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (users.length > 0) {
      setUser(
        users.filter((user: User) => Number(user.id) === Number(id))[0],
      );
    } else {
      getUserById(id as string).then((res) => {
        setUser(res as User);
      });
    }
  }, [users, id]);

  const handleSubmit = (values: User) => {
    dispatch(updateUser({
      ...values,
      id: Number(id),
    }));
    navigate(-1);
  };

  const initialFormValues = user ? {
    ...user,
  } : {};

  return user ? (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex gap={16} align="baseline">
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            navigate(-1);
          }}
        ></Button>
        <Typography.Title level={3} style={{ margin: 0 }}>
          User Edit
        </Typography.Title>
      </Flex>
      <Flex gap={16} style={{ margin: "0 16px" }}>
        <Form
          labelCol={{ flex: "140px" }}
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          onFinish={handleSubmit}
          initialValues={initialFormValues}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter user full name"
            />
          </Form.Item>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter user name"
            />
          </Form.Item>

          <Form.Item
            label="Surname"
            name="surname"
            rules={[{ required: true }]}
          >
            <Input
              placeholder="Enter user surname"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input
              placeholder="Enter user email"
            />
          </Form.Item>

          <Form.Item label="Phone" name="phone" validateTrigger={['onChange']}>
            <InputNumber
              type="number"
              controls={false}
              style={{ width: "100%" }}
              placeholder="Enter user phone"
            />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Update User
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  ) : (
    <div>User not found</div>
  );
};

export default UserEdit;
