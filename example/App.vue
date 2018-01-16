<template>
  <div id="app">
    <cover-object :width="100" :height="100">
      <img src="https://github.com/potato4d.png" alt="">
    </cover-object>
  </div>
</template>

<script>
import CoverObject from '../src'

export default {
  components: {
    CoverObject
  }
}
</script>
