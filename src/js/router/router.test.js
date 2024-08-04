import { router } from './router.js';

jest.mock('../pages/login.js', () => ({ __esModule: true, default: 'login' }));
jest.mock('../pages/404.js', () => ({ __esModule: true, default: '404' }));

describe('router function', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('should import login.js for path /', async () => {
    delete global.location;
    global.location = { pathname: '/' };

    const module = await router();

    expect(module.default).toBe('login');
  });

  it('should import login.js for path index.html', async () => {
    delete global.location;
    global.location = { pathname: 'index.html' };

    const module = await router();

    expect(module.default).toBe('login');
  });

  it('should import 404.js for unknown path', async () => {
    delete global.location;
    global.location = { pathname: '/unknown' };

    const module = await router();

    expect(module.default).toBe('404');
  });
});
