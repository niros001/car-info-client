import {api} from './http';

const baseUrl = 'https://check-car-report.herokuapp.com/api/gov';

export const getReport = (carNumber) => api({url: `${baseUrl}/info`, method: 'POST', data: {carNumber}, requireAuth: true});
