<template
  ><BaseIconButton
    :name="name"
    :icon="iconComputed"
    @click="$emit('darkModeSet', !darkMode)"
  ></BaseIconButton>
</template>
<script>
import BaseIconButton from './BaseIconButton'
export default {
  components: {
    BaseIconButton
  },
  extends: BaseIconButton,
  computed: {
    iconComputed() {
      return this.darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night'
    }
  }
}
</script>
