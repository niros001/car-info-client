import {api} from './http';

const baseUrl = 'https://data.gov.il/api/3/action/datastore_search';

export const getVehicleInfo = ({limit, q}) => api({url: `${baseUrl}?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=${limit || 1}&q=${q || ''}`, method: 'GET', requireAuth: false});

export const getGarageInfo = ({limit, q}) => api({url: `${baseUrl}?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=${limit || 1}&q=${q || ''}`, method: 'GET', requireAuth: false});
