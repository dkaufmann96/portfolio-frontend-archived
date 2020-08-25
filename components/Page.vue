<template>
  <main v-if="page">
    <h1 class="text-h3 mb-10">{{ page.title }}</h1>
    <!-- eslint-disable vue/no-v-html -->
    <div id="page" class="text-body-1" v-html="content"></div>
  </main>
</template>
<script>
import pagesQuery from '~/apollo/queries/page/page'

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
