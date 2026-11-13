import js from "@eslint/js";
import globals from "globals";
import security from "eslint-plugin-security";
import noUnsanitized from "eslint-plugin-no-unsanitized";

export default [
    {
        ignores: ["node_modules/**", "_site/**"],
    },
    js.configs.recommended,
    security.configs.recommended,
    {
        files: ["scripts/**/*.js", "data/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            "no-unsanitized": noUnsanitized,
        },
        rules: {
            "no-unsanitized/method": "error",
            "no-unsanitized/property": "error",
            eqeqeq: ["error", "always"],
            "prefer-const": "error",
            "no-var": "error",
        },
    },
];
