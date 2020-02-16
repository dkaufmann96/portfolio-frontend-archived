<template>
  <div :class="splitMode ? 'row' : 'p-container row'">
    <transition class="slide-fade">
      <div
        :class="
          splitMode
            ? 'hexagon-container split col-md-4 ml-2'
            : 'hexagon-container my-auto'
        "
      >
        <slot :splitHexagon="splitHexagon" :uniteHexagon="uniteHexagon"></slot>
      </div>
    </transition>
    <transition class="slide-fade">
      <div v-show="splitMode" class="col-md-6">
        <slot name="content"></slot>
      </div>
    </transition>
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
