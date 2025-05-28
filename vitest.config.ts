import process from 'node:process'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig(
  ({ mode }) => ({
    test: {
      include: ['sdks/**/*.test.ts'],
      server: {
        deps: {
          inline: ['vitest-package-exports'],
        },
      },
      env: {
        TCA_API_KEY: process.env.TCA_API_KEY,
        TCA_API_URL: process.env.TCA_API_URL,
        ...loadEnv(mode, process.cwd(), ''),
      },
    },
  }),
)
