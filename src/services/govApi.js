import {api} from './http';

const baseUrl = 'https://check-car-report.herokuapp.com/api/gov';

export const getReport = () => api({url: `${baseUrl}/info`, method: 'POST', requireAuth: false});
