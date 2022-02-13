import {api} from './http';

const baseUrl = 'https://check-car-report.herokuapp.com/api/common';

export const contactUs = (data) => api({url: `${baseUrl}/contact-us`, method: 'POST', data, requireAuth: false});
