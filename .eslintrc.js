module.exports = {
    // Настройки проекта
    env: {
        // Проект для браузера
        browser: true,
        // Включаем возможности ES6
        es6: true,
        // Добавляем возможности ES2017
        es2017: true,
    },
    // Наборы правил
    extends: [
        // Базовый набор правил eslint
        'eslint:recommended',
        // Набор правил для React
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        // Отключаем правила из базового набора
        'plugin:@typescript-eslint/eslint-recommended',
        // Базовые правила для TypeScript
        'plugin:@typescript-eslint/recommended',
        // Правила TS, требующие инфо о типах
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Prettier
        'prettier',
        'plugin:prettier/recommended',
    ],
    // Движок парсинга
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // Движку нужен проект TS для правил с типами
        project: 'tsconfig.json',
        tsconfigRootDir: '.',
    },
    // Плагин с наборами правил для TypeScript
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    rules: {
        'react/self-closing-comp': [
            'error',
            {
                'component': true,
                'html': true,
            },
        ],
        'react/no-unknown-property': [
            'error',
            {
                ignore: ['test-id', 'unselectable'],
            },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'eqeqeq': ['error', 'always'],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        'prettier/prettier': [
            'error',
            {
                'endOfLine': 'auto',
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
