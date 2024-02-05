import { Button, Form, Input, Space } from 'antd-mobile'
import api from '@/api'
import storage from '@/utils/storage'
import { useStore } from '@/store'
import { User } from 'types/index'
import { useNavigate } from 'react-router-dom'
import './login.scss'
function Login() {
  const [form] = Form.useForm()

  const { updateUserInfo, updateToken, token } = useStore()

  const navigate = useNavigate(); 
  const onSubmit = async () => {
    try {
      const values = form.getFieldsValue();
      const result = await api.login(values);
      storage.setItem('token', result.token);
      updateUserInfo(result);
      updateToken(result.token);
      navigate('/home'); 
    } catch (error) {
      console.error('Login fail!', error);
    }
  };

  const onLogout = () => {
    storage.clearItem('token')
    updateUserInfo({} as User)
    updateToken('')
  }

  const createAccount = () => {
    navigate('/account')
  }

  return (
    <>
      {token ? (
        <>
          <Space direction="vertical">
            {/* <div> 已登录</div> */}
            <Button
              block
              type="submit"
              color="danger"
              onClick={onLogout}
              size="large"
            >
              Logout
            </Button>
          </Space>
        </>
      ) : (
        <div className="login-background-container">
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
export default Login