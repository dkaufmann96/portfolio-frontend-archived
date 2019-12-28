<template v-slot:activator
  ><v-btn
    :name="name"
    :dark="darkMode"
    :fab="fab"
    :href="href"
    @click="$emit('click')"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
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
    fab: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    }
  }
}
</script>
