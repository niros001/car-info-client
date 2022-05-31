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

const Handicapped = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('Handicapped-title')}</Title>
          <Subtitle>{t('Handicapped-subtitle')}</Subtitle>
          <Label>{t('Handicapped-label-1')}</Label>
          <Info>{t('Handicapped-info-1')}</Info>
          <Label>{t('Handicapped-label-2')}</Label>
          <Info>{t('Handicapped-info-2')}</Info>
          <Label>{t('Handicapped-label-3')}</Label>
          <Info>{t('Handicapped-info-3')}</Info>
          <Label>{t('Handicapped-label-4')}</Label>
          <Info>{t('Handicapped-info-4')}</Info>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default Handicapped;
