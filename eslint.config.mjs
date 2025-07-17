// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    ignores: ['src/openapi.ts'],
    pnpm: true,
    rules: {
      'pnpm/json-enforce-catalog': 'off',
      'ts/explicit-function-return-type': 'off',
    },
  },
)
