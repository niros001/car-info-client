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

const Why = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('Why-title')}</Title>
          <Subtitle>{t('Why-subtitle')}</Subtitle>
          <Label>{t('Why-label-1')}</Label>
          <Info>{t('Why-info-1')}</Info>
          <Label>{t('Why-label-2')}</Label>
          <Info>{t('Why-info-2')}</Info>
          <CheckmarkInfo>{t('Why-info-2-checkmark-1')}</CheckmarkInfo>
          <CheckmarkInfo>{t('Why-info-2-checkmark-2')}</CheckmarkInfo>
          <Label>{t('Why-label-3')}</Label>
          <Info>{t('Why-info-3')}</Info>
          <Label>{t('Why-label-4')}</Label>
          <Info>{t('Why-info-4')}</Info>
          <Label>{t('Why-label-5')}</Label>
          <Info>{t('Why-info-5')}</Info>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default Why;
