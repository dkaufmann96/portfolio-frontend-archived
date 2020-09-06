<template>
  <div
    v-scroll="onScroll"
    :class="{
      'sticky-container row': split,
      'p-container row': !split,
    }"
  >
    <div
      :class="{
        'hexagon-container split col-lg-3': split,
        'hexagon-container my-auto': !split,
        shrunk: shrunk,
      }"
    >
      <slot :splitHexagon="splitHexagon" :uniteHexagon="uniteHexagon"></slot>
    </div>
    <div v-show="split" class="col-lg-6">
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
      default: false,
    },
  },
  data() {
    return {
      split: this.splitMode,
      shrunk: false,
      lastScrollPosition: 0,
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
    },
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return
      }
      if (this.split) {
        this.shrunk = currentScrollPosition >= this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
    },
  },
}
</script>
