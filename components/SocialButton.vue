<template>
  <a :href="link" class="icon">
    <BaseButton
      :name="name"
      :dark-mode="darkMode"
      :icon="`mdi-${type}`"
    ></BaseButton>
  </a>
</template>
<style scoped>
.icon {
  padding: 10px;
  font-size: 30px;
  text-align: center;
  text-decoration: none;
  color: none;
}
</style>
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
