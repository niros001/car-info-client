import {api} from './http';

const baseUrl = 'http://localhost:2400/api/gov';

export const getReport = () => api({url: `${baseUrl}/info`, method: 'POST', requireAuth: false});
