import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/sdk',
  ],
  declaration: 'node16',
  clean: true,
  rollup: {
    inlineDependencies: [
      '@antfu/utils',
    ],
  },
})
