import R from 'ramda';
import fetch from 'isomorphic-fetch';

const basicRequest = method => ({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  method,
});

export const handleResponse = response => {
  const contentType = response.headers.get('content-type');

  if (response.ok) {
    return (contentType && contentType.includes('application/json')) ?
      response.json() : response;
  }

  return { error: R.pick(['status', 'statusText'], response) };
};

const get = url => fetch(url, basicRequest('GET')).then(handleResponse);

export { get };
