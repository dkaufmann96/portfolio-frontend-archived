<template>
  <div class="mx-auto my-auto hexagon-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  computed: {
    elements() {
      this.$slots.default
        .filter((element) => element.tag !== undefined)
        .forEach((element) => {
          element = this.addParentListElement(element)
          return element
        })
      return [...document.getElementsByClassName('hexagon')]
    }
  },
  mounted() {
    this.$slots.default = this.elements
  },
  methods: {
    addParentListElement(element) {
      const div = document.createElement('div')
      this.wrap(element.elm, div)
      element.elm.parentElement.className = `hexagon color-${element.data.key}`
      return element
    },
    wrap(el, wrapper) {
      el.parentNode.insertBefore(wrapper, el)
      wrapper.appendChild(el)
    }
  }
}
</script>
