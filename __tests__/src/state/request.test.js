jest.mock('isomorphic-fetch', () => jest.fn(() => Promise.reject()));

import fetch from 'isomorphic-fetch';
import { get } from '../../../src/state/request';

describe('Request', () => {
  test('should call fetch with GET method', () => {
    const url = '/api/people';
    get(url);
    expect(fetch).toBeCalledWith(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    });
  });
});
