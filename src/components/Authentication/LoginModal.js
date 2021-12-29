import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Modal, Input, Button, notification, Checkbox} from 'antd';
import {MailOutlined, KeyOutlined} from '@ant-design/icons';

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const LoginModal = ({user: {loading, data, error}, visible, onCancel, login, signup}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
          <Input addonBefore={<MailOutlined />} placeholder="Email address" onChange={({target: {value}}) => setEmail(value)} autoComplete="new-password" />
          <br/>
          <Input.Password addonBefore={<KeyOutlined />} placeholder="Password" onChange={({target: {value}}) => setPassword(value)} autoComplete="new-password" />
          <br/>
          <Checkbox>Remember me</Checkbox>
          <br/>
          <Button loading={loading} onClick={() => login({email, password})} type="primary">LOGIN</Button>
          <br/>
          <Button loading={loading} onClick={() => signup({email, password})} disabled>SIGNUP</Button>
        </Content>
      </Modal>
  )
}

export default LoginModal;
