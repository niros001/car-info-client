import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Modal, Button, notification, Divider, Form} from 'antd';
import {useTranslation} from 'react-i18next';
import {LoginForm, SignupForm, ResetPasswordForm} from '../Authentication';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Collapsed = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${({collapsed, scrollHeight}) => collapsed ? 0 : scrollHeight}px;
  transition: max-height .5s;
  overflow: hidden;
`

const LoginModal = ({user: {loading, data, error}, visible, onCancel, login, signup}) => {
  const {t} = useTranslation();
  const firstUpdate = useRef(true);
  const loginElement = useRef(null);
  const signupElement = useRef(null);
  const [loginForm] = Form.useForm();
  const [signupForm] = Form.useForm();
  const [resetPasswordForm] = Form.useForm();
  const [loginElementHeight, setLoginElementHeight] = useState('initial');
  const [signupElementHeight, setSignupElementHeight] = useState('initial');
  const [collapsed, setCollapsed] = useState(false);
  const [resetMode, setResetMode] = useState(false);

  useEffect(() => {
    if(!visible) {
      if (firstUpdate.current) {
        firstUpdate.current = false;
      } else {
        loginForm.resetFields();
        signupForm.resetFields();
        resetPasswordForm.resetFields();
        setCollapsed(false);
        setResetMode(false);
      }
    } else {
      if (loginElement.current?.scrollHeight) setLoginElementHeight(loginElement.current?.scrollHeight);
      if (signupElement.current?.scrollHeight) setSignupElementHeight(signupElement.current?.scrollHeight);
    }
  }, [visible, loginForm, signupForm, resetPasswordForm])

  useEffect(() => {
    if (error) {
      notification.error({
        message: `${t('Something went wrong')}...`,
        description: error.message,
      })
    }
  }, [error, t])

  // useEffect(() => {
  //   if (data) {
  //     notification.success({
  //       message: t('User logged in'),
  //     })
  //   }
  // }, [data, t])

  return (
      <Modal
          title={t('Login account')}
          visible={visible}
          footer={null}
          onCancel={onCancel}
          width={350}
      >
        <Content>
          {!resetMode && (
              <>
                <Collapsed ref={loginElement} collapsed={collapsed} scrollHeight={loginElementHeight}>
                  <LoginForm loading={loading} form={loginForm} login={login} onResetPassword={() => setResetMode(true)} />
                </Collapsed>
                <Divider style={{margin: 0}}>
                  <Button type="link" onClick={() => setCollapsed(!collapsed)}>{collapsed ? t('LOGIN') : t('OR REGISTER')}</Button>
                </Divider>
                <Collapsed ref={signupElement} collapsed={!collapsed} scrollHeight={signupElementHeight}>
                  <SignupForm loading={loading} form={signupForm} signup={signup} />
                </Collapsed>
              </>
          )}
          {resetMode && (
              <Collapsed>
                <ResetPasswordForm form={resetPasswordForm} onBack={() => setResetMode(false)} />
              </Collapsed>
          )}
        </Content>
      </Modal>
  )
}

export default LoginModal;
