import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
    ignores: [
      "**/dist/**",          // Ignora toda la carpeta dist
      "**/.astro/**",          // Ignora toda la carpeta .astro
      "**/node_modules/**",  // Ignora node_modules (ya incluido por defecto pero por si acaso)
      "**/*.astro.mjs",      // Ignora archivos específicos de compilación de Astro
      "**/*.astro.js"        // Ignora más archivos de compilación
    ]
  },
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
    plugins: { js }, extends: ["js/recommended"], 
    languageOptions: { globals: {...globals.browser, ...globals.node} } 
  },
  tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{jsx,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: { react: { version: "detect" } },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    }
  }
]);
