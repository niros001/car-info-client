import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {FindCar, AdditionalInfo, ContactUs, ReportViewer, ReportIncludes} from './';
import {connect} from 'react-redux';
import {commonActions} from '../../store/actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = ({getReport, report}) => {
  const {t} = useTranslation();
  return (
      <Container>
        <FindCar getReport={getReport} report={report} />
        <ReportIncludes t={t} />
        <AdditionalInfo t={t} />
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  );
}

export default connect(({common: {report}}) => ({report}), commonActions)(Home);
