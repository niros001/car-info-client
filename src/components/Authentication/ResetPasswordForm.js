import React, {useCallback, useState} from 'react';
import {Form, Input, Button, notification, Alert} from 'antd';
import {useTranslation} from 'react-i18next';
import {MailOutlined, ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';
import {resetPassword} from '../../services/authApi';

const ResetPasswordForm = ({form, onBack}) => {
  const {t, i18n} = useTranslation();
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
            message: `${t('Something went wrong')}...`,
            description: error.message,
          })
        })
  }, [t]);

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

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} style={{width: '100%'}}>
            {t('Reset password').toUpperCase()}
          </Button>
        </Form.Item>

        <Form.Item>
          <Button type="default" onClick={onBack} icon={i18n.dir() === 'rtl' ? <ArrowRightOutlined /> : <ArrowLeftOutlined />} style={{width: '100%'}}>
            {t('BACK')}
          </Button>
        </Form.Item>
      </Form>
  )

  return (
      <Alert
          message={t('Reset password')}
          description={t('Reset password - Alert description')}
          type="success"
          showIcon
      />
  )
}

export default ResetPasswordForm;
