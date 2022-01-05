import React, {useCallback, useState} from 'react';
import {Form, Input, Button, notification, Alert} from 'antd';
import {MailOutlined, ArrowLeftOutlined} from '@ant-design/icons';
import {resetPassword} from '../../services/authApi';

const ResetPasswordForm = ({form, onBack}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const onFinish = useCallback((values) => {
    setLoading(true);
    resetPassword(values)
        .then(() => {
          setLoading(false);
          setSuccess(true);
        })
        .catch((error) => {
          setLoading(false);
          notification.error({
            message: 'Something went wrong..',
            description: error.message,
          })
        })
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (!success) return (
      <Form
          name="reset-password"
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

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{width: '100%'}}>
            RESET PASSWORD
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="default" onClick={onBack} icon={<ArrowLeftOutlined />} style={{width: '100%'}}>
            BACK
          </Button>
        </Form.Item>
      </Form>
  )

  return (
      <Alert
          message="Reset Password"
          description="A request to reset your password has been sent to your email address. Please check your inbox to continue the process."
          type="success"
          showIcon
      />
  )
}

export default ResetPasswordForm;
