import React, {useMemo} from 'react';
import styled from 'styled-components';
import {CarOutlined} from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background-color: #E7F9FE;
  border-radius: 50%;
  border: 3px solid;
  border-color: #24E2B1 #24E2B1 #24E2B1 transparent;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const Text = styled.div`
  font-size: 13px;
  margin-top: 15px;
  max-width: 80px;
  text-align: center;
`
const ReportIncludes = ({t}) => {
  const includes = useMemo(() => [
    {icon: <CarOutlined style={{fontSize: 40 , color: 'rgba(22,0,144,1)'}} />, description: t('Impairment test and total loss')},
    {icon: <CarOutlined style={{fontSize: 40, color: 'rgba(22,0,144,1)'}} />, description: t('Maintenance costs and red flags')},
    {icon: <CarOutlined style={{fontSize: 40, color: 'rgba(22,0,144,1)'}} />, description: t('Official mortgage check')},
    {icon: <CarOutlined style={{fontSize: 40, color: 'rgba(22,0,144,1)'}} />, description: t('Vehicle history from database')},
    {icon: <CarOutlined style={{fontSize: 40, color: 'rgba(22,0,144,1)'}} />, description: t('Checking the seller vehicle')},
    {icon: <CarOutlined style={{fontSize: 40, color: 'rgba(22,0,144,1)'}} />, description: t('Checking vehicle costs')},
  ], [t])

  return (
      <Container>
        <Title>{t('Report includes title')}</Title>
        <Content>
          {includes.map(({icon, description}, index) => (
              <Item key={index}>
                <IconWrapper>
                  {icon}
                </IconWrapper>
                <Text>{description}</Text>
              </Item>
          ))}
        </Content>
      </Container>
  );
}

export default ReportIncludes;
