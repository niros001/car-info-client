import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Button, Form, Input} from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(315deg, rgba(22,0,144,1) 0%, rgba(79,0,152,1) 100%);
  padding: 30px 12px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const StyledButton = styled(Button)`
  background-color: #24E2B1 !important;
  color: #160090 !important;
  border: none !important;
  font-size: 18px;
  font-weight: bold;
  padding: 20px 24px;
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ContactUs = ({t}) => {
  const [form] = Form.useForm();

  const onFinish = useCallback((values) => {
    console.log('Success:', values);
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <Container>
        <Title>{t('Contact us')}</Title>
        <Form
            name="contact-us"
            layout="vertical"
            autoComplete="off"
            style={{width: '100%', maxWidth: 400}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            form={form}
        >
          <input hidden autoComplete="false"/>
          <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: t('Full name require'),
                },
              ]}
          >
            <Input placeholder={t('Full name')} autoComplete="new-password" />
          </Form.Item>

          <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: t('Phone number require'),
                },
              ]}
          >
            <Input placeholder={t('Phone number')} autoComplete="new-password" />
          </Form.Item>

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
            <Input placeholder={'Email address'} autoComplete="new-password" />
          </Form.Item>

          <Form.Item>
            <StyledButton htmlType="submit" style={{width: '100%'}}>
              {t('Send')}
            </StyledButton>
          </Form.Item>
        </Form>
      </Container>
  )
}

export default ContactUs;
