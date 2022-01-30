import React from 'react';
import {useTranslation} from 'react-i18next';
import {Divider, Drawer} from 'antd';
import {Link} from 'react-router-dom';
import {User} from './Authentication';
import us_flag from '../assets/flags-4x3/us.svg';
import il_flag from '../assets/flags-4x3/il.svg';


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
        <User />
        <Divider />
        <p onClick={() => changeLanguage('en')}>
          <img src={us_flag} alt={'us_flag'} height={20} style={{marginLeft: 5}} />
        </p>
        <p onClick={() => changeLanguage('he')}>
          <img src={il_flag} alt={'il_flag'} height={20} style={{marginLeft: 5}} />
        </p>
        <Divider />
        <Link to="/reports-history">{t('Show reports history')}</Link>
        <Divider />
      </Drawer>
  )
}

export default DrawerSettings;
