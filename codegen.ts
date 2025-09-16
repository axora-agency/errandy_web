import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `http://localhost:3001/graphql`,
  documents: ["src/graphql/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/gql/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
      plugins: [],
      config: {
        useTypeImports: true,   // 👈 important with TS 5.5+
        enumsAsTypes: true,     // 👈 this forces unions instead of enums
      },
    },
  },
};

export default config;
