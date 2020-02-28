<template>
  <div :class="splitMode ? 'sticky-container row' : 'p-container row'">
    <div
      :class="
        splitMode
          ? 'hexagon-container split col-md-4'
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
  data() {
    return {
      splitMode: false
    }
  },
  methods: {
    uniteHexagon() {
      this.splitMode = false
    },
    splitHexagon() {
      this.splitMode = true
    }
  }
}
</script>
