<template>
  <v-app :dark="darkModeComputed">
    <v-row
      :class="{
        'd-flex justify-content-center align-center': !splitMode,
        'pa-sm-10 d-xs-flex justify-xs-content-center align-xs-center': splitMode,
        'mr-0': true
      }"
    >
      <v-col :md="splitMode ? 3 : 12" :cols="12">
        <div :class="{ 'sticky-container': splitMode }">
          <v-container
            :class="{
              'mobile-none': splitMode,
              'd-flex flex-column align-sm-center': !splitMode
            }"
          >
            <h1 class="text-h4 mb-2">Daniel Kaufmann</h1>
            <h2 class="text-h6 mb-2">
              Software Engineer based in Vienna, Austria
            </h2>
            <p class="text-body-1 mb-2">
              Hi, my name is Daniel and this is my personal web page. Take a
              look around to learn more about me and my work!
            </p>
          </v-container>
          <v-container class="my-auto" fluid>
            <ButtonHexagonCollection
              name="menu"
              :split-mode="splitMode"
              @split="splitMode = arguments[0]"
            >
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
            </ButtonHexagonCollection>
          </v-container>
        </div>
      </v-col>
      <v-divider
        v-if="splitMode"
        :class="{ 'mobile-none': splitMode }"
        vertical
      ></v-divider>
      <v-col>
        <v-main v-if="splitMode">
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-col>
    </v-row>

    <v-footer padless>
      <span class="footer">
        &copy; Daniel Kaufmann {{ new Date().getFullYear() }}</span
      >
      <span class="footer"
        >Built with <a href="https://nuxtjs.org/">nuxt.js</a></span
      >
    </v-footer>
    <CookieControl></CookieControl>
  </v-app>
</template>

<script>
import BaseIconButton from '@/components/buttons/BaseIconButton'

import SocialButton from '@/components/buttons/SocialButton'
import ButtonHexagonCollection from '@/components/buttons/ButtonHexagonCollection'
import CookieControl from '@/components/buttons/CookieControl'

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
      splitMode: this.$route.path !== '/',
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
