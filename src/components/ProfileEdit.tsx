import { AutoCenter, Button } from "antd-mobile"
import { Input,Form,Space,Radio } from "antd-mobile"
import { useNavigate } from "react-router-dom";
function Profile() {
  // const goon = () => {
  //   window.location.href='http://localhost:3000/pwdchange';
  // };

  const navigate = useNavigate();
  const goback = () => {
    navigate(-1)
  };

  return (<div>
<Space direction="vertical" style={{ '--gap': '24px' , display: 'flex'}}>
          <Button color='warning' fill='none' onClick={goback}>
            Back
          </Button>
          <caption style={{ fontSize: '28px', fontFamily: 'Montserrat, sans-serif'}}><AutoCenter style={{ whiteSpace: 'nowrap' }}>Edit profile</AutoCenter></caption>
          <div>
            <AutoCenter style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', color:'gray'}} >You can update your profile here</AutoCenter>  
          </div>
        <div>
          <Form layout='vertical'>
          <Form.Item label='Fullname' name='fullname'>
            <Input placeholder='input username here' clearable />
          </Form.Item>
          <Form.Item label='e-mail' name='email'>
            <Input placeholder='input e-mail address here' clearable type='e-mail' />
          </Form.Item>
          <Form.Item label='phonenumber' name='phonenumber'>
            <Input placeholder='your number here' clearable type='phonenumber' />
          </Form.Item>
          {/* <Form.Item label=' password' name='password' extra={<Button color="warning" fill="none" onClick={goon}>change</Button>}>
            <Input placeholder='password here' clearable type='password' readOnly/>
            
          </Form.Item> */}
        </Form>
        </div>
        <caption style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}><AutoCenter style={{ whiteSpace: 'nowrap' }}>Language</AutoCenter></caption>
        <div>
        <Radio.Group defaultValue='1'>
          <Space direction='vertical'>
            <Radio value='1' style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}}>English</Radio>
            <Radio value='2' style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}}>Swedish</Radio>
          </Space>
        </Radio.Group>
    </div>
  <Button className="button" color='warning' size='middle' onClick={goback}>
          Save
        </Button>
</Space>

        
  </div>)
}

export default Profile