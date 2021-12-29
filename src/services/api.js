import {api} from './http';

export const getVehicleInfo = (request) => api({...request, resource_id: '053cea08-09bc-40ec-8f7a-156f0677aff3'});

export const getGarageInfo = (request) => api({...request, resource_id: 'bb68386a-a331-4bbc-b668-bba2766d517d'});
