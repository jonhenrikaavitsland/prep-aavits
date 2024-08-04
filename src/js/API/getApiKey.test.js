import { load } from '../storage/load';
import { fetchData } from './fetchData';
import { getApiKey } from './getApiKey';

jest.mock('./fetchData.js');
jest.mock('../storage/load.js');

describe('getApiKey', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetchData with the correct parameters and return the expected data', async () => {
    const mockToken = 'mocked_token';
    const mockResponse = { key: 'api_key' };

    load.mockReturnValue(mockToken);
    fetchData.mockResolvedValue(mockResponse);

    const data = await getApiKey();

    expect(load).toHaveBeenCalledWith('token');
    expect(fetchData).toHaveBeenCalledWith('/url.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockToken}`,
      },
      body: JSON.stringify({
        name: 'Test key',
      }),
    });
    expect(data).toEqual(mockResponse);
  });

  it('should handle fetchData error correctly', async () => {
    const mockToken = 'mocked_token';
    const mockError = new Error('Fetch failed');

    load.mockReturnValue(mockToken);
    fetchData.mockRejectedValue(mockError);

    await expect(getApiKey()).rejects.toThrow('Fetch failed');

    expect(load).toHaveBeenCalledWith('token');
    expect(fetchData).toHaveBeenCalledWith('/url.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${mockToken}`,
      },
      body: JSON.stringify({
        name: 'Test key',
      }),
    });
  });
});
