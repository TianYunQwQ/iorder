import { Button, Form, Input, Space } from 'antd-mobile'
import api from '@/api'
import storage from '@/utils/storage'
import { useUserStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import './login.scss'
import { useEffect } from 'react'
function Login() {
  const [form] = Form.useForm()

  const { userinfo, setUserinfo } = useUserStore()
  useEffect(() => {
    // 当组件加载时清除token
    storage.clearItem('token');
  }, [])

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

  return (
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
        <Button
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
        </Button>
      }
    >
      <Form.Header />
      <Form.Item
        name="username"
      >
        <Input placeholder="please enter username" clearable />
      </Form.Item>
      <Form.Item
        name="password"
      >
        <Input placeholder="please enter password" clearable type="password" />
      </Form.Item>
    </Form>
  </div>
  )
}
export default Login