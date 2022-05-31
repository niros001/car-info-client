import React from 'react';
import styled from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';
import {Info} from './styles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 10px
`

const CheckmarkInfo = ({children}) => (
    <Container>
      <CheckOutlined style={{color: '#555FDE', margin: '0 5px'}} />
      <Info>{children}</Info>
    </Container>
)

export default CheckmarkInfo
