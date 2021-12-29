import React from 'react';
import styled from 'styled-components';
import {UserOutlined} from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 4px 8px;
  cursor: pointer;
  opacity: 1;
  transition: opacity .3s;
  :hover {
    opacity: .75;
  }
`

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #1890ff;
  padding: 5px;
`

const Text = styled.div`
  margin-left: 5px;
  color: #1890ff;
  font-size: 13px;
`

const User = ({}) => {

  return (
      <Container onClick={() => alert('Login not available right now')}>
        <Circle>
          <UserOutlined style={{color: 'white'}} />
        </Circle>
        {/*<Text>Log In</Text>*/}
        <Text>Logged as: <b>Guest</b></Text>
      </Container>
  )
}

export default User;
