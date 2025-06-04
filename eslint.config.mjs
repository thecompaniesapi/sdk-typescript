// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    ignores: ['sdks/typescript/src/openapi.ts'],
    pnpm: true,
    rules: {
      'pnpm/json-enforce-catalog': 'off',
      'ts/explicit-function-return-type': 'off',
      'no-console': ['warn', { allow: ['warn', 'error', 'log'] }],
    },
  },
)
