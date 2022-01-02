import React from 'react';
import styled from 'styled-components';
import {Button, Input} from 'antd';
import {SearchOutlined} from '@ant-design/icons';

const PRICE = 149;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #2A1DA0;
  //background-image: url("https://cdn.pixabay.com/photo/2016/07/23/04/05/business-1536236_960_720.png");
  //background-repeat: no-repeat;
  //background-size: cover;
  padding: 16px 8px;
`

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SalePrice = styled.div`
  font-size: 14px;
  align-self: flex-start;
`

const FindCar = ({t}) => (
    <Container>
      <>
        <Title>{t('Buy car')}</Title>
        <Subtitle>{t('Check car report')}</Subtitle>
        <InputWrapper>
          <Input type="number" style={{textAlign: 'center !important'}} suffix={<SearchOutlined />} />
          <Button style={{margin: 5, background: '#FEB255', color: 'white', border: 'none'}}>{t('Check')}</Button>
        </InputWrapper>
      </>
      <SalePrice>{t('Sale price')}{PRICE}₪</SalePrice>
    </Container>
)

export default FindCar;
