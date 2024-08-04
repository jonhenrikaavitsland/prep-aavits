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

  it('should save an object to localStorage', () => {
    const value = { test: 'test' };

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should save an array to localStorage', () => {
    const value = [1, 2, 3, 4];

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should save a string to localStorage', () => {
    const value = 'testString';

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should save a number to localStorage', () => {
    const value = 123;

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });

  it('should save a boolean to localStorage', () => {
    const value = true;

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
