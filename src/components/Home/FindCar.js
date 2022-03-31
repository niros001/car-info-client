import React, {useCallback, useState} from 'react';
import styled, {css} from 'styled-components';
import {Button, Input, DatePicker, Alert} from 'antd';
import {useTranslation} from 'react-i18next';
import {Responsive, container} from '../common';
import {LoadingOutlined} from '@ant-design/icons';
import carSvg from '../../assets/car.svg';

const PRICE = 149;

const input = css`
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
`;

const Container = styled.div`
  ${container};
  background-color: white;
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
    ${input}
  }
`

const StyledInput = styled(Input)`
  ${input};
   width: 350px;
`;

const StyledDatePicker = styled(DatePicker)`
  ${input};
  width: 350px;
`;

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

const Error = styled.div`
  color: #C3182B;
`

const FindCar = ({getReport, report}) => {
  const {t, i18n} = useTranslation();
  const [carNumber, seCarNumber] = useState('');
  const [ownerId, setOwnerId] = useState('');
  const [ownerDate, seOwnerDate] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleReport = useCallback(() => {
    getReport(carNumber, ownerId, ownerDate)
        .then(({success}) => {
          if (success) {
            setShowAlert(true);
          }
        })
  }, [getReport, carNumber, ownerId, ownerDate]);

  return (
      <Container>
        <Content>
          <>
            <Title>{t('Buy car')}</Title>
            <Subtitle>{t('Check car report')}</Subtitle>
            <img src={carSvg} alt="car" width={270} style={{margin: '20px 0'}} />
            {report.loading && <LoadingOutlined style={{color: '#1AE5BE', fontSize: 30}} />}
            {(!report.loading && !showAlert) && (
                <>
                  <StyledInput
                      value={ownerId}
                      onChange={({target: {value}}) => setOwnerId(value)}
                      placeholder={t('Owner ID')}
                  />
                  <br />
                  <StyledDatePicker
                      inputReadOnly
                      placeholder={t('Owner date')}
                      onChange={(date, dateString) => seOwnerDate(dateString.split('-').reverse().join(''))}
                  />
                  <br />
                  <InputWrapper>
                    <Input
                        maxLength={8}
                        value={carNumber}
                        onChange={({target: {value}}) => seCarNumber(value)}
                        placeholder={t('Car number')}
                    />
                    <CheckButton dir={i18n.dir()} disabled={report.loading} onClick={handleReport}>{t('Check')}</CheckButton>
                  </InputWrapper>
                </>
            )}
            {report.error && <Error>{report?.error?.message}</Error>}
            {showAlert && (
                <Alert
                    message={t('Report preparation alert')}
                    type="success"
                    showIcon
                    action={
                      <Button size="small" type="link" onClick={() => setShowAlert(false)}>
                        {t('Search another car')}
                      </Button>
                    }
                />
            )}
          </>
          <SalePrice>{t('Sale price')}{PRICE}₪</SalePrice>
        </Content>
      </Container>
  )
}

export default FindCar;
