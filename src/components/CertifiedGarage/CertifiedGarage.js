import React from 'react';
import styled from 'styled-components';
import {Title, Subtitle, Label, Info} from '../common';
import {useTranslation} from 'react-i18next';
import {ContactUs, ReportViewer} from '../Home';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  margin-bottom: 30px;
`

const CertifiedGarage = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('Certified garage-title')}</Title>
          <Subtitle>{t('Certified garage-subtitle')}</Subtitle>
          <Label>{t('Certified garage-label-1')}</Label>
          <Info>{t('Certified garage-info-1')}</Info>
          <Label>{t('Certified garage-label-2')}</Label>
          <Info>{t('Certified garage-info-2')}</Info>
          <Label>{t('Certified garage-label-3')}</Label>
          <Info>{t('Certified garage-info-3')}</Info>
          <Label>{t('Certified garage-label-4')}</Label>
          <Info>{t('Certified garage-info-4')}</Info>
          <Label>{t('Certified garage-label-5')}</Label>
          <Info>{t('Certified garage-info-5')}</Info>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default CertifiedGarage;
