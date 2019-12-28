<template>
  <BaseButton
    :name="name"
    :fab="true"
    :dark-mode="darkMode"
    :icon="`mdi-${type}`"
    :href="link"
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
  }
}
</script>
