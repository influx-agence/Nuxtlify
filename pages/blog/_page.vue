<template>
    <div>
        <h1>{{ title }}</h1>
	   
    </div>
</template>

<script>
    export default {
      data() {
        return {
          post: 0
        };
      },
      async asyncData({ app, params }) {
        let post = await import('~/content/posts/' + params.slug + '.json');
        return post;
      }

      head() {
        return {
          title: `${this.post.title}`,
          meta: [
            {
              hid: "description",
              name: "description",
              content: `${this.post.title}`
            }
          ]
        };
      }
    }
</script>
