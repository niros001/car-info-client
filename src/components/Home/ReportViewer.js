import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import {Responsive, container} from '../common';
import phoneSvg from '../../assets/phone.svg'

const Container = styled.div`
  ${container};
  background-color: white;
`

const Content = styled(Responsive)`
  align-items: center;
`

const StyledButton = styled(Button)`
  background: linear-gradient(265deg, #1AE5BE 0%, #56EFD2 100%) !important;
  color: black !important;
  width: 100%;
  border: none;
  border-radius: 47px;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  white-space: normal !important;
`

const UnderlineText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #1F2737;
  border-bottom: 1px solid #1AE5BE;
`

const ReportViewer = ({t}) => (
    <Container>
      <Content>
        <StyledButton>{t('Enter a vehicle number - btn')}</StyledButton>
        <img src={phoneSvg} alt="phone" height={200} style={{margin: '50px 0'}}/>
        <UnderlineText>{t('How report looks')}?</UnderlineText>
      </Content>
    </Container>
)

export default ReportViewer;
