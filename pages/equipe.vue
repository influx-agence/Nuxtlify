<template>
    <div id="page-agence" class="influx-router">
      <header class="influx-intro" >
        <svg class="decoration-poleBot intro-deco"></svg>
        <div class="vertical-center">
            <h3 class="bloc-title animated fadeInUp delay04s">NOTRE ÉQUIPE</h3>
            <h2 class="animated fadeInUp delay05s"><b>Influx</b> c’est avant tout une philosophie et des valeurs partagées avec nos clients</h2>
        </div>
      </header>
      <equipes class="partenary" />
    </div>
</template>
<script>
    // import components
    import equipes from '~/components/equipes.vue'
    import socialImage from '~/assets/img/share/influx-mini.jpg'
    // import library
    import * as $ from 'jquery';
    import * as d3 from "d3";
    if (process.browser) {
      var Jquery = require('jquery');
      var owlCarousel = require('owl.carousel');
    }
    // export
    export default {
      // Configuration
      layout: 'influx',
      components: { equipes },
      // Meta
      head () {
        return {
          title: 'INFLUX',
          titleTemplate: '%s - Découvrez notre équipe et notre culture - Agence web Aucamville',
          meta: [
            { hid: 'description', name: 'description', content: 'Nous sommes une équipes d’indépendants liés depuis plusieurs années par nos projets communs et l’amitié bien sûr. Nous sommes Influx.' },
            { 'property': 'og:title', 'content': 'INFLUX - Découvrez notre équipe et notre culture - Agence web Aucamville', 'vmid': 'og:title' },
            { 'property': 'og:description', 'content': 'Nous sommes une équipes d’indépendants liés depuis plusieurs années par nos projets communs et l’amitié bien sûr. Nous sommes Influx.' },
            { 'property': 'og:image', 'content': socialImage, 'vmid': 'og:image' },
            { 'property': 'og:url', 'content': 'https://influx-agence.fr/equipe', 'vmid': 'og:url' }
          ]
        }
      },
      // Javascript
      mounted: () => {
          var decorationCardBot = d3.selectAll(".decoration-poleBot").attr("width", 285).attr("height", 44);
            decorationCardBot.append("path").attr("d", "M0,0v2.75h103.14V0H0z");
            decorationCardBot.append("path").attr("d", "M181.682,0v2.75h101.14V0H181.682z");
            decorationCardBot.append("path").attr("d", "M129.447,0.128l1.928,1.945l-14.727,14.853l-1.928-1.945	L129.447,0.128z");
            decorationCardBot.append("path").attr("d", "M103.467,0.007l-1.956,1.973l14.937,15.065l1.956-1.973L103.467,0.007 z");
            decorationCardBot.append("path").attr("d", "M155.628,0.128l1.928,1.945l-14.727,14.853l-1.928-1.945	L155.628,0.128z");
            decorationCardBot.append("path").attr("d", "M129.647,0.007l-1.956,1.973l14.937,15.065l1.956-1.973L129.647,0.007 z");
            decorationCardBot.append("path").attr("d", "M155.628,27.083l1.928,1.945L142.829,43.88l-1.928-1.945	L155.628,27.083z");
            decorationCardBot.append("path").attr("d", "M129.647,26.962l-1.956,1.973l14.937,15.065l1.956-1.973	L129.647,26.962z");
            decorationCardBot.append("path").attr("d", "M155.739,30.128l1.936-1.945L142.89,13.33l-1.936,1.945 L155.739,30.128z");
            decorationCardBot.append("path").attr("d", "M129.655,30.248l-1.964-1.973l14.997-15.065l1.964,1.973	L129.655,30.248z");
            decorationCardBot.append("path").attr("d", "M181.263,0.128l1.928,1.945l-14.727,14.853l-1.928-1.945	L181.263,0.128z");
            decorationCardBot.append("path").attr("d", "M155.283,0.007l-1.956,1.973l14.937,15.065l1.956-1.973L155.283,0.007 z");
      }
    }
</script>
<style scoped>
    .partenary {
        background:url(~/assets/img/background/influx-agence-top.jpg) no-repeat fixed center center / cover;
    }
    header.influx-intro {
        min-height: 50vh;
        padding: 50px 10%;
        position: relative;
        vertical-align: middle;
        display: table-cell;
        height: 50vh;
        background:url(~/assets/img/background/influx-agence-top.jpg) no-repeat fixed center center / cover;
    }
</style>
