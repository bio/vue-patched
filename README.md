# vue-patched

A security-patched version of Vue 2.7.16 to fix the prototype pollution XSS vulnerability (CVE-2024-6783) and the ReDoS vulnerability (CVE-2024-9506).

Vue 2 is end-of-life and no longer receives official security updates. This package provides patched runtime and full (compiler-included) builds.

> Based on [vuejs/vue@v2.7.16](https://github.com/vuejs/vue/tree/v2.7.16). Prefer migrating to Vue 3 when you can.

## Installation

Installs under the original `vue` name so `require('vue')` / `import Vue from 'vue'` and peer dependencies keep working.

#### npm

```sh
npm install vue@npm:vue-patched@2.7.16-patch.2
```

#### pnpm

```sh
pnpm add vue@npm:vue-patched@2.7.16-patch.2
```

#### Yarn

```sh
yarn add vue@npm:vue-patched@2.7.16-patch.2
```

## Related

If you compile `.vue` SFCs or templates at build time (`vue-loader`, etc.), also replace `vue-template-compiler` with [vue-template-compiler-patched](https://github.com/bio/vue-template-compiler-patched).

## CDN / full build

```html
<script src="https://unpkg.com/vue-patched@2.7.16-patch.2/dist/vue.js"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/vue-patched@2.7.16-patch.2/dist/vue.js"></script>
```

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2013-present, Yuxi (Evan) You
