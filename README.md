# vue-cover-object

[![NPM version](https://img.shields.io/npm/v/vue-cover-object.svg?style=flat)](https://npmjs.com/package/vue-cover-object) [![NPM downloads](https://img.shields.io/npm/dm/vue-cover-object.svg?style=flat)](https://npmjs.com/package/vue-cover-object) [![CircleCI](https://circleci.com/gh/potato4d/vue-cover-object/tree/master.svg?style=shield)](https://circleci.com/gh/potato4d/vue-cover-object/tree/master)

Simple object-fit wrapper component for Vue.js.

## Install

```bash
yarn add vue-cover-object
```


## Usage

```vue
<template>
  <cover-object :width="100" :height="100">
    <img src="https://github.com/potato4d.png" alt="">
  </cover-object>
</template>

<script>
import CoverObject from 'vue-cover-object'

export default {
  components: {
    CoverObject
  }
}
</script>
```

## License

MIT &copy; [potato4d](https://github.com/potato4d)
