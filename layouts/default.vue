<template>
  <v-app>
    <v-container
      :class="{ 'text-center p-container': true, header: splitMode }"
      fluid
    >
      <h1>Daniel Kaufmann</h1>
      <h2>Software Engineer in Wien, Österreich</h2>
    </v-container>
    <CookieControl></CookieControl>
    <v-container class="text-center my-auto" fluid>
      <ButtonHexagonCollection name="menu" @split="splitMode = arguments[0]">
        <template slot-scope="scope">
          <BaseIconButton
            name="home"
            label="Home"
            :icon="homeIcon"
            link="/"
            aria-label="Home"
            class="hexagon color-home"
            @click.native="scope.uniteHexagon"
          >
          </BaseIconButton>
          <BaseIconButton
            v-for="(navigationElement, key) in navigation"
            :key="key"
            :name="navigationElement.name"
            :label="navigationElement.label"
            :icon="navigationElement.icon"
            :link="navigationElement.link"
            :class="`hexagon color-${navigationElement.name}`"
            :aria-label="navigationElement.label"
            @click.native="scope.splitHexagon"
          ></BaseIconButton>
          <SocialButton
            v-for="(social, key) in socials"
            :key="key"
            :name="social.name"
            :label="social.label"
            :icon="social.icon"
            :link="social.link"
            :aria-label="social.label"
            :class="`hexagon color-${social.name}`"
          ></SocialButton>
        </template>
        <template slot="content">
          <router-view></router-view>
        </template>
      </ButtonHexagonCollection>
    </v-container>
    <v-footer padless color="#fafafa">
      <span class="footer">
        &copy; Daniel Kaufmann {{ new Date().getFullYear() }}</span
      >
      <span class="footer"
        >Built with <a href="https://nuxtjs.org/">nuxt.js</a></span
      >
    </v-footer>
  </v-app>
</template>

<script>
import BaseIconButton from '@/components/BaseIconButton'

import SocialButton from '@/components/SocialButton'
import ButtonHexagonCollection from '@/components/ButtonHexagonCollection'
import CookieControl from '@/components/CookieControl'

import {
  mdiHome,
  mdiAccount,
  mdiIframeOutline,
  mdiEmail,
  mdiInformationVariant,
  mdiGithubCircle,
  mdiXing,
  mdiLinkedin,
  mdiGitlab,
  mdiTwitter
} from '@mdi/js'

export default {
  components: {
    BaseIconButton,
    SocialButton,
    ButtonHexagonCollection,
    CookieControl
  },
  data() {
    return {
      fixed: false,
      darkMode: true,
      homeIcon: mdiHome,
      splitMode: false,
      navigation: {
        about: {
          name: 'about',
          label: 'About',
          icon: mdiAccount,
          link: '/about'
        },
        projects: {
          name: 'projects',
          label: 'Projects',
          icon: mdiIframeOutline,
          link: '/projects'
        },
        contact: {
          name: 'contact',
          label: 'Contact',
          icon: mdiEmail,
          link: '/contact'
        },
        imprint: {
          name: 'imprint',
          label: 'Impressum',
          icon: mdiInformationVariant,
          link: '/imprint'
        }
      },
      socials: {
        github: {
          name: 'github',
          label: 'Github',
          icon: mdiGithubCircle,
          link: '//www.github.com/dkaufmann96'
        },
        xing: {
          name: 'xing',
          label: 'Xing',
          icon: mdiXing,
          link: '//www.xing.com/profile/Daniel_Kaufmann87'
        },
        linkedin: {
          name: 'linkedin',
          label: 'Linkedin',
          icon: mdiLinkedin,
          link: 'https://www.linkedin.com/in/daniel-kaufmann-5364a1187/'
        },
        gitlab: {
          name: 'gitlab',
          label: 'Gitlab',
          icon: mdiGitlab,
          link: 'https://gitlab.com/dkaufmann96'
        },
        twitter: {
          name: 'twitter',
          label: 'Twitter',
          icon: mdiTwitter,
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
