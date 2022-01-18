import React, {useMemo} from 'react';
import styled from 'styled-components';
import {ArrowRightOutlined} from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
`

const Button = styled.div`
  background: linear-gradient(270deg, #4A16A5 0%, #E451C1 50%);
  width: 100%;
  border-radius: 25px;
  padding: 6px 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`

const UnderlineText = styled.div`
  font-size: 16px;
  color: #4D46B1;
  border-bottom: 1px solid #FED294;
`

const ReportViewer = ({t}) => {

  return (
      <Container>
        <Button>{t('Enter a vehicle number - btn')}</Button>
        <img src={require('../assets/phone.png')} alt="phone" width={250}/>
        <UnderlineText>{t('How report looks')}?</UnderlineText>
      </Container>
  );
}

export default ReportViewer;
