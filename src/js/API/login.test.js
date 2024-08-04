import { save } from '../storage/save.js';
import { login } from './login.js';

jest.mock('../storage/save.js');

global.fetch = jest.fn();

describe('login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call fetch with the correct parameters and save the token and profile when the response is OK', async () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    const mockResponse = {
      data: {
        accessToken: 'mocked_access_token',
        id: 1,
        name: 'Test User',
        email: mockEmail,
      },
    };

    fetch.mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    const profile = await login(mockEmail, mockPassword);

    expect(fetch).toHaveBeenCalledWith('/', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({ email: mockEmail, password: mockPassword }),
    });

    expect(save).toHaveBeenCalledWith('token', 'mocked_access_token');

    expect(save).toHaveBeenCalledWith('profile', {
      id: 1,
      name: 'Test User',
      email: mockEmail,
    });

    expect(profile).toEqual({
      id: 1,
      name: 'Test User',
      email: mockEmail,
    });
  });

  it('should throw an error when the response is not OK', async () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';

    fetch.mockResolvedValue({
      ok: false,
      status: 401,
    });

    await expect(login(mockEmail, mockPassword)).rejects.toThrow('401');

    expect(fetch).toHaveBeenCalledWith('/', {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      method: 'POST',
      body: JSON.stringify({ email: mockEmail, password: mockPassword }),
    });
    expect(save).not.toHaveBeenCalled();
  });
});
