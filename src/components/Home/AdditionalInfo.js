import React from 'react';
import styled from 'styled-components';
import {Responsive, container} from '../common';

const Container = styled.div`
  ${container};
  background-color: white;
`

const Content = styled(Responsive)`

`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #525252;
  margin-bottom: 12px;
`

const Info = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #525252;
`

const AdditionalInfo = ({t}) => (
    <Container style={{color: 'black'}}>
          <Content>
                <Title>{t('What is check car report')}</Title>
                <Info>{t('What is check car report info')}</Info>
                <br />
                <Title>{t('Sounds revolutionary')}</Title>
                <Info>{t('Sounds revolutionary info')}</Info>
                <br />
                <Title>{t('It is legal')}</Title>
                <Info>{t('It is legal info')}</Info>
          </Content>
    </Container>
)

export default AdditionalInfo;
