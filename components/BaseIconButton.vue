<template v-slot:activator>
  <a v-if="externalLink" :href="externalLink" class="icon">
    <v-icon :name="name" @click="$emit('click')">
      {{ icon }}
    </v-icon>
  </a>
  <v-icon v-else class="icon" :name="name" @click="$emit('click')">
    {{ icon }}
  </v-icon>
</template>
<style scoped>
.icon {
  padding: 10px;
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
    externalLink: {
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
