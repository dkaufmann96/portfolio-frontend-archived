<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on }">
      <BaseButton
        name="cookie-control"
        :dark-mode="$vuetify.theme.dark"
        icon="mdi-cookie"
        v-on="on"
      ></BaseButton>
    </template>
    <v-card>
      <v-card-title class="headline">Cookies</v-card-title>
      <v-card-text
        >Wit the help of cookies, the browsing experience on this page is
        improved.</v-card-text
      >
      <v-card-text>
        <v-switch v-model="defaultCookies" label="Default" disabled></v-switch>
        <v-switch v-model="analytics" label="Analytics"></v-switch>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="
            dialog = false
            setPreferences()
          "
          >Accept</v-btn
        >
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
      analytics: this.$cookies.get('optional-cookies') || false
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
        path: '/',
        maxAge: 60 * 60 * 24 * 7
      })
    },
    deactivateGTM() {
      this.$disableGtagTracking()
      this.$cookies.remove('optional-cookies')
      window.location.reload()
    }
  }
}
</script>
