import { type Config } from "prettier";

const config: Config = {
  semi: true,
  printWidth: 100,
  singleQuote: false,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: "always",
  trailingComma: "all",
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: [
    "^\\u0000", // Importaciones de side-effect (ej: import "dotenv/config")
    "^node:", // Dependencias nativas de Node.js
    "<THIRD_PARTY_MODULES>", // Dependencias externas
    "^@productify/init/",
    "^@productify/", // Rutas absolutas
    "^[./]", // Rutas relativas
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
};

export default config;
