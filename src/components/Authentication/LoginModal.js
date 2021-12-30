import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Modal, Button, notification, Divider, Form} from 'antd';
import {LoginForm, SignupForm} from '../Authentication';

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
  const loginElement = useRef(null);
  const signupElement = useRef(null);
  const [loginForm] = Form.useForm();
  const [signupForm] = Form.useForm();
  const [loginElementHeight, setLoginElementHeight] = useState('initial');
  const [signupElementHeight, setSignupElementHeight] = useState('initial');
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if(!visible) {
      loginForm.resetFields();
      signupForm.resetFields();
      setCollapsed(false);
    } else {
      if (loginElement.current?.scrollHeight) setLoginElementHeight(loginElement.current?.scrollHeight);
      if (signupElement.current?.scrollHeight) setSignupElementHeight(signupElement.current?.scrollHeight);
    }
  }, [visible, loginForm, signupForm])

  useEffect(() => {
    if (error) {
      notification.error({
        message: 'Something went wrong..',
        description: error.message,
      })
    }
  }, [error])

  useEffect(() => {
    if (data) {
      notification.success({
        message: 'User logged in!!',
      })
    }
  }, [data])

  return (
      <Modal
          title="Login account"
          visible={visible}
          footer={null}
          onCancel={onCancel}
          width={350}
      >
        <Content>
          <Collapsed ref={loginElement} collapsed={collapsed} scrollHeight={loginElementHeight}>
            <LoginForm loading={loading} form={loginForm} login={login} />
          </Collapsed>
          <Divider style={{margin: 0}}>
            <Button type="link" onClick={() => setCollapsed(!collapsed)}>{collapsed ? 'LOGIN' : 'OR REGISTER'}</Button>
          </Divider>
          <Collapsed ref={signupElement} collapsed={!collapsed} scrollHeight={signupElementHeight}>
            <SignupForm loading={loading} form={signupForm} signup={signup} />
          </Collapsed>
        </Content>
      </Modal>
  )
}

export default LoginModal;
