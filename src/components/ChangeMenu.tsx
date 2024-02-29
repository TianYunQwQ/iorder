import { Form, Input, Button, Checkbox } from "antd-mobile";
import { changeMenu } from "@/api/module/menu";
import { ChangeEvent, useState } from "react";
import { Menu } from "types/index";
import storage from "@/utils/storage";
import { useNavigate, useParams } from "react-router-dom";


export default () => {
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const {dish_index} = useParams()
  const navigate = useNavigate()
  const onSubmit = async () => {
    try {
      const values:Menu = form.getFieldsValue();
      values.dish_index = parseInt(dish_index??'')
      values.vegan = !!values.vegan;
      const formData = new FormData(); 
      formData.append('image', imageFile!); 
      Object.entries(values).forEach(([key, value]) => { 
        formData.append(key, value);
      });
      formData.append('username',storage.getItem('username'))
      const response = await changeMenu(formData)
      console.log("Upload successful:", response.data);
      navigate(-1)
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 使用可选链操作符
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
        <Form.Header>Menu</Form.Header>
    
        <Form.Item name="imageFile" label="Image" required>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </Form.Item>
        <Form.Item name="dish_name" label="name" required>
          <Input placeholder="Enter the name" />
        </Form.Item>
        <Form.Item name="price" label="price" required>
          <Input type="number" placeholder="Enter the price" />
        </Form.Item>
        <Form.Item name="description" label="description">
          <Input placeholder="Enter the description" />
        </Form.Item>
        <Form.Item name="vegan" label="veganChoose" required>
          <Checkbox>For vegan?</Checkbox>
        </Form.Item>
      </Form>
    </>
  );
};