import { AutoCenter, Button } from "antd-mobile"
import { Input,Form,Space } from "antd-mobile"

function Todo() {
  const goon = () => {
    window.location.href='http://localhost:3000/profile';
  };

  const goback = () => {
    window.location.href='http://localhost:3000/';
  };
  return (<div>
<Space direction="vertical" style={{ '--gap': '24px' , display: 'flex'}}>
          <Button color='default' fill='outline'onClick={goback}>
          back
          </Button>
          <caption style={{ fontSize: '28px', fontFamily: 'Montserrat, sans-serif'}}><AutoCenter style={{ whiteSpace: 'nowrap' }}>Create account</AutoCenter></caption>
          <div>
            <AutoCenter style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', color:'gray'}} >Please enter your username, e-mail and passowrd to sign up</AutoCenter>  
            <Button color="warning" fill='none' style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}}>Already have an account?</Button>
          </div>
        <div>
          <Form layout='vertical'>
          <Form.Item label='username' name='username'>
            <Input placeholder='input username here' clearable />
          </Form.Item>
          <Form.Item label='e-mail' name='email'>
            <Input placeholder='input e-mail address here' clearable type='e-mail' />
          </Form.Item>
          <Form.Item label=' password' name='password'>
            <Input placeholder='input password here' clearable type='password' />
          </Form.Item>
        </Form>
    </div>
  <Button className="button" color='warning' size='middle' onClick={goon}>
          Sign up
        </Button>
</Space>

        
  </div>)
}

export default Todo