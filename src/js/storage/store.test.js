import { save } from './store.js';

describe('save', () => {
  let setItemSpy;

  beforeEach(() => {
    global.localStorage = {
      setItem: jest.fn(),
      getItem: jest.fn(),
      clear: jest.fn(),
    };

    setItemSpy = jest.spyOn(global.localStorage, 'setIem');

    jest.clearAllMocks();
  });

  it('should save an object to localStorage', () => {
    const key = 'testKey';
    const value = { test: 'test' };

    save(key, value);

    expect(setItemSpy).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
