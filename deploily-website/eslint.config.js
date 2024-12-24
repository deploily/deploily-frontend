// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"), {
    ignores: ["node_modules/", "dist/", "coverage/", ".next/*", "out/"],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    }
  }
]

export default configs
