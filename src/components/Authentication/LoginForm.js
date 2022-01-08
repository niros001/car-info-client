import React, {useCallback} from 'react';
import {Form, Input, Checkbox, Button} from 'antd';
import {MailOutlined, KeyOutlined} from '@ant-design/icons';

const LoginForm = ({loading, form, login, onResetPassword}) => {
  const onFinish = useCallback((values) => {
    login(values);
  }, [login]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
      <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          form={form}
      >
        <input hidden autoComplete="false"/>
        <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                message: 'Email address is not valid',
              },
            ]}
        >
          <Input addonBefore={<MailOutlined />} placeholder="Email address" autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              }
            ]}
        >
          <Input.Password addonBefore={<KeyOutlined />} placeholder="Password" autoComplete="new-password" />
        </Form.Item>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Form.Item
              name="remember"
              valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button type="link" onClick={onResetPassword}>
            Reset password
          </Button>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{width: '100%'}}>
            LOGIN
          </Button>
        </Form.Item>
      </Form>
  )
}

export default LoginForm;
