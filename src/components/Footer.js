import React from 'react';
import styled from 'styled-components';
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ServicesContainer = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px;
  @media(max-width: 540px) {
    justify-content: space-around;
  }
  &.desktop {
    display: flex;
  }
  &.mobile {
    display: none;
  }
  @media(max-width: 540px) {
    &.mobile {
      display: flex;
    }
    &.desktop {
      display: none;
    }
  }
`

const ServicesColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const Service = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #1F2737;
  margin: 0 12px;
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
        <ServicesContainer className="desktop">
          <Service>{t('The commandments')}</Service>
          <Service>{t('Report of stolen vehicle')}</Service>
          <Service>{t('Report of a car seller')}</Service>
          <Service>{t('Accessibility')}</Service>
          <Service>{t('To cancel an order')}</Service>
          <Service>{t('Terms')}</Service>
          <Service>{t('Privacy Policy')}</Service>
          <Service>{t('Contact us')}</Service>
        </ServicesContainer>
        <ServicesContainer className="mobile">
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
