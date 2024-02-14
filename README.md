# Vue-шаблон

Шаблон предназначен для разработки веб-приложений с использованием [Vite](https://vitejs.dev/) и [Vue 3](https://vuejs.org/).

## 🛠️ Минимальные требования

Для начала работы, убедитесь, что у вас установлены следующие компоненты:

- [Node.js](https://nodejs.org/en/) версии `18.19.0` или [Bun](https://bun.sh/) версии `1.0.26`
- Если используется Node.js: [Yarn](https://yarnpkg.com/) версии `4.1.0` или [NPM](https://www.npmjs.com/) версии `10.2.3`
- Интегрированная среда разработки (IDE) такая как [WebStorm](https://www.jetbrains.com/webstorm/) или [VSCode](https://code.visualstudio.com/)
- Рекомендуемые расширения для VSCode:
	- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
    - [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## 🚀 Начало работы

Чтобы приступить к работе, выполните следующие шаги:

1. Создайте новый репозиторий, используя опцию `Use this template` на GitHub, а затем склонируйте его на свой компьютер.
2. Скопируйте файл `.env.example` с названием `.env` в корне проекта и заполните его.
3. Используйте предпочитаемый вами пакетный менеджер.

### Установка зависимостей

Выберите подходящий для вас вариант установки зависимостей:

```
npm install
yarn install
bun install
```

### Запуск проекта в dev-режиме

Запустите проект в режиме разработки с помощью одной из следующих команд:

```
npm run dev
yarn dev
bun run dev
```

### Сборка проекта с проверкой типизации

Для сборки проекта с проверкой типов, используйте одну из команд:

```
npm run build
yarn build
bun run build
```

### Запуск собранного проекта

После сборки проекта, запустите его с помощью одной из команд:

```
npm run preview
yarn preview
bun run preview
```

### Сборка проекта без проверки типизации

Для сборки проекта без проверки типов, используйте одну из команд:

```
npm run build-only
yarn build-only
bun run build-only
```

### Проверка типизации

Выполните проверку типов с помощью одной из следующих команд:

```
npm run type-check
yarn type-check
bun run type-check
```

### Дополнительная проверка кода

Для выполнения проверок кода с помощью ESLint, используйте одну из команд:

```
npm run lint
yarn lint
bun run lint
```

### Форматирование кода

Для выполнения форматирования кода с помощью Prettier, используйте одну из команд:

```
npm run format
yarn format
bun run format
```

## 🔧 Используемые технологии

Этот шаблон включает в себя следующие технологии:

- [Vue.js](https://vuejs.org/) — удобный, производительный и универсальный фреймворк для создания пользовательских веб-интерфейсов.
- [Vue Router](https://router.vuejs.org/) — официальная библиотека маршрутизации для Vue.js.
- [Pinia](https://pinia.vuejs.org/) — библиотека для управления состояниями во Vue.js.
- [axios](https://axios-http.com/) — это библиотека, основанная на Promise для работы с API
- [Sass](https://sass-lang.com/) — CSS-препроцессор.
- [ESLint](https://eslint.org/) — инструмент анализа кода для выявления и исправления проблем в JavaScript коде.
- [Prettier](https://prettier.io/) — инструмент для автоматического форматирования кода.
