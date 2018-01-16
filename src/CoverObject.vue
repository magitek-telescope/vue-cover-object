<template lang="html">
  <div class="vue-cover-object" :style="coverStyle">
    <div class="vue-cover-object__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-cover-object',
  props: {
    width: {
      type: [Number, String],
      required: true
    },
    height: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    coverStyle () {
      const { width, height } = this
      return `
        width: ${isNaN(+width) ? width : `${width}px`};
        height: ${isNaN(+height) ? height : `${height}px`};
      `
    }
  }
}
</script>

<style scoped>
.vue-cover-object > .vue-cover-object__inner {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style media="screen">
.vue-cover-object > .vue-cover-object__inner > * {
  width: 100%;
  height: 100%;
}
</style>
