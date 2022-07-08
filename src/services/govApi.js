import {api} from './http';

const baseUrl = 'https://raverse.herokuapp.com/api/gov';

export const getReport = (carNumber, ownerId, ownerDate) => api({url: `${baseUrl}/info`, method: 'POST', data: {carNumber, ownerId, ownerDate}, requireAuth: true});
export const getHistoryReports = () => api({url: `${baseUrl}/get-reports`, method: 'GET', requireAuth: true});
export const testBot = () => api({url: `${baseUrl}/test-bot`, method: 'GET', requireAuth: false});
