<template>
  <v-app :dark="darkModeComputed">
    <DarkModeButton
      name="dark-mode"
      class="mt-2"
      :dark-mode="darkMode"
      @darkModeSet="darkMode = $event"
    ></DarkModeButton>
    <CookieControl locale="de" />
    <v-container>
      <v-card class="mx-auto">
        <v-card-title>Hello!</v-card-title>
        <v-card-text
          >This page is currently under construction, and will soon be
          available. In the meantime, you can check out my social media
          profiles!
        </v-card-text>
      </v-card>
    </v-container>
    <v-footer absolute padless>
      <v-card flat tile width="100%" class="text-center">
        <v-card-text>
          <SocialButton
            v-for="(social, key) in socials"
            :key="key"
            :name="social.name"
            :type="social.icon"
            :link="social.link"
            :dark-mode="darkMode"
          ></SocialButton>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          &copy; Daniel Kaufmann {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import SocialButton from '@/components/SocialButton'
import DarkModeButton from '@/components/DarkModeButton'
import CookieControl from '@/components/CookieControl'
export default {
  components: {
    SocialButton,
    DarkModeButton,
    CookieControl
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
  },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>
