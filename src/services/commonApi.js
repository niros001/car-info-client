import {api} from './http';

const baseUrl = 'https://raverse.herokuapp.com/api/common';

export const contactUs = (data) => api({url: `${baseUrl}/contact-us`, method: 'POST', data, requireAuth: false});
