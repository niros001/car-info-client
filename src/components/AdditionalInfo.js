import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-bottom: 12px;
`

const Info = styled.div`
  font-size: 15px;
  color: black;
`

const AdditionalInfo = ({t}) => (
    <Container style={{color: 'black'}}>
      <Title>{t('What is check car report')}</Title>
      <Info>{t('What is check car report info')}</Info>
      <br />
      <Title>{t('Sounds revolutionary')}</Title>
      <Info>{t('Sounds revolutionary info')}</Info>
      <br />
      <Title>{t('It is legal')}</Title>
      <Info>{t('It is legal info')}</Info>
    </Container>
)

export default AdditionalInfo;
