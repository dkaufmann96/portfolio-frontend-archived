<template>
  <v-app :dark="darkModeComputed">
    <v-container class="text-center p-container">
      <ButtonCircleCollection class="mt-5">
        <CookieControl />
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
      </ButtonCircleCollection>
    </v-container>
    <v-footer absolute padless>
      <v-card flat tile width="100%" class="text-center">
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
import ButtonCircleCollection from '@/components/ButtonCircleCollection'
import CookieControl from '@/components/CookieControl'

export default {
  components: {
    SocialButton,
    DarkModeButton,
    CookieControl,
    ButtonCircleCollection
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
        },
        linkedin: {
          name: 'linkedin',
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/daniel-kaufmann-5364a1187/'
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
