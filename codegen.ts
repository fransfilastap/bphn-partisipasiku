import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://0.0.0.0:1337/graphql/': {
        headers: {
          Authorization: `Bearer b02eaf7f89ac94f666b8084de585bce096c5287475f372a087646b346a63db640c990906d0ba67ad1c24fb5dffd6c5635f82144a9571f62c2cfa0b1f0159532064219b707cb41fe0c0e6819334c71f513514352d981b5d407ff167e0fe57448401b8571d1f78728deb90805162b2479f1004be21458a6f296214b95ddab68181`,
        },
      },
    },
  ],
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
