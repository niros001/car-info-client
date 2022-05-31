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

const CurvedVehicle = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('Curved vehicle-title')}</Title>
          <Subtitle>{t('Curved vehicle-subtitle')}</Subtitle>
          <Label>{t('Curved vehicle-label-1')}</Label>
          <Info>{t('Curved vehicle-info-1')}</Info>
          <Label>{t('Curved vehicle-label-2')}</Label>
          <Info>{t('Curved vehicle-info-2')}</Info>
          <Label>{t('Curved vehicle-label-3')}</Label>
          <Info>{t('Curved vehicle-info-3')}</Info>
          <Label>{t('Curved vehicle-label-4')}</Label>
          <Info>{t('Curved vehicle-info-4')}</Info>
          <Label>{t('Curved vehicle-label-5')}</Label>
          <Info>{t('Curved vehicle-info-5')}</Info>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default CurvedVehicle;
