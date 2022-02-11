import React, {useMemo} from 'react';
import styled from 'styled-components';
import includes01Svg from '../../assets/includes01.svg'
import includes02Svg from '../../assets/includes02.svg'
import includes03Svg from '../../assets/includes03.svg'
import includes04Svg from '../../assets/includes04.svg'
import includes05Svg from '../../assets/includes05.svg'
import includes06Svg from '../../assets/includes06.svg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 12px;
  background-color: #1AE5BE;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`

const Icon = styled.img`
  width: 120px;
  height: 120px;
`

const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #1F2737;
  max-width: 120px;
  text-align: center;
  margin-top: -15px;
`
const ReportIncludes = ({t}) => {
  const includes = useMemo(() => [
    {src: includes01Svg, description: t('Impairment test and total loss')},
    {src: includes02Svg, description: t('Maintenance costs and red flags')},
    {src: includes03Svg, description: t('Official mortgage check')},
    {src: includes04Svg, description: t('Vehicle history from database')},
    {src: includes05Svg, description: t('Checking the seller vehicle')},
    {src: includes06Svg, description: t('Checking vehicle costs')},
  ], [t])

  return (
      <Container>
        {includes.map(({src, description}, index) => (
            <Item key={index}>
              <Icon src={src} />
              <Text>{description}</Text>
            </Item>
        ))}
      </Container>
  );
}

export default ReportIncludes;
