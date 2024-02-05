import { Button, Form, Input, Space, List, Switch } from 'antd-mobile'
import api from '@/api'
import storage from '@/utils/storage'
import { useStore } from '@/store'
import { User } from 'types/index'
import { useNavigate } from 'react-router-dom';
import Profile from '@/components/ProfileEdit'

function PersonalCenter() {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { updateUserInfo, updateToken, token, userInfo } = useStore()

  // 登录
  const onSubmit = async () => {
    const values = form.getFieldsValue()
    // 请求接口
    const result = await api.login(values)
    storage.setItem('token', result.token)
    // 更新状态
    updateUserInfo(result)
    updateToken(result.token)
  }

  // 退出
  const onLogout = () => {
    storage.clearItem('token')
    updateUserInfo({} as User)
    updateToken('')
  }

  const editInfo = () => {
    navigate('/profile')
  }
  const changePsw = () => {
    navigate('/passward')
  }

  return (
    <>
      {token ? (
        <>
          <Space direction="vertical" style={{ width: '100%' }}>
            {/* <Profile></Profile> */}
            <List header="Profile" >
              <List.Item title='FULL NAME'>{userInfo.userName}</List.Item>
              <List.Item title='EMAIL ADDRESS'>{userInfo.userEmail}</List.Item>
              <List.Item title='PHONE NUMBER'>{userInfo.userId}</List.Item>
              <List.Item title='PASSWARD' 
              extra={<Button color='warning' fill='none' onClick={changePsw}>
                Change
                </Button>}>********</List.Item>
              <List.Item title='LANGUAGE'>
              <Switch uncheckedText='ENGLISH' checkedText='SVENSKA' />
              </List.Item>
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
            userName: 'admin',
            userPwd: '123456',
          }}
          layout="horizontal"
          mode='card'
          footer={
            <Button
              block
              loading="auto"
              type="submit"
              color="primary"
              shape='rounded'
              onClick={onSubmit}
              size="small"
            >
              Submit
            </Button>
          }
        >
          <Form.Header />
          <Form.Item
            // label="Username"
            name="userName"
            
          >
            <Input placeholder="please enter username" clearable />
          </Form.Item>
          <Form.Item
            // label="password"
            name="userPwd"
            
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
