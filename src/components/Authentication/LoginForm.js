import React, {useCallback} from 'react';
import {Form, Input, Checkbox, Button} from 'antd';
import {useTranslation} from 'react-i18next';
import {MailOutlined, KeyOutlined} from '@ant-design/icons';

const LoginForm = ({loading, form, login, onResetPassword}) => {
  const {t} = useTranslation();
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
                message: t('Email require'),
              },
              {
                pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                message: t('Email address is not valid'),
              },
            ]}
        >
          <Input addonBefore={<MailOutlined />} placeholder={t('Email address')} autoComplete="new-password" />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: t('Password require'),
              }
            ]}
        >
          <Input.Password addonBefore={<KeyOutlined />} placeholder={t('Password')} autoComplete="new-password" />
        </Form.Item>

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Form.Item
              name="remember"
              valuePropName="checked"
          >
            <Checkbox>{t('Remember me')}</Checkbox>
          </Form.Item>
          <Button type="link" onClick={onResetPassword}>
            {t('Reset password')}
          </Button>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{width: '100%'}}>
            {t('LOGIN')}
          </Button>
        </Form.Item>
      </Form>
  )
}

export default LoginForm;
