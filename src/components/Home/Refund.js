import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import refundSvg from  '../../assets/refund.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`

const StyledButton = styled(Button)`
  height: 45px;
  background-color: #1F2737 !important;
  color: white !important;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  border: none;
  border-radius: 5px;
`

const Title = styled.div`
  font-size: 20px;
  color: #525252;
  margin: 12px 0;
`

const Info = styled.div`
  font-size: 15px;
  color: #525252;
`;

const Refund = ({t}) => (
    <Container>
      <StyledButton type="primary" style={{backgroundColor: '#1F2737', width: '100%', border: 'none'}}>{t('Satisfied report')}</StyledButton>
      <Title>{t('Full refund')}</Title>
      <img src={refundSvg} alt="refund" height={180} style={{margin: '30px 0'}} />
      <Info>{t('Refund info')}</Info>
    </Container>
);

export default Refund;
