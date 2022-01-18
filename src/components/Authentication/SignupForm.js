import React, {useCallback} from 'react';
import {Form, Input, Button} from 'antd';
import {useTranslation} from 'react-i18next';

const SignupForm = ({loading, form, signup}) => {
  const {t} = useTranslation();
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
            label={t('Full name')}
            name="fullName"
        >
          <Input placeholder={t('Full name')} autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            label={t('Email address')}
            name="email"
            rules={[
              {
                required: true,
                message: t('Email require'),
              },
            ]}
        >
          <Input placeholder={t('Email address')} autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            label={t('Password')}
            name="password"
            rules={[
              {
                required: true,
                message: t('Password require'),
              },
              {
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: t('Password conditions')
              }
            ]}
        >
          <Input.Password placeholder={t('Password')} autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            label={t('Confirm password')}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: t('Confirm password require'),
              },
              {
                validator: (rule, value, callback) => {
                  if (value && (form.getFieldValue('password') !== value)) {
                    return callback(t('Passwords do not match'));
                  }
                  return callback();
                },
              }
            ]}
        >
          <Input.Password placeholder={t('Confirm password')} autoComplete="new-password" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" loading={loading} style={{width: '100%'}}>
            {t('SIGNUP')}
          </Button>
        </Form.Item>
      </Form>
  )
}

export default SignupForm;
