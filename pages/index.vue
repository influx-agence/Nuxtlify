<template>
    <div id="page-accueil" class="influx-router">
        <header class="influx-intro">
          <svg class="decoration-poleBot intro-deco"></svg>
          <div class="vertical-center">
              <h3 class="bloc-title">Expertise Web et Mobile</h3>
              <h2><b>INFLUX</b> fournit des dispositifs et des outils métiers <b>sur-mesure,</b> adaptés à <b>votre activité</b>.</h2>
              <router-link to="/contact" >PARLEZ NOUS DE VOTRE PROJET</router-link>
          </div>
          <svg class="decoration-poleBot intro-deco-bot"></svg>
        </header>
        <section class="accueil-content">
          <div class="text">
              <p class="bloc-title">
                  <b>INFLUX !</b> Nous élaborons, développons et mettons en place <b>des dispositifs web et mobile</b>.
                  Notre action est complète et nous pouvons proposer notre expertise sur chacune des étapes de <b>votre stratégie de communication digitale</b> et de <b>votre projet web</b>.
              </p>
          </div>
          <div class="bloc-desc">
              <p>
                  Nous développons des outils métiers et des applications <b>en accord avec vos besoins</b> ainsi toutes nos actions en marketing digital découlent de <b>votre stratégie globale</b>, de <b>votre culture</b> et de la <b>démarche de votre entreprise</b>.
                  <br>
                  Pour chaque projet notre ambition est d’installer <b>une relation de confiance</b> et de partage avec nos clients. Dans le but d’être efficace nous devons être <b>en phase avec les enjeux que vous rencontrez</b>.
              </p>
          </div>
        </section>
        <section class="domaines-activites"  data-aos="fade-up">
          <div class="poles" v-on:mouseenter="selection1enter" v-on:mouseleave="selection1leave">
            <img data-aos="flip-left" data-aos-delay="100" src="~/assets/img/icons/icon-conseil.png">
            <router-link to="/conseil" class="vignette">
              <h4 data-aos="fade-in" data-aos-delay="150">Conseil</h4>
              <hr>
              <p>Accompagnement</p>
              <hr>
          	<p>Webmarketing</p>
              <hr>
          	<p>Performance</p>
              <hr>
          	<p>Conception</p>
              <svg class="decoration-poleTop"></svg>
              <svg class="decoration-poleBot"></svg>
            </router-link>
            </div><div class="poles"  v-on:mouseenter="selection2enter" v-on:mouseleave="selection2leave">
            <img data-aos="flip-left" data-aos-delay="110" src="~/assets/img/icons/icon-creation.png">
            <router-link to="/creation" class="vignette">
              <h4 data-aos="fade-in" data-aos-delay="160">Création</h4>
              <hr>
              <p>Identité</p>
              <hr>
          	<p>UX / UI</p>
              <hr>
          	<p>Audit</p>
              <hr>
          	<p>Print</p>
              <svg class="decoration-poleTop" ></svg>
              <svg class="decoration-poleBot"></svg>
            </router-link>
          </div><div class="poles" v-on:mouseenter="selection3enter" v-on:mouseleave="selection3leave">
            <img data-aos="flip-left" data-aos-delay="120" src="~/assets/img/icons/icon-technique.png">
            <router-link to="/technique" class="vignette">
              <h4 data-aos="fade-in" data-aos-delay="170">Technique</h4>
              <hr>
              <p>Développement</p>
              <hr>
          	<p>Veille technologique</p>
              <hr>
          	<p>SEO</p>
              <hr>
          	<p>Hébergement</p>
              <svg class="decoration-poleTop"></svg>
              <svg class="decoration-poleBot"></svg>
            </router-link>
          </div><div class="poles" v-on:mouseenter="selection4enter" v-on:mouseleave="selection4leave">
            <img data-aos="flip-left" data-aos-delay="130" src="~/assets/img/icons/icon-communication.png">
            <router-link to="/communication" class="vignette">
              <h4  data-aos="fade-in" data-aos-delay="180">Communication</h4>
              <hr>
              <p>Social management</p>
              <hr>
          	<p>Analyse</p>
              <hr>
          	<p>Audit</p>
              <hr>
          	<p>Recherche</p>
              <svg class="decoration-poleTop"></svg>
              <svg class="decoration-poleBot"></svg>
            </router-link>
          </div>
        </section>
        <highlight data-aos="fade-up" />
    </div>
</template>
<script>
    // import components
    import highlight from '~/components/highlight.vue'
    import intro from '~/components/header.vue'
    import socialImage from '~/assets/img/share/influx-mini.jpg'
    // import library
    import * as $ from 'jquery';
    import * as d3 from "d3";

    // export
    export default {
        // Configuration
        layout: 'influx',
        components: { highlight, intro },
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
        // Javascript
        mounted: () => {
            AOS.init();
            var decorationCardTop = d3.selectAll(".decoration-poleTop").attr("width", 285).attr("height", 263);
              decorationCardTop.append("path").attr("d", "M0,0v2.75h103.14V0H0z");
              decorationCardTop.append("path").attr("d", "M0,0v2.75h103.14V0H0z");
              decorationCardTop.append("path").attr("d", "M181.682,0v2.75h101.14V0H181.682z");
              decorationCardTop.append("path").attr("d", "M129.447,0.128l1.928,1.945l-14.727,14.853l-1.928-1.945 L129.447,0.128z");
              decorationCardTop.append("path").attr("d", "M103.467,0.007l-1.956,1.973l14.937,15.065l1.956-1.973L103.467,0.007z");
              decorationCardTop.append("path").attr("d", "M155.628,0.128l1.928,1.945l-14.727,14.853l-1.928-1.945 L155.628,0.128z");
              decorationCardTop.append("path").attr("d", "M129.647,0.007l-1.956,1.973l14.937,15.065l1.956-1.973L129.647,0.007z");
              decorationCardTop.append("path").attr("d", "M155.628,27.083l1.928,1.945L142.829,43.88l-1.928-1.945 L155.628,27.083z");
              decorationCardTop.append("path").attr("d", "M129.647,26.962l-1.956,1.973l14.937,15.065l1.956-1.973 L129.647,26.962z");
              decorationCardTop.append("path").attr("d", "M155.739,30.128l1.936-1.945L142.89,13.33l-1.936,1.945 L155.739,30.128z");
              decorationCardTop.append("path").attr("d", "M129.655,30.248l-1.964-1.973l14.997-15.065l1.964,1.973	L129.655,30.248z");
              decorationCardTop.append("path").attr("d", "M181.263,0.128l1.928,1.945l-14.727,14.853l-1.928-1.945	L181.263,0.128z");
              decorationCardTop.append("path").attr("d", "M155.283,0.007l-1.956,1.973l14.937,15.065l1.956-1.973L155.283,0.007z");
              decorationCardTop.append("path").attr("d", "M0,0h2.999v263.048H0V0z");
              decorationCardTop.append("path").attr("d", "M279.823,0h2.999v263.048h-2.999V0z");
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
            console.log('%cPAGE %c/index', 'font-size: 15px; background: #6bc7d8; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
        },
        methods: {
          selection1enter: function(){ $("g.selection-1").addClass('hovered'); }, selection1leave: function(){ $("g.selection-1").removeClass('hovered'); },
          selection2enter: function(){ $("g.selection-2").addClass('hovered'); }, selection2leave: function(){ $("g.selection-2").removeClass('hovered'); },
          selection3enter: function(){ $("g.selection-3").addClass('hovered'); }, selection3leave: function(){ $("g.selection-3").removeClass('hovered'); },
          selection4enter: function(){ $("g.selection-4").addClass('hovered'); }, selection4leave: function(){ $("g.selection-4").removeClass('hovered'); }
        },
        beforeDestroy: () => {
            console.log('%cPAGE %c/index', 'font-size: 15px; background: #d9cf79; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
        },
        destroyed: () => {
            console.log('%cPAGE %c/index',  'font-size: 15px; background: #FF2214; color: #ffffff; padding: 5px;' ,  'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;' );
        }
    }
</script>
<style scoped>
    header.influx-intro {
        min-height: 100vh;
        padding: 50px 10%;
        position: relative;
        vertical-align: middle;
        display: table-cell;
        height: 100vh;
        background:url(~/assets/img/background/influx-accueil-top.jpg) no-repeat fixed center center / cover;
    }
    .lol {
        background:url(~/assets/img/background/influx-accueil-top.jpg) no-repeat fixed center center / cover;
    }
    #page-accueil .bloc-desc p {
        text-align:justify!important;
        column-count: 2;
        column-gap: 2rem;
    }
    #page-accueil .accueil-content {
        padding: 5%;
    }
    #page-accueil .bloc-desc p {
        text-align:justify!important;
        column-count: 2;
        column-gap: 2rem;
    }
    #page-accueil p{
        padding: 0 50px;
    }
    .domaines-activites .text {
        padding: 90px 0 0;
    }
    #page-accueil .text p {
        text-align: justify;
    }
    @media only screen and (min-width:960px) and (max-width:1264px){
        .poles, .pole {
            display: inline-block;
            padding-bottom: 44px;
            -webkit-transform: scale(.8);
                    transform: scale(.8);
            overflow:hidden;
        }
    }
    @media only screen and (min-width:600px) and (max-width:959px){
        .domaines-activites .decoration-Top,
        .domaines-activites .decoration-Bot{
            margin-top: 0;
            overflow:hidden;
            height:0;
        }
        .poles {
            width: 45%;
            margin: 0 2.5%;
            overflow: hidden;
        }
        .poles img {
            margin: 50px 0 15px;
        }
        .vignette h4 {
            font-size: 20px;
        }
        .vignette p {
            font-size: 12px;
        }
    }
    @media only screen and (max-width:599px){
        .influx-router, #footer {
            left: 0;
            width: 100%;
        }
        .influx-intro,
        .footer-devis,
        section {
          padding: 30px 15px;
        }
        .influx-intro a {
            margin: 0 0 15px;
            font-size: 14px;
        }
        .domaines-activites .decoration-Top,
        .domaines-activites .decoration-Bot{
            margin-top: 0;
            overflow:hidden;
            height:0;
        }
        .poles {
            width: 100%;
            overflow-x: hidden;
            padding-bottom: 44px;
        }
        .poles img {
            margin: 50px 0 15px;
        }
        #page-accueil p {
            padding: 0 15px;
        }
        #page-accueil .text {
            text-align: justify;
        }
        #page-accueil .bloc-desc p{
            -webkit-column-count: 1;
            column-count: 1;
            text-align: justify;
        }
    }
</style>
