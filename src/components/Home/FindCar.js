import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import {Button, Input} from 'antd';
import {useTranslation} from 'react-i18next';
import {Responsive} from '../common';
import {LoadingOutlined} from '@ant-design/icons';
import carSvg from '../../assets/car.svg';

const PRICE = 149;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`

const Content = styled(Responsive)`
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 37px;
  font-weight: bold;
  color: #1F2737;
`

const Subtitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #1F2737;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  input {
    font-size: 16px;
    font-weight: 400;
    border-radius: 25px;
    width: 270px;
    height: 45px;
    border: none !important;
    box-shadow: none !important;
    background-color: #F6F6F6;
    ::placeholder {
      color: black;
    }
  }
`

const SalePrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #1F2737;
  margin: 20px 0;
`

const CheckButton = styled(Button)`
  position: absolute;
  left: ${({dir}) => dir === 'rtl' && '-20px'};
  right: ${({dir}) => dir === 'ltr' && '-20px'};
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  color: #1F2737 !important;
  background: #1AE5BE !important;
  border: none !important;
  border-radius: 25px;
  padding: 6px 18px;
  cursor: pointer;
`

const ShowButton = styled(Button)`
  background: #1AE5BE !important;
  color: #1F2737 !important;
  border: none !important;
  font-size: 16px;
  font-weight: bold;
  border-radius: 25px;
  padding: 6px 18px;
  cursor: pointer;
  margin: 12px;
`

const Error = styled.div`
  color: #C3182B;
`

const FindCar = ({getReport, report}) => {
  const {t, i18n} = useTranslation();
  const [value, setValue] = useState('');
  const file = useMemo(() => {
    if (report.data) {
      return new Blob([new Uint8Array(report.data.buffer.data)], {type: 'application/pdf'})
    }
    return null;
  }, [report.data]);

  const fileURL = useMemo(() => file ? URL.createObjectURL(file) : '', [file]);

  return (
      <Container>
        <Content>
          <>
            <Title>{t('Buy car')}</Title>
            <Subtitle>{t('Check car report')}</Subtitle>
            <img src={carSvg} alt="car" width={270} style={{margin: '20px 0'}} />
            {report.loading && <LoadingOutlined style={{color: '#1AE5BE', fontSize: 30}} />}
            {!report.loading && (
                <InputWrapper>
                  <Input
                      maxLength={8}
                      value={value}
                      onChange={({target: {value}}) => setValue(value)}
                      placeholder={t('Car number')}
                  />
                  <CheckButton dir={i18n.dir()} disabled={report.loading} onClick={() => getReport(value)}>{t('Check')}</CheckButton>
                </InputWrapper>
            )}
            {report.error && <Error>{report?.error?.message}</Error>}
            {report.data?.success && (
                <ShowButton target="_blank" onClick={() => window.open(fileURL)}>{t('Show report')}</ShowButton>
            )}
          </>
          <SalePrice>{t('Sale price')}{PRICE}₪</SalePrice>
        </Content>
      </Container>
  )
}

export default FindCar;
