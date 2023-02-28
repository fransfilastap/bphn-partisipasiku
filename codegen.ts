import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://0.0.0.0:1337/graphql/': {
        headers: {
          Authorization: `Bearer ff48d7af3c495fd8de284b7ddb99fe88f2033e3a1ac709603a9bfb0402559dac413c5fd7ba06b70ed528924ee4c875902df1c9df8738cf640d87c826914924ab66c8686f8c1f0defcfdfa6813bae139284aa539e5b5375cd19af74a24694a3724a1627adf9082866c97372e29372bcc736835ae6a127bd195528f2049ac2c04a`,
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
