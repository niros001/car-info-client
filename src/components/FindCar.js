import React, {useState} from 'react';
import styled from 'styled-components';
import {Button, Input, Modal} from 'antd';
import {ReportIncludes} from './index';
import {Responsive} from './common';
import {LoadingOutlined} from '@ant-design/icons';

const PRICE = 149;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(0deg, rgba(22,0,144,1) 0%, rgba(79,0,152,1) 100%);
`

const Content = styled(Responsive)`
  align-items: center;
  justify-content: space-between;
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

const CheckButton = styled(Button)`
  position: absolute;
  left: -20px;
  color: white !important;
  background: linear-gradient(270deg, #4A16A5 0%, #E451C1 50%) !important;
  border: none !important;
  border-radius: 25px;
  padding: 6px 18px;
  cursor: pointer;
`

const ShowButton = styled(Button)`
  background: linear-gradient(270deg, #4A16A5 0%, #E451C1 50%) !important;
  color: white !important;
  border: none !important;
  border-radius: 25px;
  padding: 6px 18px;
  cursor: pointer;
  margin: 12px;
`

const Error = styled.div`
  color: #C3182B;
`

const FindCar = ({t, getReport, report}) => {
  const [value, setValue] = useState();
  const [visible, setVisible] = useState(false);

  console.log({report});
  return (
      <Container>
        <Content>
          <>
            <Title>{t('Buy car')}</Title>
            <Subtitle>{t('Check car report')}</Subtitle>
            <img src={require('../assets/car.png')} alt="car" width={200} />

            {report.loading && <LoadingOutlined />}
            {!report.loading && (
                <InputWrapper>
                  <Input
                      maxLength={8}
                      value={value}
                      onChange={({target: {value}}) => setValue(value)}
                      style={{fontWeight: 'bold', borderRadius: 25, maxWidth: 200}}
                  />
                  <CheckButton disabled={report.loading} onClick={() => getReport(value)}>{t('Check')}</CheckButton>
                </InputWrapper>
            )}
            {report.error && <Error>{report?.error?.message}</Error>}
            {report.data?.success && (
                <ShowButton onClick={() => setVisible(true)}>{t('Show report')}</ShowButton>
            )}
            <Modal visible={visible} closable={false} footer={null} onCancel={() => setVisible(false)}>
              <iframe title="CHECK-CAR REPORT" width="100%" height="500px" src={report.data?.reportUrl} />
            </Modal>
          </>
          <SalePrice>{t('Sale price')}{PRICE}₪</SalePrice>
          <ReportIncludes t={t} />
        </Content>
      </Container>
  )
}

export default FindCar;
