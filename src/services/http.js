const getHeaders = (method, requireAuth) => {
  let base = {Accept: 'application/json'}
  if (method === 'POST') {
    base = {...base, 'Content-type': 'application/json'}
  }
  if (requireAuth) {
    base = {...base, 'Authorization': `Bearer ${localStorage.getItem('token')}`}
  }
  return base;
}

export const api = ({url, method, data, requireAuth}) => fetch(url, {
  method,
  headers: getHeaders(method, requireAuth),
  body: JSON.stringify(data),
})
    .then(async (r) => {
      if (r.status !== 200) {
        const json = await r.json();
        throw new Error(json.error);
      }
      return r.json();
    })
    .then((r) => r)
