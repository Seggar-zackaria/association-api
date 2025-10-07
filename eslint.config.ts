import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    {
        linterOptions: {
            reportUnusedDisableDirectives: 'error',
        },
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['src/**/*.ts'],
        extends: [
            ...tseslint.configs.recommended,
        ],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
            },
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_'
                },
            ],
        },
    },

    prettierConfig
);