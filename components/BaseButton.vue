<template v-slot:activator
  ><v-icon :name="name" :dark="darkMode" :href="href" @click="$emit('click')">
    {{ icon }}
  </v-icon>
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
