import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {FindCar, AdditionalInfo, Refund, ContactUs, ReportViewer} from './';
import {connect} from 'react-redux';
import {commonActions} from '../../store/actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Home = ({getReport, report}) => {
  const {t} = useTranslation();

  return (
      <Container>
        <FindCar getReport={getReport} report={report} />
        <AdditionalInfo t={t} />
        <Refund t={t} />
        <ReportViewer t={t} />
        <ContactUs t={t} />
      </Container>
  );
}

export default connect(({common: {report}}) => ({report}), commonActions)(Home);
