import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/sdk',
    'src/utils',
    'src/schema',
  ],
  declaration: 'node16',
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
