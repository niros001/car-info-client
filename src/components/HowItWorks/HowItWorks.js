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

const CheckmarksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  div:last-child {
    margin-left: 25px;
  }
  @media(max-width: 540px) {
    flex-direction: column;
    div:last-child {
      margin-left: unset;
    }
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const CarDealer = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('How it works-title')}</Title>
          <Subtitle>{t('How it works-subtitle')}</Subtitle>
          <Label>{t('How it works-label-1')}</Label>
          <Info>{t('How it works-info-1')}</Info>
          <CheckmarksWrapper>
            <Column>
              <CheckmarkInfo>{t('How it works-info-1-checkmark-1')}</CheckmarkInfo>
              <CheckmarkInfo>{t('How it works-info-1-checkmark-2')}</CheckmarkInfo>
              <CheckmarkInfo>{t('How it works-info-1-checkmark-3')}</CheckmarkInfo>
            </Column>
            <Column>
              <CheckmarkInfo>{t('How it works-info-1-checkmark-4')}</CheckmarkInfo>
              <CheckmarkInfo>{t('How it works-info-1-checkmark-5')}</CheckmarkInfo>
              <CheckmarkInfo>{t('How it works-info-1-checkmark-6')}</CheckmarkInfo>
            </Column>
          </CheckmarksWrapper>
          <Label>{t('How it works-label-2')}</Label>
          <Info>{t('How it works-info-2')}</Info>
          <CheckmarkInfo>{t('How it works-info-2-checkmark-1')}</CheckmarkInfo>
          <CheckmarkInfo>{t('How it works-info-2-checkmark-2')}</CheckmarkInfo>
          <Label>{t('How it works-label-3')}</Label>
          <Info>{t('How it works-info-3')}</Info>
          <CheckmarkInfo>{t('How it works-info-3-checkmark-1')}</CheckmarkInfo>
          <CheckmarkInfo>{t('How it works-info-3-checkmark-2')}</CheckmarkInfo>
          <CheckmarkInfo>{t('How it works-info-3-checkmark-3')}</CheckmarkInfo>
          <br />
          <Info>{t('How it works-info-4')}</Info>
          <CheckmarkInfo>{t('How it works-info-4-checkmark-1')}</CheckmarkInfo>
          <CheckmarkInfo>{t('How it works-info-4-checkmark-2')}</CheckmarkInfo>
          <CheckmarkInfo>{t('How it works-info-4-checkmark-3')}</CheckmarkInfo>
          <CheckmarkInfo>{t('How it works-info-4-checkmark-4')}</CheckmarkInfo>
          <CheckmarkInfo>{t('How it works-info-4-checkmark-5')}</CheckmarkInfo>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default CarDealer;
