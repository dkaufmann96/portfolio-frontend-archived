<template
  ><v-btn :dark="darkMode" :fab="fab" @click="$emit('click')">
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>
<script>
export default {
  props: {
    darkMode: {
      type: Boolean,
      default: true
    },
    fab: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>
