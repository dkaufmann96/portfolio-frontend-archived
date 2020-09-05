<template>
  <v-dialog v-model="dialog" persistent width="500">
    <v-card>
      <v-card-title class="cookie-headline" primary-title
        >Diese Seite verwendet Cookies</v-card-title
      >
      <v-card-text>
        Diese Seite verwendet Cookies, um sie so benutzerfreundlich wie möglich
        zu gestalten, und das bestmögliche Service anbieten zu können. Wenn Sie
        auf "Akzeptieren" klicken, erklären Sie sich damit einverstanden. Unter
        "Einstellungen" können Sie die Art von Cookies, die verwaltet werden
        sollen, setzen.</v-card-text
      >
      <template v-if="settingsOpened">
        <v-card-text>
          <v-switch
            v-model="defaultCookies"
            label="Basisfunktionalität"
            disabled
          ></v-switch>
          <v-switch
            v-model="analytics"
            label="Analysen & Benutzerfreundlichkeit"
          ></v-switch>
        </v-card-text>
      </template>
      <v-row align="center">
        <v-col class="text-center">
          <BaseButton
            v-if="!settingsOpened"
            name="cookie-settings"
            aria-label="Einstellungen"
            label="Einstellungen"
            class="mb-5"
            block
            @click="settingsOpened = !settingsOpened"
          ></BaseButton>
          <v-spacer></v-spacer>
          <BaseButton
            name="accept"
            aria-label="Akzeptieren"
            label="Akzeptieren"
            block
            @click="
              dialog = false
              setPreferences()
            "
          ></BaseButton>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>
<style scoped>
.cookie-headline {
  word-break: normal !important;
}
.v-card {
  padding: 0 20px 0 20px;
}
</style>
<script>
import BaseButton from './BaseButton'

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      dialog: false,
      defaultCookies: true,
      analytics:
        this.$cookies.get('optional-cookies') !== undefined
          ? this.$cookies.get('optional-cookies').activated
          : true,
      settingsOpened: false,
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
        maxAge: 60 * 60 * 24 * 7,
      })
    },
    activateGTM() {
      this.$enableGtagTracking()
      this.$cookies.set('optional-cookies', {
        activated: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    },
    deactivateGTM() {
      this.$disableGtagTracking()
      this.$cookies.set('optional-cookies', {
        activated: false,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
      window.location.reload()
    },
  },
}
</script>
