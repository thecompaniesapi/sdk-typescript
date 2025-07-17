import process from 'node:process'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'

export default defineConfig(
  ({ mode }) => ({
    test: {
      include: ['src/sdk.test.ts'],
      server: {
        deps: {
          inline: ['vitest-package-exports'],
        },
      },
      env: loadEnv(mode, process.cwd(), ''),
    },
  }),
)
