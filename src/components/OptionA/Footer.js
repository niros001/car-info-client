import React from 'react';
import styled from 'styled-components';
import {TwitterOutlined, FacebookOutlined, LinkedinOutlined} from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px 12px;
`

const ServicesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 30px;
`

const ServicesColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Service = styled.div`
  font-size: 13px;
  color: #160090;
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Footer = ({t}) => (
    <Container>
      <img src={require('../../assets/logo.png')} alt="logo" height={30} />
      <ServicesContainer>
        <ServicesColumn>
          <Service>{t('The commandments')}</Service>
          <Service>{t('Report of stolen vehicle')}</Service>
          <Service>{t('Report of a car seller')}</Service>
          <Service>{t('Accessibility')}</Service>
        </ServicesColumn>
        <ServicesColumn>
          <Service>{t('To cancel an order')}</Service>
          <Service>{t('Terms')}</Service>
          <Service>{t('Privacy Policy')}</Service>
          <Service>{t('Contact us')}</Service>
        </ServicesColumn>
      </ServicesContainer>
      <Row>
        <TwitterOutlined style={{color: '#160090', fontSize: 30, margin: '0 12px'}} />
        <FacebookOutlined style={{color: '#160090', fontSize: 30, margin: '0 12px'}} />
        <LinkedinOutlined style={{color: '#160090', fontSize: 30, margin: '0 12px'}} />
      </Row>
    </Container>
)

export default Footer;
