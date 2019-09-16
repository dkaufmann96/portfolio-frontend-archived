<template
  ><BaseButton
    :fab="true"
    :dark-mode="darkMode"
    :icon="iconComputed"
    @click="$emit('darkModeSet', !darkMode)"
  ></BaseButton>
</template>
<script>
import BaseButton from "./BaseButton";
export default {
  components: {
    BaseButton
  },
  extends: BaseButton,
  computed: {
    iconComputed() {
      return this.darkMode ? "mdi-weather-sunny" : "mdi-weather-night";
    }
  }
};
</script>
