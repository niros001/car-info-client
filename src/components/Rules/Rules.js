import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import {UploadOutlined, DownloadOutlined} from '@ant-design/icons';
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

const StyledButton = styled(Button)`
  background-color: #555FDE !important;
  border: none;
  max-width: max-content;
`

const Rules = () => {
  const {t} = useTranslation();
  return (
      <Container>
        <Content>
          <Title>{t('Rules-title')}</Title>
          <Subtitle>{t('Rules-subtitle')}</Subtitle>
          <Label>{t('Rules-label-1')}</Label>
          <Info>{t('Rules-info-1')}</Info>
          <Label>{t('Rules-label-2')}</Label>
          <Info>{t('Rules-info-2')}</Info>
          <Label>{t('Rules-label-3')}</Label>
          <Info>{t('Rules-info-3')}</Info>
          <Label>{t('Rules-label-4')}</Label>
          <Info>{t('Rules-info-4')}</Info>
          <Label>{t('Rules-label-5')}</Label>
          <Info>{t('Rules-info-5')}</Info>
          <Info bold>{t('Rules-info-5-important-1')}</Info>
          <Info bold>{t('Rules-info-5-important-2')}</Info>
          <Label>{t('Rules-label-6')}</Label>
          <Info>{t('Rules-info-6')}</Info>
          <Info bold>{t('Rules-info-6-upload-info')}</Info>
          <StyledButton type="primary" shape="round" icon={<UploadOutlined />}>{t('Rules-info-6-upload-button')}</StyledButton>
          <Label>{t('Rules-label-7')}</Label>
          <Info bold>{t('Rules-info-7-upload-info')}</Info>
          <StyledButton type="primary" shape="round" icon={<DownloadOutlined />}>{t('Rules-info-7-upload-button')}</StyledButton>
          <Label>{t('Rules-label-8')}</Label>
        </Content>
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  )
}

export default Rules;
