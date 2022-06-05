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

const Recall = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('Recall-title')}</Title>
          <Subtitle>{t('Recall-subtitle')}</Subtitle>
          <Label>{t('Recall-label-1')}</Label>
          <Info>{t('Recall-info-1')}</Info>
          <Label>{t('Recall-label-2')}</Label>
          <Info>{t('Recall-info-2')}</Info>
          <Label>{t('Recall-label-3')}</Label>
          <Info>{t('Recall-info-3')}</Info>
          <Label>{t('Recall-label-4')}</Label>
          <Info>{t('Recall-info-4')}</Info>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default Recall;
