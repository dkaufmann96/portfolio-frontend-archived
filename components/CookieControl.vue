<template>
  <v-dialog v-model="dialog" persistent max-width="500">
    <v-card>
      <v-card-title class="headline">This website uses cookies</v-card-title>
      <v-card-text
        >This website uses cookies in order to make it as user-friendly as
        possible and to offer you the best possible service. If you click on
        "Accept", you consent that you agree with this. Under "Settings" you can
        manage which types of cookies are set.</v-card-text
      >
      <template v-if="settingsOpened">
        <v-card-text>
          <v-switch
            v-model="defaultCookies"
            label="Basic Functionality"
            disabled
          ></v-switch>
          <v-switch
            v-model="analytics"
            label="Analytics & Usability"
          ></v-switch>
        </v-card-text>
      </template>
      <v-card-actions>
        <BaseButton
          name="cookie-settings"
          :label="settingsOpened ? 'Close Settings' : 'Settings'"
          @click="settingsOpened = !settingsOpened"
        ></BaseButton>
        <v-spacer></v-spacer>
        <BaseButton
          name="accept"
          :label="settingsOpened ? 'Save Settings' : 'Accept'"
          @click="
            dialog = false
            setPreferences()
          "
        ></BaseButton>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import BaseButton from './BaseButton'

export default {
  components: {
    BaseButton
  },
  data() {
    return {
      dialog: false,
      defaultCookies: true,
      analytics:
        this.$cookies.get('optional-cookies') !== undefined
          ? this.$cookies.get('optional-cookies').activated
          : false,
      settingsOpened: false
    }
  },
  mounted() {
    if (this.analytics) {
      this.activateGTM()
    }
    if (!this.$cookies.get('preferences-set')) {
      this.dialog = true
    }
  },
  methods: {
    setPreferences() {
      this.analytics ? this.activateGTM() : this.deactivateGTM()
      this.$cookies.set('preferences-set', {
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    },
    activateGTM() {
      this.$enableGtagTracking()
      this.$cookies.set('optional-cookies', {
        activated: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    },
    deactivateGTM() {
      this.$disableGtagTracking()
      this.$cookies.set('optional-cookies', {
        activated: false,
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
      window.location.reload()
    }
  }
}
</script>
