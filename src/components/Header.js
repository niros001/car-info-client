import React from 'react';
import styled from 'styled-components';
import {MenuOutlined} from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #F0F0F0;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  z-index: 1;
  padding: 10px 20px;
`

const Header = ({openDrawer}) => (
    <Container>
      <MenuOutlined onClick={openDrawer} style={{color: 'black'}} />
      <img src={require('../assets/logo.png')} alt="logo" height={30} />
    </Container>
)

export default Header;
