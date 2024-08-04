import { load } from './load.js';

describe('load', () => {
  let key;

  beforeEach(() => {
    global.localStorage = {
      getItem: jest.fn().mockReturnValue('{}'),
    };

    key = 'testKey';
    jest.clearAllMocks();
  });

  it('should call localStorage.getItem with the correct key', () => {
    load(key);

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });
});
