# Авиамассаж

Одностраничный сайт массажиста Надежды Смирновой.
Разметка — `index.html`, стили — SCSS (`style/style.scss`), данные — ES-модули в `data/`.

## Требования

- Node.js 20 или новее
- npm

## Разработка

```bash
npm install
npm run dev
```

`npm run dev` запускает одновременно:

- компиляцию SCSS в CSS в режиме наблюдения (`sass --watch`);
- локальный dev-сервер browser-sync, который сам обновляет страницу
  при изменении HTML, CSS и JS.

CSS подменяется без перезагрузки страницы, HTML и JS — с перезагрузкой.
Сайт использует ES-модули, поэтому открывать `index.html` напрямую из файловой
системы нельзя: нужен HTTP-сервер (его поднимает `npm run dev`).

## Команды

| Команда              | Что делает                                    |
| -------------------- | --------------------------------------------- |
| `npm run dev`        | Наблюдение за SCSS + dev-сервер               |
| `npm run sass:build` | Разовая сборка `style/style.css` и source map |
| `npm run sass:watch` | Только компиляция SCSS в режиме наблюдения    |
| `npm run serve`      | Только dev-сервер browser-sync                |

Скомпилированные `style/style.css` и `style/style.css.map` хранятся в
репозитории: сайт работает и без сборки, а CI проверяет, что CSS свежий.

## Проверки

```bash
npm run check:css    # CSS собран из актуального SCSS
npm run lint         # ESLint + Stylelint + html-validate
npm run format:check # Prettier
npm run audit        # npm audit --audit-level=high
```

Полный набор выполняется одной командой:

```bash
npm run check:css && npm run lint && npm run format:check && npm run audit
```

## Разработка и деплой

CI/CD настроен в `.github/workflows/ci-cd.yml`.

- При push в `master` и при pull request запускается job `quality`:
  свежесть CSS, линтеры, проверка форматирования и `npm audit`.
- Деплой (job `deploy`) выполняется только после успешного `quality`
  и только для push в `master`. Сайт собирается в `_site/` командой
  `npm run build:site` и публикуется на GitHub Pages.
- Источник GitHub Pages — **GitHub Actions**
  (Settings → Pages → Source). Публикация из ветки должна быть отключена,
  иначе проверки не смогут заблокировать деплой.
- Для `master` рекомендуется branch protection: обязательный статус
  `quality` и запрет force-push.
- CodeQL включается в Settings → Code security (Default setup).
  Secret scanning и push protection включаются там же.
- Dependabot (`.github/dependabot.yml`) раз в неделю обновляет npm-пакеты
  и GitHub Actions, объединяя minor/patch-обновления в группы.
- `dependency-review` проверяет новые зависимости в pull request.

Откат: `git revert` проблемного коммита и push в `master` либо перезапуск
предыдущего успешного деплоя в Actions.
