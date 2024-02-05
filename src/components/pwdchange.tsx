import { Button } from "antd-mobile"
import { Input,Form,Space,Radio } from "antd-mobile"
import { useNavigate } from "react-router-dom";

 
function Pwdchange() {
    const navigate = useNavigate()
    const goon = () => {
        navigate('/me')
      };
    const goback = () => {
        navigate(-1)
      }
  return (<div>
<Space direction="vertical" style={{ '--gap': '24px' , display: 'flex'}}>

        <div>
          <Form layout='vertical'>
          <Form.Item label='old password' name='password' >
            <Input placeholder='current password' clearable readOnly/>
          </Form.Item>
          <Form.Item label='new password' name='newpassword' >
            <Input placeholder='new password here' clearable />
          </Form.Item>
          <Form.Item label='confirm password' name='confirmpassword1'>
            <Input placeholder='confirm new password' clearable />
          </Form.Item>
        </Form>
        </div>

        <Space direction="horizontal">
            <div>
            <Button className="button" color='primary' size='middle' onClick={goback}>
              Cancel
            </Button>
            <Button className="button" color='warning' size='middle' onClick={goon}>
              Save
            </Button>
            </div>
        </Space>
</Space>

        
  </div>)
}

export default Pwdchange
