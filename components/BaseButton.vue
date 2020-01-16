<template>
  <v-btn
    :name="name"
    :dark-mode="darkMode"
    :color="color"
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
    }
  }
}
</script>
