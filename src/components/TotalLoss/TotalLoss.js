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
          <Title>{t('Total loss-title')}</Title>
          <Subtitle>{t('Total loss-subtitle')}</Subtitle>
          <Label>{t('Total loss-label-1')}</Label>
          <Info>{t('Total loss-info-1')}</Info>
          <Label>{t('Total loss-label-2')}</Label>
          <Info>{t('Total loss-info-2')}</Info>
          <CheckmarkInfo>{t('Total loss-info-2-checkmark-1')}</CheckmarkInfo>
          <CheckmarkInfo>{t('Total loss-info-2-checkmark-2')}</CheckmarkInfo>
          <CheckmarkInfo>{t('Total loss-info-2-checkmark-3')}</CheckmarkInfo>
          <Label>{t('Total loss-label-3')}</Label>
          <Info>{t('Total loss-info-3')}</Info>
          <br />
          <Info bold>{t('Total loss-info-3-example-1')}</Info>
          <Info bold>{t('Total loss-info-3-example-2')}</Info>
          <Info bold>{t('Total loss-info-3-example-3')}</Info>
          <Label>{t('Total loss-label-4')}</Label>
          <Info>{t('Total loss-info-4')}</Info>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default CarDealer;
