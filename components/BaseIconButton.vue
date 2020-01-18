<template v-slot:activator>
  <a v-if="externalLink" :href="externalLink" class="icon">
    <v-icon class="showIcon" :name="name" @click="$emit('click')">
      {{ icon }}
    </v-icon>
    <span class="showText">{{ label }}</span>
  </a>
  <nuxt-link v-else :to="link" class="icon">
    <v-icon class="showIcon" :name="name" @click="$emit('click')">
      {{ icon }}
    </v-icon>
    <span class="showText">{{ label }}</span>
  </nuxt-link>
</template>
<style scoped>
.icon {
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: none;
}
.theme--light.v-icon {
  color: #ffffff;
}
</style>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'button'
    },
    label: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      required: false,
      default: ''
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
    },
    showText: {
      type: Boolean,
      default: false
    }
  }
}
</script>
