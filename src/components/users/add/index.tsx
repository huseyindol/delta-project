import { addUser } from '@/store/userSlice';
import { useAppDispatch } from '@/utils/store/hooks';
import type { User } from '@/utils/type/userType';
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, InputNumber, Typography } from 'antd';
import type React from 'react';
import { useNavigate } from 'react-router-dom';

const UserAdd: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSubmit = (values: User) => {
    console.log(values);
    dispatch(addUser({
      ...values,
    }));
    navigate(-1);
  };
  return (
    <Flex vertical gap={16} style={{ flex: 1, width: "100%", padding: "16px" }}>
      <Flex gap={16} align="baseline">
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            navigate(-1);
          }}
        ></Button>
        <Typography.Title level={3} style={{ margin: 0 }}>User Add</Typography.Title>

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
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  )
}

export default UserAdd