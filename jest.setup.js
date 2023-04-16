import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';
import { server } from '@/mocks/server';

process.env.NEXT_PUBLIC_API_BASE_URL = 'http://localhost:8080/api';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// silence console error
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Error: Server Error/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});


