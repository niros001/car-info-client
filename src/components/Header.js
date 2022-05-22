import React from 'react';
import styled, {css} from 'styled-components';
import {MenuOutlined} from '@ant-design/icons';
import logoSvg from '../assets/logo.svg'

const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
  width: 90px;
  height: 30px;
  margin: 0 5px;
  font-size: 12px;
`;

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

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Button1 = styled.div`
  ${button};
  background-color: #FFFFFF;
  color: #1F2737;
  border: 1px solid #1F2737;
`;

const Button2 = styled.div`
  ${button};
  background-color: #555FDE;
  color: #FFFFFF;
`;

const Header = ({t, openDrawer}) => (
    <Container>
      <Row>
        <MenuOutlined onClick={openDrawer} style={{color: 'black'}} />
        <Button1>{t('Report demo')}</Button1>
        <Button2>{t('Order report')}</Button2>
      </Row>
      <img src={logoSvg} alt="logo" height={30} />
    </Container>
)

export default Header;
