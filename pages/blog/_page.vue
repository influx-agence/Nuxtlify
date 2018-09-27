<template>
    <div>
        <h1>{{ title }}</h1>
	   
    </div>
</template>

<script>
    export default {
      async asyncData({ app, params }) {
        const postPromise = process.BROWSER_BUILD
         ? import('~/content/posts/' + params.slug + '.json')
         : Promise.resolve(
          require('~/content/posts/' + params.slug + '.json')
        );
        let post = await import('~/content/posts/' + params.slug + '.json');
        return post;
      },
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
