import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://0.0.0.0:1337/graphql/': {
        headers: {
          Authorization: `Bearer 93814a4d4412837c18fdc954e607be0094b22a254a5164ce5404f1870e019bb03f214b2b6a924460e5cb6c2807846e775d2f6eefed8b0e37960bb9b48530d44e182beeb690512d8490f8eaaf0a297527021796c82b87d04302607be03ef3e666f3614edf94d172df95c1d138c0ded1fada2881365d73fa8422a1bbcf9b04ce06`,
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
