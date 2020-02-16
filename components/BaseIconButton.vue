<template v-slot:activator>
  <a
    v-if="externalLink"
    :aria-label="ariaLabel"
    :href="externalLink"
    class="icon"
  >
    <v-icon
      size="45"
      class="showIcon"
      :aria-label="ariaLabel"
      :name="name"
      @click="$emit('click')"
    >
      {{ icon }}
    </v-icon>
    <span class="showText">{{ label }}</span>
  </a>
  <nuxt-link v-else :to="link" :aria-label="ariaLabel" class="icon">
    <v-icon
      size="45"
      class="showIcon"
      :aria-label="ariaLabel"
      :name="name"
      @click="$emit('click')"
    >
      {{ icon }}
    </v-icon>
    <span class="showText" :aria-label="ariaLabel">{{ label }}</span>
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
    },
    ariaLabel: {
      type: String,
      required: true
    }
  }
}
</script>
