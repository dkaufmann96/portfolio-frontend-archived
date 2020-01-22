<template>
  <BaseIconButton
    :name="name"
    :label="label"
    :icon="icon"
    :external-link="link"
    :aria-label="ariaLabel"
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
    icon: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      required: true
    }
  },
  methods: {
    followLink() {
      window.location.href = this.link
    }
  }
}
</script>
