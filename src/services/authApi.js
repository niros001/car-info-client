import {api} from './http';

const baseUrl = 'https://raverse.herokuapp.com/api/auth'

export const login = (data) => api({url: `${baseUrl}/login`, method: 'POST', data})
    .then((resp) => ({...resp, ...data}))

export const signup = (data) => api({url: `${baseUrl}/signup`, method: 'POST', data})
    .then((resp) => ({...resp, ...data}))

export const resetPassword = (data) => api({url: `${baseUrl}/recover`, method: 'POST', data})

export const setPassword = (token, data) => api({url: `${baseUrl}/reset/${token}`, method: 'POST', data})
