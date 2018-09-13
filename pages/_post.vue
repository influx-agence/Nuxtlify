<template>
    <div>
        <h1>{{ post.title }}</h1>
	   <div v-html="post.body" />
    </div>
</template>

<script>
    export default {
      async asyncData ({ app, params }) {
        return {
          post: await app.$content('/').get(params.slug)
        }
      }
    }
</script>
