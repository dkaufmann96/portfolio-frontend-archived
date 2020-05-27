<template>
  <div :class="split ? 'sticky-container row' : 'p-container row'">
    <div
      :class="
        split ? 'hexagon-container split col-md-3' : 'hexagon-container my-auto'
      "
    >
      <slot :splitHexagon="splitHexagon" :uniteHexagon="uniteHexagon"></slot>
    </div>
    <div v-show="split" class="col-md-6">
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
  data() {
    return {
      split: this.splitMode
    }
  },
  methods: {
    uniteHexagon() {
      this.split = false
      this.$emit('split', false)
    },
    splitHexagon() {
      this.split = true
      this.$emit('split', true)
    }
  }
}
</script>
