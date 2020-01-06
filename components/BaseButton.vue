<template v-slot:activator>
  <a v-if="link" :href="link" class="icon">
    <v-icon :name="name" :dark="darkMode" @click="$emit('click')">
      {{ icon }}
    </v-icon>
  </a>
  <v-icon
    v-else
    class="icon"
    :name="name"
    :dark="darkMode"
    @click="$emit('click')"
  >
    {{ icon }}
  </v-icon>
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
export default {
  props: {
    name: {
      type: String,
      default: 'button'
    },
    link: {
      type: String,
      required: false,
      default: null
    },
    darkMode: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>
