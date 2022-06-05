import React from 'react';
import styled from 'styled-components';
import {Title, Subtitle, Label, Info, CheckmarkInfo} from '../common';
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

const CarDealer = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('Car dealer-title')}</Title>
          <Subtitle>{t('Car dealer-subtitle')}</Subtitle>
          <Label>{t('Car dealer-label-1')}</Label>
          <Info>{t('Car dealer-info-1')}</Info>
          <Label>{t('Car dealer-label-2')}</Label>
          <CheckmarkInfo>{t('Car dealer-info-2-checkmark-1')}</CheckmarkInfo>
          <CheckmarkInfo>{t('Car dealer-info-2-checkmark-2')}</CheckmarkInfo>
          <CheckmarkInfo>{t('Car dealer-info-2-checkmark-3')}</CheckmarkInfo>
          <CheckmarkInfo>{t('Car dealer-info-2-checkmark-4')}</CheckmarkInfo>
          <Label>{t('Car dealer-label-3')}</Label>
          <Info>{t('Car dealer-info-3')}</Info>
          <Label>{t('Car dealer-label-4')}</Label>
          <Info>{t('Car dealer-info-4')}</Info>
          <Label>{t('Car dealer-label-5')}</Label>
          <Info>{t('Car dealer-info-5')}</Info>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default CarDealer;
