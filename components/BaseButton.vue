<template>
  <v-btn
    :name="name"
    :dark-mode="darkMode"
    :color="color"
    :aria-label="ariaLabel"
    @click="$emit('click')"
    >{{ label }}</v-btn
  >
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'button'
    },
    darkMode: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: 'gray'
    },
    ariaLabel: {
      type: String,
      required: true
    }
  }
}
</script>
