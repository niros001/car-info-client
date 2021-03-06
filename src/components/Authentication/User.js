import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {notification, Avatar} from 'antd';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {UserOutlined} from '@ant-design/icons';
import {LoginModal} from '../Authentication'
import {authActions} from '../../store/actions';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2px 6px;
`

const Text = styled.div`
  margin-left: 5px;
  color: #1890ff;
  font-size: 10px;
`

const ButtonText = styled(Text)`
  cursor: pointer;
  opacity: 1;
  transition: opacity .3s;
  :hover {
    opacity: .75;
  }
`

const User = ({user, login, signup, logout}) => {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (user.data) {
      setVisible(false);
    }
  }, [user]);

  const onLogout = useCallback(() => {
    logout();
    notification.info({
      message: t('User logged out')
    })
  }, [logout, t])

  return (
      <Container>
        <Avatar size="small" icon={<UserOutlined />} />
        {!user.data && <ButtonText onClick={() => setVisible(true)}>{t('Log In')}</ButtonText>}
        {user.data && <Text>{t('Logged as')}: <b>{user.data.email}</b></Text>}
        {user.data && <ButtonText onClick={onLogout}><b>{t('Logout')}</b></ButtonText>}
        <LoginModal
            visible={visible}
            onCancel={() => setVisible(false)}
            user={user}
            login={login}
            signup={signup}
        />
      </Container>
  )
}

export default connect(({auth: {user}}) => ({user}), authActions)(User);
