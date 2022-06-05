import React from 'react';
import {useTranslation} from 'react-i18next';
import {Divider, Drawer, Button} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {User} from './Authentication';
import us_flag from '../assets/flags-4x3/us.svg';
import il_flag from '../assets/flags-4x3/il.svg';
import {testBot} from '../services/govApi';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const DrawerSettings = ({visible, onClose, changeLanguage}) => {
  const {t, i18n} = useTranslation();
  return (
      <Drawer
          title={t('Drawer title')}
          width={250}
          placement={i18n.dir() === 'rtl' ? 'right' : 'left'}
          onClose={onClose}
          visible={visible}
      >
        <Column>
          <User />
          <Divider />
          <p onClick={() => changeLanguage('en')}>
            <img src={us_flag} alt={'us_flag'} height={20} style={{marginLeft: 5}} />
          </p>
          <p onClick={() => changeLanguage('he')}>
            <img src={il_flag} alt={'il_flag'} height={20} style={{marginLeft: 5}} />
          </p>
          <Divider />
          <Link to="/" onClick={onClose}>{t('Main page')}</Link>
          <Divider />
          <Link to="/why" onClick={onClose}>{t('Why-menu')}</Link>
          <Divider />
          <Link to="/handicapped" onClick={onClose}>{t('Handicapped-menu')}</Link>
          <Divider />
          <Link to="/curved-vehicle" onClick={onClose}>{t('Curved vehicle-menu')}</Link>
          <Divider />
          <Link to="/recall" onClick={onClose}>{t('Recall-menu')}</Link>
          <Divider />
          <Link to="/reports-history" onClick={onClose}>{t('Show reports history')}</Link>
          <Divider />
          <Button onClick={testBot}>Test Bot</Button>
          <Divider />
        </Column>
      </Drawer>
  )
}

export default DrawerSettings;
