<template>
    <div>
        <h1>{{ title }}</h1>
	   
    </div>
</template>

<script>
    export default {
      data() {
        return {
          page: {},
          post: 0
        };
      },
      async asyncData({ params }) {
        let post = await import('~/content/posts/' + params.slug + '.json');
        return post;
      }

      head() {
        return {
          title: `${this.title}`,
          meta: [
            {
              hid: "description",
              name: "description",
              content: `${this.title}`
            }
          ]
        };
      }
    }
</script>
