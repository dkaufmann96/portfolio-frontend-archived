<template>
  <div>
    <ul class="circle-container mx-auto">
      <slot></slot>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.circle-container {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  position: relative;
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
  &::v-deep .v-icon {
    font-size: 50px;
  }
}

.list-item:hover {
  opacity: 1;
}
</style>
<script>
export default {
  mounted() {
    this.updateCircle()
  },
  methods: {
    updateCircle() {
      const elements = this.$slots.default.filter((slot) => slot.tag === 'li')
      for (let i = 0; i < elements.length; i++) {
        const offsetAngle = 360 / (elements.length - 1)
        const rotateAngle = offsetAngle * i
        const transform = `rotate(${rotateAngle}deg) translate(0, -${elements.length *
          10}px) rotate(-${rotateAngle}deg)`
        elements[i].elm.className = 'list-item'
        if (i > 0) {
          elements[i].elm.style.transform = transform
        }
      }
      this.$slots.default = elements
    }
  }
}
</script>
