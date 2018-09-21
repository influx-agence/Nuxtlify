<template>
    <div id="page-blog" class="influx-router">
        <header class="influx-intro">
          <svg class="decoration-poleBot intro-deco"></svg>
          <div class="vertical-center">
              <h3 class="bloc-title">BLOG</h3>
              <h2><b>Découvrez</b> nous et notre travails quotidiens</h2>
          </div>
          <svg class="decoration-poleBot intro-deco-bot"></svg>
        </header>
      <h1> All Posts </h1>
      <ul>
        <li v-for="post in posts" v-bind:key="post">
          <nuxt-link :to="post.permalink">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
</template>

<script>
    // import components
    import socialImage from '~/assets/img/share/influx-mini.jpg'
    // import library
    import * as $ from 'jquery';
    import * as d3 from "d3";
    export default {
        // Configuration
       layout: 'influx',
       // Meta
       head () {
           return {
             title: 'INFLUX',
             titleTemplate: '%s - Agence web Aucamville - Création de sites et applications web et mobiles',
             meta: [
               { hid: 'description', name: 'description', content: 'Influx est une agence web basée à Aucamville. Nous apportons des solutions en marketing digital, stratégie social media, webdesign et développement.' },
               { 'property': 'og:title', 'content': 'INFLUX - Agence web Aucamville - Création de sites et applications web et mobiles', 'vmid': 'og:title' },
               { 'property': 'og:description', 'content': 'Influx est une agence web basée à Aucamville. Nous apportons des solutions en marketing digital et webdesign adaptées à votre activité et sur-mesure.' },
               { 'property': 'og:image', 'content': socialImage, 'vmid': 'og:image' },
               { 'property': 'og:url', 'content': 'https://influx-agence.fr/', 'vmid': 'og:url' }
             ]
           }
       },
       async asyncData ({ app }) {
           return {
               posts: await app.$content('/').getAll()
           }
       }
    }
</script>
<style scoped>
    header.influx-intro {
        min-height: 30vh;
        padding: 50px 10%;
        position: relative;
        vertical-align: middle;
        display: table-cell;
        height: 30vh;
        width:100vw;
        background:url(~/assets/img/background/influx-accueil-top.jpg) no-repeat fixed center center / cover;
    }
</style>
