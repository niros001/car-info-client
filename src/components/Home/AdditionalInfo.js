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
  font-weight: bold;
  color: #555FDE;
  margin-bottom: 12px;
`

const Info = styled.div`
  font-size: 15px;
  font-weight: ${({bold}) => bold ? 'bold' : '400'};
  color: #1F2737;
`

const AdditionalInfo = ({t}) => (
    <Container style={{color: 'black'}}>
          <Content>
                <Title>{t('Start with')}</Title>
                <Info>{t('Start with info')}</Info>
                <br />
                <Title>{t('Check before seen')}</Title>
                <Info>{t('Check before seen info')}</Info>
                <br />
                <Title>{t('Vehicle CV')}</Title>
                <Info>{t('Vehicle CV info')}</Info>
                <br />
                <Title>{t('Title 4')}</Title>
                <Info bold>{t('Info 1')}</Info>
                <Info bold>{t('Info 2')}</Info>
                <Info bold>{t('Info 3')}</Info>
                <Info bold>{t('Info 4')}</Info>
                <Info bold>{t('Info 5')}</Info>
          </Content>
    </Container>
)

export default AdditionalInfo;
