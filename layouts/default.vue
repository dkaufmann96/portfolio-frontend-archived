<template>
  <v-app :dark="darkMode">
    <DarkModeButton
      :dark-mode="darkMode"
      @darkModeSet="darkMode = $event"
    ></DarkModeButton>
    <SocialButton :dark-mode="darkMode" type="facebook"></SocialButton>
    <SocialButton :dark-mode="darkMode" type="twitter"></SocialButton>
    <SocialButton :dark-mode="darkMode" type="xing"></SocialButton>
    <SocialButton :dark-mode="darkMode" type="github-circle"></SocialButton>
    <v-footer :fixed="fixed" app>
      <span> &copy; Daniel Kaufmann 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import DarkModeButton from "@/components/DarkModeButton.vue";
import SocialButton from "@/components/SocialButton.vue";
export default {
  components: {
    DarkModeButton,
    SocialButton
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      darkMode: true,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        }
      ],
      miniVariant: false
    };
  }
};
</script>
