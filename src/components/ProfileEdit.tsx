import api from "@/api";
import storage from "@/utils/storage";
import { AutoCenter, Button } from "antd-mobile"
import { Input,Form,Space,Radio } from "antd-mobile"
import { useNavigate } from "react-router-dom";
import { Userinfo } from "types/index";
function Profile() {
  const navigate = useNavigate();
  const [form] = Form.useForm()
  
  const goback = async () => {
    try {
      const values:Userinfo = form.getFieldsValue();
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append('username', storage.getItem('username'))

      const response = await api.editUser(formData);
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.error('Error editing user:', error);
    }
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
          <Form layout='vertical' form={form}>
          <Form.Item label='USERNAME' name='username'>
            <Input placeholder={storage.getItem('username')} clearable readOnly/>
          </Form.Item>
          <Form.Item label='EMAIL' name='email'>
            <Input placeholder='input e-mail address here' clearable type='e-mail' />
          </Form.Item>
          <Form.Item label='PHONE NUMBER' name='telephone'>
            <Input placeholder='your number here' clearable type='phonenumber' />
          </Form.Item>
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