import storage from "@/utils/storage";
import { AutoCenter, Button, Radio } from "antd-mobile"
import { Input,Form,Space } from "antd-mobile"
import { RadioValue } from "antd-mobile/es/components/radio";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Userinfo } from "types/index";


function CreateAccount() {
  const [category, setCategory] = useState<RadioValue>();
  const navigate = useNavigate() 
  const [form] = Form.useForm(); 
  const goon = async () => {
    try {
      const values:Userinfo = form.getFieldsValue();
      const category = values.category.toString()
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      console.log(values)
      const response = await axios.post('http://51.20.236.228:8000/register', formData);
      if (category === '1') {
        navigate('/login');
      } else if (category === '2') {
        storage.setItem('username', values.username);
        navigate('/addrestaurant');
      } else {
        console.error('Invalid category:', values.category);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const goback = () => {
    navigate(-1)
  };
  return (<div>
<Space direction="vertical" style={{ '--gap': '24px' , display: 'flex'}}>
          <Button color='default' fill='outline'onClick={goback}>
          back
          </Button>
          <caption style={{ fontSize: '28px', fontFamily: 'Montserrat, sans-serif'}}><AutoCenter style={{ whiteSpace: 'nowrap' }}>Create account</AutoCenter></caption>
          <div>
            <AutoCenter style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif', color:'gray'}} >Please enter your username, e-mail and passowrd to sign up</AutoCenter>  
            <Button color="warning" fill='none' style={{ fontSize: '14px', fontFamily: 'Montserrat, sans-serif'}} onClick={goon}>Already have an account?</Button>
          </div>
        <div>
          <Form layout='vertical' form={form}>
          <Form.Item label='username' name='username'>
            <Input placeholder='input username here' clearable />
          </Form.Item>
          <Form.Item label='e-mail' name='email'>
            <Input placeholder='input e-mail address here' clearable type='e-mail' />
          </Form.Item>
          <Form.Item label='phone number' name='telephone'>
            <Input placeholder='input phone number here'  />
          </Form.Item>
          <Form.Item label='identity' name='category'>
            <Radio.Group value={category} onChange={(value:RadioValue)=>{setCategory(value)}}>
              <Radio value='1'>customer</Radio>
              <Radio value='2'>restaurant</Radio>
            </Radio.Group>
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

export default CreateAccount