import { save } from './save.js';

describe('save', () => {
  let key;
  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
    };

    key = 'testKey';
    jest.clearAllMocks();
  });

  it('should call localStorage.setItem with the key and JSON stringified value', () => {
    const value = { test: 'test' };

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
