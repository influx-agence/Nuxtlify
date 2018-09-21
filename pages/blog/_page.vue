<template>
    <div>
        <h1>{{ page.title }}</h1>
	   <div v-html="page.body" />
    </div>
</template>

<script>
    export default {
      data() {
        return {
          page: {}
        };
      },
      async asyncData({ app, route }) {
        const page = await app.$content("/posts").get(route.path);

        return {
          page
        };
      },
      head() {
        return {
          title: `${this.page.title}`,
          meta: [
            {
              hid: "description",
              name: "description",
              content: `${this.page.title}`
            }
          ]
        };
      }
    }
</script>
