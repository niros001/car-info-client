import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import {Button, Form, Input, notification, Alert} from 'antd';
import {Responsive, container} from '../common/styles';
import {contactUs} from '../../services/commonApi';

const Container = styled.div`
  ${container};
  border: 1px solid #707070;
  padding: 30px 12px;
  background: #1F2737;
`

const Content = styled(Responsive)`
  align-items: center;
  width: 100%;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 22px;
`

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border-radius: 75px;
    width: 300px;
  }
  .ant-form-item-control-input-content {
    margin: 0 16px;
  }
  @media(max-width: 540px) {
    display: unset;
    align-items: unset;
    justify-content: unset;
    input {
      border-radius: unset;
      width: 100%;
    }
    .ant-form-item-control-input-content {
      margin: unset;
    }
  }
`

const StyledInput = styled(Input)`
  height: 45px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #1F2737;
  ::placeholder {
    color: #1F2737;
  }
`

const StyledButton = styled(Button)`
  background-color: #555FDE !important;
  color: #FFFFFF !important;
  border: none !important;
  font-size: 20px !important;
  font-weight: bold !important;
  height: 45px;
  min-width: 120px;
  border-radius: 23px;
`

const ContactUs = ({t}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onFinish = useCallback((values) => {
    setLoading(true);
    contactUs(values)
        .then(() => {
          setLoading(false);
          setSuccess(true);
        })
        .catch((err) => {
          setLoading(false);
          notification.error({
            message: `${t('Something went wrong')}...`,
            description: err.message,
          })
        })
  }, [t]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <Container>
        <Content>
          <Title>{t('Contact us')}</Title>
          {success ? (
              <Alert
                  message={t('Email sent successfully')}
                  description={t('Email sent description')}
                  type="success"
                  showIcon
              />
          ) : (
              <StyledForm
                  name="contact-us"
                  layout="vertical"
                  autoComplete="off"
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
                  <StyledInput placeholder={t('Full name')} autoComplete="new-password" disabled={loading} />
                </Form.Item>

                <Form.Item
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        message: t('Phone number require'),
                      },
                    ]}
                >
                  <StyledInput type="tel" placeholder={t('Phone number')} autoComplete="new-password" disabled={loading} />
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
                  <StyledInput placeholder={t('Email address')} autoComplete="new-password" disabled={loading} />
                </Form.Item>

                <Form.Item>
                  <StyledButton htmlType="submit" loading={loading} style={{width: '100%'}}>
                    {t('Send')}
                  </StyledButton>
                </Form.Item>
              </StyledForm>
          )}
        </Content>
      </Container>
  )
}

export default ContactUs;
