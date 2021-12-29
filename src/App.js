import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Tabs} from 'antd';
import {useTranslation} from 'react-i18next';
import {SearchOutlined, ToolOutlined, AndroidOutlined} from '@ant-design/icons';
import './App.css';
import {SearchPage} from './components/SearchPage';
import {GaragesPage} from './components/GaragesPage';
import CreditCard from './components/Payments/CreditCard';
import {User} from './components/Authentication';
import logo from './logo.svg'
import il_flag from './assets/flags-4x3/il.svg';
import fr_flag from './assets/flags-4x3/fr.svg';
import us_flag from './assets/flags-4x3/us.svg';
import {connect} from 'react-redux';
import {commonActions} from './store/actions';

const flags = {
  en: us_flag,
  fr: fr_flag,
  he: il_flag,
}

const supportedLanguages = ['en', 'fr', 'he'];

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #EEE;
  padding: 12px 18px;
  border-right: 1px solid #F0F0F0;
`

const StyledTabs = styled(Tabs)`
  display: flex;
  flex: 1; 
  .ant-tabs-content-holder {
    overflow-y: auto;
  }
`

const Tab = styled.span`
  padding: 16px 50px;
`

const TabContent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0 16px 16px;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  border-top: 1px solid #F0F0F0;
  background-color: #282c34;
`

const FlagIcon = styled.img`
  width: 32px;
  margin: 13px 5px;
  cursor: pointer;
  opacity: ${({selected}) => selected ? 1 : .5};
  transition: opacity .3s;
  :hover {
    opacity: 1;
  }
`;

const App = ({language, changeLanguage}) => {
  const {t} = useTranslation();

  const menu = useMemo(() => [
    {icon: <SearchOutlined />, name: t('Search options'), component: <SearchPage />},
    {icon: <ToolOutlined />, name: t('Garages'), component: <GaragesPage />},
    {icon: <AndroidOutlined />, name: t('Spare price list'), component: <div>
        <CreditCard />
      </div>},
  ], [t])

  return (
      <Container>
        <StyledTabs defaultActiveKey="0" size="large" tabBarExtraContent={{left: (
              <LogoWrapper>
                <img src={logo} className="App-logo" alt="logo" />
                <b style={{fontSize: 12}}>CAR-INFO</b>
              </LogoWrapper>
          )
          // , right: <User />
        }}>
          {menu.map(({icon, name, component}, index) => (
              <Tabs.TabPane
                  key={index}
                  tab={(<Tab>{icon}{name}</Tab>)}
              >
                <TabContent>
                  {component}
                </TabContent>
              </Tabs.TabPane>
          ))}
        </StyledTabs>
        <Footer>
          {supportedLanguages.map((lang) => {
            return (
                <FlagIcon
                    key={lang}
                    src={flags[lang]}
                    alt={flags[lang]}
                    selected={lang === language}
                    onClick={() => changeLanguage(lang)}
                />
            )
          })}
        </Footer>
      </Container>
  );
}

export default connect(({common: {language}}) => ({language}), commonActions)(App);
