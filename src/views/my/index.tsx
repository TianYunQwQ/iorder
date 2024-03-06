import { Button, Form, Input, Space, List, Switch } from 'antd-mobile'
import api from '@/api'
import storage from '@/utils/storage'
import { useStore, useUserStore } from '@/store'
import { User, Userinfo } from 'types/index'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
// import Profile from '@/components/ProfileEdit'

function PersonalCenter() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { userinfo, setUserinfo } = useUserStore()

  const onSubmit = async () => {
    try {
      const values = form.getFieldsValue();
      console.log(values)
      const result = await api.login(values);
      storage.setItem('token', result.token);
      storage.setItem('username', result.username);
      console.log(result)
      setUserinfo(result);
      if (result.category === 1) {
        navigate('/me');
      } else if (result.category === 2) {
        navigate('/restaurant/me');
      } else {
        console.error('Invalid category:', result.category);
      }
    } catch (error) {
      console.error('Login fail!', error);
    }
  };

  // 退出
  const onLogout = () => {
    storage.clearItem('token')
    storage.clearItem('username')
    setUserinfo({} as Userinfo)
  }

  const editInfo = () => {
    navigate('/profile')
  }
  const changePsw = () => {
    navigate('/passward')
  }

  return (
    <>
      {storage.getItem('token') ? (
        <>
          <Space direction="vertical" style={{ width: '100%' }}>
            {/* <Profile></Profile> */}
            <List header="Profile" >
              <List.Item title='USERNAME'>{userinfo.username}</List.Item>
              <List.Item title='EMAIL ADDRESS'>{userinfo.email}</List.Item>
              <List.Item title='PHONE NUMBER'>{userinfo.telephone}</List.Item>
              <List.Item title='PASSWARD' 
              extra={<Button color='warning' fill='none' onClick={changePsw}>
                Change
                </Button>}>********</List.Item>
              {/* <List.Item title='LANGUAGE'>
              <Switch uncheckedText='ENGLISH' checkedText='SVENSKA' />
              </List.Item> */}
            </List>
            <Button 
              color='warning' 
              fill='none' 
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
              onClick={editInfo}
            >
              Edit Information
            </Button>
            <Button
              block
              type="submit"
              color="warning"
              onClick={onLogout}
              size="large"
            >
              LOGOUT
            </Button>
          </Space>
        </>
      ) : (
        <div style={{ width: '100%' }}>
        <Form
          form={form}
          initialValues={{
            username: 'admin',
            password: '123456',
          }}
          layout="horizontal"
          mode='card'
          footer={
            <><Button
              block
              loading="auto"
              type="submit"
              color="primary"
              shape='rounded'
              onClick={onSubmit}
              size="small"
              style={{ margin: '20px 0'}}
            >
              Login
            </Button></>
          }
        >
          <Form.Header />
          <Form.Item
            // label="Username"
            name="username"
            
          >
            <Input placeholder="please enter username" clearable />
          </Form.Item>
          <Form.Item
            // label="password"
            name="password"
            
          >
            <Input placeholder="please enter password" clearable type="password" />
          </Form.Item>
        </Form>
        </div>
      )}
    </>
  )
}
export default PersonalCenter
