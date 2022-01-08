import React, {useCallback, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Form, Input, Button, notification, Alert} from 'antd';
import styled from 'styled-components';
import {setPassword} from '../../services/authApi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SetPasswordForm = () => {
  const {token} = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const onFinish = useCallback((values) => {
    setLoading(true);
    setPassword(token, values)
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
  }, [token]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <Container>
        <h1>Set new password</h1>
        {!success && (
            <Form
                name="set-password"
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                style={{width: 320, border: '1px solid #d9d9d9', padding: 12}}
            >
              <input hidden autoComplete="false"/>
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
                <Button type="primary" htmlType="submit" loading={loading} style={{width: '100%'}}>
                  CONFIRM
                </Button>
              </Form.Item>
            </Form>
        )}
        {success && (
            <Alert
                message="Set Password"
                description="Password changed successfully, You can now login"
                type="success"
                showIcon
            />
        )}
      </Container>
  )
}

export default SetPasswordForm;
