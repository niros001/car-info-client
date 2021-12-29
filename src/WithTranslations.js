import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {ConfigProvider} from 'antd';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {commonActions} from './store/actions';
import resources from './translations';

i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    })
    .then(() => console.log('Translations loaded successfully!'))
    .catch((err) => console.error({err}))

const WithTranslations = ({children, language, changeLanguage}) => {
  const [dir, setDir] = useState(i18n.dir());

  const onChangeLanguage = useCallback((lang) => {
    i18n.changeLanguage(lang).then(() => {
      localStorage.setItem('lang', lang);
      setDir(i18n.dir());
    });
  }, []);

  useEffect(() => {
    changeLanguage(localStorage.getItem('lang') || i18n.language);
  }, [changeLanguage])

  useEffect(() => {
    if (language) {
      onChangeLanguage(language);
    }
  }, [onChangeLanguage, language]);

  return (
      <ConfigProvider direction={dir}>
        {children}
      </ConfigProvider>
  )
}
export default connect(({common: {language}}) => ({language}), commonActions)(WithTranslations);
