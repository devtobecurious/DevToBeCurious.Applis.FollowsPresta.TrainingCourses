import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    include: [
      'projects/**/src/**/*.spec.ts'
    ],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        '**/public-api.ts'
      ]
    }
  },
  resolve: {
    alias: {
      'dtbc-core': path.resolve(__dirname, './projects/dtbc-core/src/public-api.ts'),
      'training-sessions': path.resolve(__dirname, './projects/training-sessions/src/public-api.ts')
    }
  }
});
