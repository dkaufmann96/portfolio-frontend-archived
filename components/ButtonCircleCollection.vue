<template>
  <div>
    <ul class="circle-container mx-auto">
      <slot></slot>
    </ul>
  </div>
</template>
<style lang="scss">
.circle-container {
  height: 250px;
  width: 250px;
  border-radius: 50%;
}
.list-item {
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.8;
}
.list-item * {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 50px !important;
}
.list-item:hover {
  opacity: 1;
}
</style>
<script>
export default {
  computed: {
    elements() {
      return this.$slots.default.filter((element) => element.tag !== undefined)
    },
    elementsInOneCircle() {
      return this.elements.length > 10
        ? Math.floor(this.elements.length / 2.25)
        : this.elements.length - 1
    }
  },
  mounted() {
    this.updateCircle()
  },
  methods: {
    updateCircle() {
      console.log(this.elements)
      console.log(this.elementsInOneCircle)
      const mod = this.elements.length % this.elementsInOneCircle
      const parts = (this.elements.length - mod) / this.elementsInOneCircle
      const length = (this.elements.length - mod) / parts
      for (let j = 1; j <= parts; j++) {
        for (let i = length * (j - 1); i < length * j; i++) {
          this.addParentListElement(this.elements[i].elm)
          if (i > 0) {
            this.applyTransformation(
              this.elements[i].elm,
              this.calculateTransformation(length, i),
              this.elementsInOneCircle * j * 8
            )
          }
        }
        for (
          let i = this.elements.length - mod;
          i < this.elements.length;
          i++
        ) {
          this.addParentListElement(this.elements[i].elm)
          if (i > 0) {
            this.applyTransformation(
              this.elements[i].elm,
              this.calculateTransformation(length, i),
              this.elementsInOneCircle * j * 8
            )
          }
        }
      }

      this.$slots.default = this.elements
    },
    addParentListElement(element) {
      const listElement = document.createElement('li')
      this.wrap(element, listElement)
      element.parentElement.className = 'list-item'
    },
    calculateTransformation(amountOfElements, index) {
      const offsetAngle = 360 / amountOfElements
      return offsetAngle * index
    },
    applyTransformation(element, angle, translation) {
      const transform = `rotate(${angle}deg)
                             translate(0,-${translation}px)
                             rotate(-${angle}deg)`

      element.parentElement.style.transform = transform
    },
    wrap(el, wrapper) {
      el.parentNode.insertBefore(wrapper, el)
      wrapper.appendChild(el)
    }
  }
}
</script>
