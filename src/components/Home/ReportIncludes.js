import React, {useMemo} from 'react';
import styled from 'styled-components';
import {container} from '../common/styles';
import includes01Svg from '../../assets/includes01.svg'
import includes02Svg from '../../assets/includes02.svg'
import includes03Svg from '../../assets/includes03.svg'
import includes04Svg from '../../assets/includes04.svg'
import includes05Svg from '../../assets/includes05.svg'

const Container = styled.div`
  ${container};
  background-color: #555FDE;
  margin-top: 62.5px;
  @media(max-width: 540px) {
    margin-top: unset;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: unset;
  justify-content: center;
  align-items: center;
  @media(max-width: 540px) {
    flex-wrap: wrap;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -62.5px;
  @media(max-width: 540px) {
    margin-top: unset;
  }
`

const Icon = styled.img`
  width: 115px;
  height: 115px;
`

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  max-width: 90px;
  text-align: center;
  margin-top: -15px;
`
const ReportIncludes = ({t}) => {
  const includes = useMemo(() => [
    {src: includes05Svg, description: t('Checking the seller vehicle')},
    {src: includes03Svg, description: t('Official mortgage check')},
    {src: includes04Svg, description: t('Vehicle history from database')},
    {src: includes02Svg, description: t('Maintenance costs and red flags')},
    {src: includes01Svg, description: t('Impairment test and total loss')},
  ], [t])

  return (
      <Container>
        <Content>
          {includes.map(({src, description}, index) => (
              <Item key={index}>
                <Icon src={src} />
                <Text>{description}</Text>
              </Item>
          ))}
        </Content>
      </Container>
  );
}

export default ReportIncludes;
