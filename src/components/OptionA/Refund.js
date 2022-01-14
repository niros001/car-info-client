import React from 'react';
import styled from 'styled-components';
import {Button} from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 12px 0;
`

const Info = styled.div`
  font-size: 15px;
  color: black;
`;

const Refund = ({t}) => (
    <Container>
      <Button type="primary">{t('Satisfied report')}</Button>
      <Title>{t('Full refund')}</Title>
      <img src={require('../../assets/refund.png')} alt="logo" height={250} />
      <Info>{t('Refund info')}</Info>
    </Container>
);

export default Refund;
