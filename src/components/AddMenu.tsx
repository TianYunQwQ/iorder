
import { Form, Input, Button, Checkbox} from "antd-mobile";
import { postMenu } from "@/api/module/menu";
import { useParams } from "react-router-dom";


export default () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const onSubmit = async () => {
    try {
      const values = form.getFieldsValue();
      values.id = parseInt(id ?? '');
      console.log(id)
      values.price = parseFloat(values.price);
      values.vegen = !!values.vegen;
      const response = await postMenu(values)
      console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Error uploading:", error);
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
        <Form.Item name="name" label="name" required>
          <Input placeholder="Enter the name" />
        </Form.Item>
        <Form.Item name="price" label="price" required>
          <Input type="number" placeholder="Enter the price" />
        </Form.Item>
        <Form.Item name="description" label="description">
          <Input placeholder="Enter the description" />
        </Form.Item>
        <Form.Item name="vegen" label="vegenChoose" required>
          <Checkbox>For vegen?</Checkbox>
        </Form.Item>
      </Form>
    </>
  );
};