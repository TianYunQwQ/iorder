import { Button, Form, Input, Space } from 'antd-mobile'
import api from '@/api'
import storage from '@/utils/storage'
import { useStore, useUserStore } from '@/store'
import { User } from 'types/index'
import { useNavigate } from 'react-router-dom'
import './login.scss'
function Login() {
  const [form] = Form.useForm()

  const { updateUserInfo, updateToken, token } = useStore()
  const { userinfo, setUserinfo } = useUserStore()

  const navigate = useNavigate(); 
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
        navigate('/home');
      } else if (result.category === 2) {
        navigate('/restaurant/resmenu');
      } else {
        console.error('Invalid category:', result.category);
      }
    } catch (error) {
      console.error('Login fail!', error);
    }
  };


  const onLogout = () => {
    storage.clearItem('token')
    updateUserInfo({} as User)
    updateToken('')
  }

  // const createAccount = () => {
  //   navigate('/account')
  // }

  return (
    <>
      {storage.getItem('token') ? (
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
export default Login