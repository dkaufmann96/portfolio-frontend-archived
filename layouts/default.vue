<template>
  <v-app :dark="darkModeComputed">
    <v-container>
      <v-speed-dial direction="bottom" left fixed open-on-hover>
        <template v-slot:activator>
          <BaseButton
            fab
            :dark-mode="darkMode"
            icon="mdi-dots-horizontal"
          ></BaseButton>
        </template>
        <SocialButton
          v-for="(social, key) in socials"
          :key="key"
          :name="social.name"
          :type="social.icon"
          :link="social.link"
          :dark-mode="darkMode"
        ></SocialButton>
        <DarkModeButton
          name="dark-mode"
          :dark-mode="darkMode"
          @darkModeSet="darkMode = $event"
        ></DarkModeButton>
      </v-speed-dial>
      <v-card class="mx-auto">
        <v-card-title>Hello!</v-card-title>
        <v-card-text
          >This page is currently under construction, and will soon be
          available. In the meantime, you can check out my social media profiles
          on the left!
        </v-card-text>
      </v-card>
    </v-container>
    <v-footer :fixed="fixed" app>
      <span> &copy; Daniel Kaufmann 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import DarkModeButton from '@/components/DarkModeButton.vue'
import SocialButton from '@/components/SocialButton'
import BaseButton from '@/components/BaseButton'
export default {
  components: {
    DarkModeButton,
    SocialButton,
    BaseButton
  },
  data() {
    return {
      fixed: false,
      darkMode: true,
      socials: {
        github: {
          name: 'github',
          icon: 'github-circle',
          link: '//www.github.com/dkaufmann96'
        },
        xing: {
          name: 'xing',
          icon: 'xing',
          link: '//www.xing.com/profile/Daniel_Kaufmann87'
        }
      }
    }
  },
  computed: {
    darkModeComputed() {
      if (this.darkMode) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$vuetify.theme.dark = true
        return true
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return (this.$vuetify.theme.dark = false)
      }
    }
  }
}
</script>
