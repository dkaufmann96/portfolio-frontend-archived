<template>
  <div class="button-container mx-auto my-auto">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.button-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  & > .odd {
    margin-left: 92px;
  }
}
.hexagon {
  width: 100px;
  height: 55px;
  background: grey;
  position: relative;
  display: inline-block;
  margin: 0.1rem 0.1em 1.5rem 0.1em;
  opacity: 0.8;
}
.hexagon:before {
  content: '';
  position: absolute;
  top: -25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 25px solid grey;
}
.hexagon:after {
  content: '';
  position: absolute;
  bottom: -25px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 25px solid grey;
}
.hexagon * {
  padding: 0 !important;
  margin: 0 !important;
  font-size: 50px !important;
}
.hexagon:hover {
  opacity: 1;
}
</style>
<script>
export default {
  computed: {
    elements() {
      this.$slots.default
        .filter((element) => element.tag !== undefined)
        .forEach((element) => {
          element = this.addParentListElement(element.elm)
          return element
        })
      return [...document.getElementsByClassName('hexagon')]
    },
    elementsInOneCircle() {
      return this.elements.length > 10
        ? Math.floor(this.elements.length / 2.25)
        : this.elements.length - 1
    }
  },
  mounted() {
    const chunks = this.chunkArray(this.elements, 4)
    for (let [elementIndex, elementArray] of Object.entries(chunks)) {
      if (elementIndex % 2 === 0) {
        this.wrapElementsInRow(elementArray, true)
      } else {
        this.wrapElementsInRow(elementArray, false)
      }
    }

    this.$slots.default = this.elements
  },
  methods: {
    addParentListElement(element) {
      const div = document.createElement('div')

      this.wrap(element, div)
      element.parentElement.className = 'hexagon'
      return element
    },
    wrapElementsInRow(elements, even) {
      const row = document.createElement('div')
      row.className = even ? 'row even' : 'row odd'
      elements.forEach((element) => {
        element.parentNode.removeChild(element)
        row.appendChild(element)
      })
      document.getElementsByClassName('button-container')[0].appendChild(row)
    },
    wrap(el, wrapper) {
      el.parentNode.insertBefore(wrapper, el)
      wrapper.appendChild(el)
    },
    chunkArray(myArray, chunk_size) {
      var index = 0
      var arrayLength = myArray.length
      var tempArray = []

      for (index = 0; index < arrayLength; index += chunk_size) {
        const myChunk = myArray.slice(index, index + chunk_size)
        tempArray.push(myChunk)
      }

      return tempArray.reverse()
    }
  }
}
</script>
