import { Form, Input, Button } from "antd-mobile";
import { ChangeEvent, useState } from "react";
import { Shop } from "types/index";
import { postRes } from "@/api/module/restaurant";
import storage from '@/utils/storage'
import { useNavigate } from "react-router-dom";

function AddRestaurant() {
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const navigate = useNavigate()
  const onSubmit = async () => {
    try {
      const values:Shop = form.getFieldsValue();
      values.username = storage.getItem('username')
      console.log(values.username)
      const formData = new FormData(); 
      formData.append('image', imageFile!); 
      Object.entries(values).forEach(([key, value]) => { 
        formData.append(key, value);
      });
      const response = await postRes(formData)
      storage.clearItem('token')
      navigate('/login')
      console.log("Upload successful:", response.data);
      
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      setImageFile(file);
    }
  };
  return (
    <>
      <Form
        form={form}
        footer={
          <Button block color="primary" onClick={onSubmit} size="large">
            Submit
          </Button>
        }
      >
        <Form.Header ><span style={{ fontWeight: 'bold', fontStyle: 'italic', color: 'black', fontSize: '20px' }}>My Restaurant</span></Form.Header>
    
        <Form.Item name="imageFile" label="Image" required>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </Form.Item>
        <Form.Item name="shop_name" label="name" required>
          <Input placeholder="Enter the name" />
        </Form.Item>
        <Form.Item name="description" label="description">
          <Input placeholder="Enter the description" />
        </Form.Item>
      </Form>
    </>
  );
};
export default AddRestaurant