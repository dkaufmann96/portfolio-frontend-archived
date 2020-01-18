<template>
  <v-app :dark="darkModeComputed">
    <v-container class="text-center p-container">
      <ButtonCircleCollection>
        <BaseIconButton
          v-for="(navigationElement, key) in navigation"
          :key="key"
          :name="navigationElement.name"
          :type="navigationElement.icon"
          :link="navigationElement.link"
        ></BaseIconButton>
        <DarkModeButton
          name="dark-mode"
          :dark-mode="darkMode"
          @darkModeSet="darkMode = $event"
        ></DarkModeButton>
        <SocialButton
          v-for="(social, key) in socials"
          :key="key"
          :name="social.name"
          :type="social.icon"
          :link="social.link"
        ></SocialButton>
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
import BaseIconButton from '@/components/BaseIconButton'

import SocialButton from '@/components/SocialButton'
import DarkModeButton from '@/components/DarkModeButton'
import ButtonCircleCollection from '@/components/ButtonCircleCollection'

export default {
  components: {
    BaseIconButton,
    SocialButton,
    DarkModeButton,
    ButtonCircleCollection
  },
  data() {
    return {
      fixed: false,
      darkMode: true,
      navigation: {
        home: {
          name: 'home',
          icon: 'home',
          link: '/home'
        },
        about: {
          name: 'about',
          icon: 'about',
          link: '/about'
        },
        imprint: {
          name: 'imprint',
          icon: 'imprint',
          link: '/imprint'
        }
      },
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
        },
        gitlab: {
          name: 'gitlab',
          icon: 'gitlab',
          link: 'https://gitlab.com/dkaufmann96'
        },
        twitter: {
          name: 'twitter',
          icon: 'twitter',
          link: 'https://twitter.com/dkaufmann96'
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
