<template>
  <v-app :dark="darkModeComputed">
    <v-container class="text-center p-container mt-5" fluid>
      <h1>Daniel Kaufmann</h1>
      <h2>Software Engineer in Vienna, Austria</h2>
    </v-container>
    <v-container class="text-center p-container my-auto" fluid>
      <ButtonCircleCollection class="p-container">
        <template slot-scope="scope">
          <BaseIconButton
            name="home"
            label="Home"
            icon="mdi-home"
            link="/"
            class="hexagon color-home"
            @click.native="scope.uniteHexagon"
          >
          </BaseIconButton>
          <BaseIconButton
            v-for="(navigationElement, key) in navigation"
            :key="key"
            :name="navigationElement.name"
            :label="navigationElement.label"
            :icon="`mdi-${navigationElement.icon}`"
            :link="navigationElement.link"
            :class="`hexagon color-${navigationElement.name}`"
            @click.native="scope.splitHexagon"
          ></BaseIconButton>
          <SocialButton
            v-for="(social, key) in socials"
            :key="key"
            :name="social.name"
            :label="social.label"
            :type="social.icon"
            :link="social.link"
            :class="`hexagon color-${social.name}`"
          ></SocialButton>
        </template>
        <template slot="content">
          <router-view></router-view>
        </template>
      </ButtonCircleCollection>
    </v-container>
    <v-footer padless>
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
import ButtonCircleCollection from '@/components/ButtonCircleCollection'

export default {
  components: {
    BaseIconButton,
    SocialButton,
    ButtonCircleCollection
  },
  data() {
    return {
      fixed: false,
      darkMode: true,
      navigation: {
        about: {
          name: 'about',
          label: 'About',
          icon: 'account',
          link: '/about'
        },
        projects: {
          name: 'projects',
          label: 'Projects',
          icon: 'iframe-outline',
          link: '/projects'
        },
        contact: {
          name: 'contact',
          label: 'Contact',
          icon: 'email',
          link: '/contact'
        },
        imprint: {
          name: 'imprint',
          label: 'Impressum',
          icon: 'information-variant',
          link: '/imprint'
        }
      },
      socials: {
        github: {
          name: 'github',
          label: 'Github',
          icon: 'github-circle',
          link: '//www.github.com/dkaufmann96'
        },
        xing: {
          name: 'xing',
          label: 'Xing',
          icon: 'xing',
          link: '//www.xing.com/profile/Daniel_Kaufmann87'
        },
        linkedin: {
          name: 'linkedin',
          label: 'Linkedin',
          icon: 'linkedin',
          link: 'https://www.linkedin.com/in/daniel-kaufmann-5364a1187/'
        },
        gitlab: {
          name: 'gitlab',
          label: 'Gitlab',
          icon: 'gitlab',
          link: 'https://gitlab.com/dkaufmann96'
        },
        twitter: {
          name: 'twitter',
          label: 'Twitter',
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
