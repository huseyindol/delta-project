import { getUsers } from '@/services/userServices';
import { selectUsers, setUsers } from '@/store/userSlice';
import { useAppDispatch, useAppSelector } from '@/utils/store/hooks';
import type { User } from '@/utils/type/userType';
import { Layout } from 'antd';
import type React from 'react';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const UserLayout: React.FC = () => {
  const { users } = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (users.length === 0) {
      getUsers().then((res) => {
        dispatch(setUsers(res as User[]));
      });
    }
  }, []);

  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default UserLayout