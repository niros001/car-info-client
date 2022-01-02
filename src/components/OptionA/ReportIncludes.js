import React, {useMemo} from 'react';
import styled from 'styled-components';
import {CarOutlined} from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
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
  border-color: #FEB255 #FEB255 #FEB255 transparent;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: black;
`

const Text = styled.div`
  font-size: 13px;
  color: black;
  margin-top: 15px;
  max-width: 80px;
  text-align: center;
`

const ReportIncludes = ({t}) => {
  const includes = useMemo(() => [
    {icon: <CarOutlined style={{fontSize: 40}} />, description: t('Impairment test and total loss')},
    {icon: <CarOutlined style={{fontSize: 40}} />, description: t('Maintenance costs and red flags')},
    {icon: <CarOutlined style={{fontSize: 40}} />, description: t('Official mortgage check')},
    {icon: <CarOutlined style={{fontSize: 40}} />, description: t('Vehicle history from database')},
    {icon: <CarOutlined style={{fontSize: 40}} />, description: t('Checking the seller vehicle')},
    {icon: <CarOutlined style={{fontSize: 40}} />, description: t('Checking vehicle costs')},
  ], [t])

  return (
      <Container>
      <Title>
      {t('What does the report include')}
  What the report includes
  </Title>
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
