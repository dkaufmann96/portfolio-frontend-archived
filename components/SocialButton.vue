<template>
  <BaseIconButton
    :name="name"
    :icon="`mdi-${type}`"
    :external-link="link"
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
  },
  methods: {
    followLink() {
      window.location.href = this.link
    }
  }
}
</script>
