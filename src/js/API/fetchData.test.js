import { fetchData } from './fetchData.js';

global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should call fetch with the correct URL and options', async () => {
    const url = 'https://api.example.com/data';
    const options = { method: 'GET' };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: 'test data' }),
    });

    await fetchData(url, options);

    expect(fetch).toHaveBeenCalledWith(url, options);
  });

  it('should throw an error if the fetch response is not ok', async () => {
    const url = 'https://api.example.com/data';
    const options = { method: 'GET' };

    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({}),
    });

    await expect(fetchData(url, options)).rejects.toThrow('404');
    expect(fetch).toHaveBeenCalledWith(url, options);
  });

  it('should throw an error if fetch encounters a network error', async () => {
    const url = 'https://api.example.com/data';
    const options = { method: 'GET' };

    fetch.mockRejectedValueOnce(new Error('Network Error'));

    await expect(fetchData(url, options)).rejects.toThrow('Network Error');
    expect(fetch).toHaveBeenCalledWith(url, options);
  });
});
