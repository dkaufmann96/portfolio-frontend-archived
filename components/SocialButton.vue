<template>
  <BaseButton
    :name="name"
    :dark-mode="darkMode"
    :icon="`mdi-${type}`"
    @click="followLink"
  ></BaseButton>
</template>
<script>
import BaseButton from './BaseButton'
export default {
  components: {
    BaseButton
  },
  extends: BaseButton,
  props: {
    type: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  methods: {
    followLink() {
      window.location.href = this.link
    }
  }
}
</script>
