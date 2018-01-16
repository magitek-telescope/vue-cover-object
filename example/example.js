export const ENTRY = `// in Your .vue file...
<script>
import CoverObject from 'vue-cover-object'
export default {
  CoverObject
}
</script>
`

export const VC =  `<template>
  <cover-object :width="100" :height="100">
    <img src="https://github.com/potato4d.png" alt="">
  </cover-object>

  <cover-object width="15vmin" height="15vmin">
    <img src="https://github.com/potato4d.png" alt="">
  </cover-object>
</template>`
