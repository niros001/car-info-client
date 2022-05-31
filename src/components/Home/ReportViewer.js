import React from 'react';
import styled from 'styled-components';
import {container} from '../common/styles';
import reportDesktopPng from '../../assets/report_desktop.png'
import reportMobilePng from '../../assets/report_mobile.png'

const Container = styled.div`
  ${container};
  padding: 0;
  background-color: #555FDE;
`

const Content = styled.div`
  position: relative;
  .desktop-view {
    display: unset;
  }
  .mobile-view {
    display: none;
  }
  @media(max-width: 540px) {
    .desktop-view {
      display: none;
    }
    .mobile-view {
      display: unset;
    }
  }
`

const Img = styled.img`
  width: 100%;
`

const DesktopFloatText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 70%;
`

const MobileFloatText = styled(DesktopFloatText)`
  top: 20%;
  left: 50%;
  text-align: center;
`

const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 12px;
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1AE5BE;
  color: #1F2737;
  width: 90px;;
  height: 30px;
  border-radius: 15px;
  font-size: 12px;
  cursor: pointer;
`

const ReportViewer = ({t}) => (
    <Container>
      <Content>
        <div className="desktop-view">
          <Img src={reportDesktopPng} alt="report" />
          <DesktopFloatText>
            <Title>{t('How report looks')}</Title>
            <Button>{t('Show report')}</Button>
          </DesktopFloatText>
        </div>
        <div className="mobile-view">
          <Img src={reportMobilePng} alt="report" />
          <MobileFloatText>
            <Title>{t('How report looks').replace(' - ', ' ')}</Title>
            <Button>{t('Show report')}</Button>
          </MobileFloatText>
        </div>
      </Content>
    </Container>
)

export default ReportViewer;
