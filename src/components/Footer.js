import React from 'react';
import styled from 'styled-components';
import {Responsive} from './common';
import logoSvg from '../assets/logo.svg'
import twitterSvg from '../assets/twitter.svg'
import facebookSvg from '../assets/facebook.svg'
import linkedInSvg from '../assets/linkedIn.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px 0;
`

const Content = styled(Responsive)`
  align-items: center;
  width: 100%;
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
  font-size: 14px;
  font-weight: 400;
  color: #1F2737;
  cursor: pointer;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const Shared = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 12px;
  cursor: pointer;
`

const Footer = ({t}) => (
    <Container>
      <Content>
        <img src={logoSvg} alt="logo" height={30} />
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
          <Shared src={twitterSvg} alt="twitter" />
          <Shared src={facebookSvg} alt="facebook" />
          <Shared src={linkedInSvg} alt="linkedIn" />
        </Row>
      </Content>
    </Container>
)

export default Footer;
