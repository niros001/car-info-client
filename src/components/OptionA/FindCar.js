import React, {useState} from 'react';
import styled from 'styled-components';
import {Input} from 'antd';
import {ReportIncludes} from './index';

const PRICE = 149;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, rgba(22,0,144,1) 50%, rgba(79,0,152,1) 100%);
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
  position: relative;
`

const SalePrice = styled.div`
  font-size: 14px;
  color: #FECD89;
  margin: 20px 0;
`

const CheckButton = styled.div`
  position: absolute;
  left: -20px;
  color: white;
  background: linear-gradient(270deg, #4A16A5 0%, #E451C1 50%);
  border-radius: 25px;
  padding: 6px 18px;
  cursor: pointer;
`

const FindCar = ({t, getReport}) => {
  const [value, setValue] = useState();
  return (
      <Container>
        <>
          <Title>{t('Buy car')}</Title>
          <Subtitle>{t('Check car report')}</Subtitle>
          <img src={require('../../assets/car.png')} alt="car" width={200} />
          <InputWrapper>
            <Input
                maxLength={8}
                value={value}
                onChange={({target: {value}}) => setValue(value)}
                style={{fontWeight: 'bold', borderRadius: 25, maxWidth: 150}}
            />
            <CheckButton onClick={getReport}>{t('Check')}</CheckButton>
          </InputWrapper>
        </>
        <SalePrice>{t('Sale price')}{PRICE}₪</SalePrice>
        <ReportIncludes t={t} />
      </Container>
  )
}

export default FindCar;
