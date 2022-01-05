import {api} from './http';

const baseUrl = 'http://localhost:2400/api/auth'

export const login = (data) => api({url: `${baseUrl}/login`, method: 'POST', data})
    .then((resp) => ({...resp, ...data}))

export const signup = (data) => api({url: `${baseUrl}/signup`, method: 'POST', data})
    .then((resp) => ({...resp, ...data}))

export const resetPassword = (data) => api({url: `${baseUrl}/recover`, method: 'POST', data})
