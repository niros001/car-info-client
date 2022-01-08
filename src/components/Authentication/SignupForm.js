import React, {useCallback} from 'react';
import {Form, Input, Button} from 'antd';

const SignupForm = ({loading, form, signup}) => {
  const onFinish = useCallback((values) => {
    signup(values);
  }, [signup]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <Form
          name="signup"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
      >
        <Form.Item
            label="Full name"
            name="fullName"
        >
          <Input placeholder="Full name" autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
        >
          <Input placeholder="Email address" autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: 'Min 8 chars, at least 1 letter and 1 number'
              }
            ]}
        >
          <Input.Password placeholder="Password" autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            label="Confirm password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: 'Please input your confirm password!',
              },
              {
                validator: (rule, value, callback) => {
                  if (value && (form.getFieldValue('password') !== value)) {
                    return callback('Passwords do not match');
                  }
                  return callback();
                },
              }
            ]}
        >
          <Input.Password placeholder="Confirm password" autoComplete="new-password" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" loading={loading} style={{width: '100%'}}>
            SIGNUP
          </Button>
        </Form.Item>
      </Form>
  )
}

export default SignupForm;
