import {
  Form,
  Input,
  Button,
} from 'antd';
import { useDispatch } from 'react-redux';
import { RequestSignupAC, userState } from '@store/actions/authAC';

export function SignupForm() {
  const dispatch = useDispatch();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const [form] = Form.useForm();

  const onFinish = (values: userState) => {
    console.log('Received values of form: ', values);
    const newUser: userState = {
      email: values.email,
      password: values.password,
      userName: values.userName,
    };
    dispatch(RequestSignupAC(newUser));
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name='register'
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name='email'
        label='E-mail'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='confirm'
        label='Confirm Password'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name='userName'
        label={
          <span>
            Username&nbsp;
          </span>
        }
        rules={[{ required: true, message: 'Please input your Username!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type='primary' htmlType='submit'>
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
}