import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://0.0.0.0:1337/graphql/': {
        headers: {
          Authorization: `Bearer 7211442e088f9addfbc51161acef88a262d4cf11cf1b45caa79dfc3d1c8ba95bfdc111f21a05615fae745230ee37e658a65a0af403454d05d3ebdef614c4c540e269073483d71f3e66bd2ba01f71039bf43959246dee218c0a8e219d8a1ea9a1c97ad2ca0390b056015439e7204c6f0cfab697e689e31cb603a5b6f66b8986fe`,
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
