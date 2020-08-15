<template>
  <main>
    <h1>{{ page.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div id="page" v-html="$md.render(page.content)"></div>
  </main>
</template>
<script>
import pagesQuery from '~/apollo/queries/page/pages'

export default {
  async asyncData({ app }) {
    const result = await app.apolloProvider.defaultClient.query({
      prefetch: true,
      query: pagesQuery,
      variables() {
        return { slug: this.path }
      }
    })
    return { page: result.data.pages[0] }
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
      loading: 0
    }
  },
  computed: {
    path() {
      const pathSplit = this.$nuxt.$route.path.split('/')
      return pathSplit.length > 1 ? pathSplit[1] : ''
    }
  }
}
</script>
