<template>
  <div :class="splitMode ? 'sticky-container row' : 'p-container row'">
    <div
      :class="
        splitMode
          ? 'hexagon-container split col-md-3'
          : 'hexagon-container my-auto'
      "
    >
      <slot :splitHexagon="splitHexagon" :uniteHexagon="uniteHexagon"></slot>
    </div>
    <div v-show="splitMode" class="col-md-6">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ButtonHexagonCollection',
  props: {
    splitMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    uniteHexagon() {
      this.splitMode = false
      this.$emit('split', false)
    },
    splitHexagon() {
      this.splitMode = true
      this.$emit('split', true)
    }
  }
}
</script>
