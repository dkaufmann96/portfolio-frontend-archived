<template>
  <BaseIconButton
    :name="name"
    :dark-mode="darkMode"
    :icon="`mdi-${type}`"
    :link="link"
  ></BaseIconButton>
</template>
<script>
import BaseIconButton from './BaseIconButton'
export default {
  components: {
    BaseIconButton
  },
  extends: BaseIconButton,
  props: {
    type: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  }
}
</script>
