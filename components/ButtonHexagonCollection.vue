<template>
  <div>
    <div v-if="!splitMode" class="hexagon-container">
      <slot :splitHexagon="splitHexagon" :uniteHexagon="uniteHexagon"></slot>
    </div>
    <v-container
      v-show="splitMode"
      id="content-wrapper"
      class="text-center p-container my-auto"
    >
      <div id="top" class="hexagon-container"></div>
      <slot name="content"></slot>
      <div id="bottom" class="hexagon-container"></div>
    </v-container>
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
      const top = document.getElementById('top')
      const bottom = document.getElementById('bottom')
      while (top.lastChild) {
        top.removeChild(top.lastChild)
      }
      while (bottom.lastChild) {
        bottom.removeChild(bottom.lastChild)
      }
      this.splitMode = false
    },
    splitHexagon() {
      this.splitMode = true

      const elements = document.getElementsByClassName('hexagon')
      const top = document.getElementById('top')
      const bottom = document.getElementById('bottom')
      if (top.hasChildNodes()) {
        return
      }
      for (let [index, element] of Object.entries(elements)) {
        index < elements.length / 2
          ? top.appendChild(element)
          : bottom.appendChild(element)
      }
    }
  }
}
</script>
