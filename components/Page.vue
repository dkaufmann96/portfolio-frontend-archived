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
    const defaultRender =
      app.$md.renderer.rules.link_open ||
      function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }
    app.$md.renderer.rules.image = (tokens, idx, options, env, self) => {
      const index = tokens[idx].attrIndex('src')
      tokens[idx].attrs[index][1] =
        process.env.strapiBaseUri + tokens[idx].attrs[index][1]
      return defaultRender(tokens, idx, options, env, self)
    }
    return {
      page: result.data.pages[0],
      content: app.$md.render(result.data.pages[0].content)
    }
  }
}
</script>
