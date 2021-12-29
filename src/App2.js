import React, {useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import styled from 'styled-components';
import {Button, Menu} from 'antd';
import {useTranslation} from 'react-i18next';
import {
  SearchOutlined,
  ToolOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ContainerOutlined,
  MailOutlined} from '@ant-design/icons';
import './App.css';
import {SearchPage} from './components/SearchPage';
import {GaragesPage} from './components/GaragesPage';
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

const Header = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #F0F0F0;
`

const Content = styled.div`
  display: flex;
  flex: 1;
  //background-color: #282c34;
  overflow: hidden;
`

const PageWrapper = styled.div`
  display: flex;
  padding: 18px;
  overflow-y: auto;
  color: black;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #EEE;
  padding: 12px 24px;
  border-right: 1px solid #F0F0F0;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  border-top: 1px solid #F0F0F0;
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
  const [collapsed, setCollapsed] = useState(true);

  return (
      <Container>
        <Header>
          <Button type="primary" onClick={() => setCollapsed(!collapsed)} style={{height: '100%', width: 80, alignSelf: 'flex-start'}}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
          <LogoWrapper>
            <img src={logo} className="App-logo" alt="logo" />
            <b style={{fontSize: 12, color: 'black'}}>CAR-INFO</b>
          </LogoWrapper>
        </Header>
        <Content>
          <Menu
              style={{maxWidth: 'max-content', height: '100%'}}
              defaultSelectedKeys={['search-options']}
              defaultOpenKeys={[]}
              mode="inline"
              inlineCollapsed={collapsed}
          >
            <Menu.Item key="search-options" icon={<SearchOutlined />}>
              <Link to="/">{t('Search options')}</Link>
            </Menu.Item>
            <Menu.Item key="garage" icon={<ToolOutlined />}>
              <Link to="garage">{t('Garages')}</Link>
            </Menu.Item>
            <Menu.Item key="spare-price-list" icon={<ContainerOutlined />}>
              {t('Spare price list')}
            </Menu.Item>
            <Menu.SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </Menu.SubMenu>
            </Menu.SubMenu>
          </Menu>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<SearchPage />} />
              <Route path="garage" element={<GaragesPage />} />
            </Routes>
          </PageWrapper>
        </Content>
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
