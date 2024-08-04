import { save } from './store.mjs';

describe('save', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(Storage.prototype, 'setItem');
  });

  it('should save an object to localStorage', () => {
    const key = 'testKey';
    const value = { foo: 'bar' };

    save(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value));
  });
});
