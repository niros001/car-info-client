import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {FindCar, AdditionalInfo, Refund, ContactUs, ReportViewer, ReportIncludes} from './';
import {connect} from 'react-redux';
import {commonActions} from '../../store/actions';
import {Responsive} from '../common';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = ({getReport, report}) => {
  const {t} = useTranslation();
  return (
      <Container>
        <Responsive>
          <FindCar getReport={getReport} report={report} />
          <ReportIncludes t={t} />
          <AdditionalInfo t={t} />
          <Refund t={t} />
          <ReportViewer t={t} />
          <ContactUs t={t} />
        </Responsive>
      </Container>
  );
}

export default connect(({common: {report}}) => ({report}), commonActions)(Home);
