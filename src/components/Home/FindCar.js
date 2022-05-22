import React, {useCallback, useState} from 'react';
import styled, {css} from 'styled-components';
import {Button, Input, DatePicker, Alert} from 'antd';
import {useTranslation} from 'react-i18next';
import {container} from '../common';
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

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: nowrap;
  @media(max-width: 540px) {
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 33px;
  font-weight: bold;
  color: #1F2737;
`

const Subtitle = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: #1F2737;
`

const Img = styled.img`
  margin: 20px 0;
  width: 100%;
  &.desktop {
    display: unset;
  }
  &.mobile {
    display: none;
  }
  @media(max-width: 540px) {
    &.mobile {
      display: unset;
    }
    &.desktop {
      display: none;
    }
  }
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: fit-content;
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
  font-size: 21px;
  font-weight: 500;
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
          <Column>
            <Title>{t('Buy car')}</Title>
            <Subtitle>{t('Check car report')}</Subtitle>
            <Img className="mobile" src={carSvg} alt="car" />
            <SalePrice>{t('Sale price')}{PRICE}₪</SalePrice>
            {report.loading && <LoadingOutlined style={{color: '#1AE5BE', fontSize: 30}} />}
            {(!report.loading && !showAlert) && (
                <>
                  {/*<StyledInput*/}
                  {/*    disabled*/}
                  {/*    value={ownerId}*/}
                  {/*    onChange={({target: {value}}) => setOwnerId(value)}*/}
                  {/*    placeholder={t('Owner ID')}*/}
                  {/*/>*/}
                  {/*<br />*/}
                  {/*<StyledDatePicker*/}
                  {/*    disabled*/}
                  {/*    inputReadOnly*/}
                  {/*    placeholder={t('Owner date')}*/}
                  {/*    onChange={(date, dateString) => seOwnerDate(dateString.split('-').reverse().join(''))}*/}
                  {/*/>*/}
                  {/*<br />*/}
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
          </Column>
          <Img className="desktop" src={carSvg} alt="car" />
        </Content>
      </Container>
  )
}

export default FindCar;
