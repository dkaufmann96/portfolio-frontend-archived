<template>
  <main v-if="page">
    <h1>{{ page.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div id="page" v-html="$md.render(page.content)"></div>
  </main>
</template>
<script>
import pagesQuery from '~/apollo/queries/page/pages'

export default {
  async asyncData({ app, route, redirect }) {
    const pathSplit = route.path.split('/')
    const path = pathSplit.length > 1 ? pathSplit[1] : null
    const result = await app.apolloProvider.defaultClient.query({
      prefetch: false,
      query: pagesQuery,
      variables: {
        slug: path
      }
    })
    if (result.data.pages.length === 0) {
      redirect('/404')
    }
    return { page: result.data.pages[0] }
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  }
}
</script>
