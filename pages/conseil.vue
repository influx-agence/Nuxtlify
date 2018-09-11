<template>
    <div id="page-conseil"  class="influx-router">
          <header class="influx-intro" >
            <svg class="decoration-poleBot intro-deco"></svg>
            <div class="vertical-center">
                <h3 class="bloc-title animated fadeInUp delay04s">CONSEIL</h3>
                <img class="animated fadeInUp delay1s" src="~/assets/img/icons/icon-conseil.png">
                <h2 class="animated fadeInUp delay05s"><b>INFLUX</b> vous épaule tout au long de votre projet de <b>communication</b> et <b>web marketing</b>.</h2>
            </div>
            <svg class="decoration-poleBot intro-deco-bot"></svg>
          </header>
          <competences/>
          <section class="expertise-content">
            <div class="text">
                <p class="bloc-title">
                    INFLUX <b>vous conseille</b> et <b>vous accompagne</b> sur des projets à longue échéance.
                </p>
            </div>
            <div class="bloc-desc">
                <p>
                    Pour chaque projet <b>INFLUX</b> travaille en binôme avec ses client et cherche à <b>installer un échange.</b> Cette collaboration est nécessaire et <b>la base solide d'<u>une stratégie payante.</u></b>
                    Voici les points sur lesquels <b><u>INFLUX</u> peut apporter son expertise :</b><br>
                    Il est également possible de <b>nous consulter sur des points plus précis</b> ou pour des actions de courte durée.
                </p>
            </div>
          </section>

          <section class="sous-domaines">

              <div class="poles">
                  <div class="vignette">
                      <h4>STRATÉGIE DIGITALE</h4>
                      <hr>
                      <p>Branding</p>
                      <hr>
                      <p>Optimisation du référencement (<i>SEO</i>)</p>
                      <hr>
                      <p>Charte éditoriale et graphique</p>
                      <hr>
                      <p>Stratégie de contenu et viralité</p>
                      <hr>
                      <p>Conversion des prospects</p>
                      <hr>
                      <p>Réflexion sur le RIO</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>WEBDESIGN</h4>
                      <hr>
                      <p>Identité graphique</p>
                      <hr>
                      <p>Ergonomie / UI design</p>
                      <hr>
                      <p>Expérience digitale / UX design</p>
                      <hr>
                      <p>Iconographie</p>
                      <hr>
                      <p>Esthétique</p>
                      <hr>
                      <p>Image</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>TECHNIQUE</h4>
                      <hr>
                      <p>Conception</p>
                      <hr>
                      <p>Outils métiers</p>
                      <hr>
                      <p>Applications</p>
                      <hr>
                      <p>Développement</p>
                      <hr>
                      <p>Front end / Back end</p>
                      <hr>
                      <p>Hébergement</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>COMMUNICATION</h4>
                      <hr>
                      <p>Content management</p>
                      <hr>
                      <p>Community management</p>
                      <hr>
                      <p>Optimisation SEO</p>
                      <hr>
                      <p>Storytelling</p>
                      <hr>
                      <p>Publicité</p>
                      <hr>
                      <p>Social media</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div>
          </section>
    </div>
</template>
<script>
    // import components
    import competences from '~/components/competences.vue'
    import socialImage from '~/assets/img/share/conseil-mini.jpg'
    // import library
    import * as $ from 'jquery';
    import * as d3 from "d3";
    // export
    export default {
      // Configuration
      layout: 'influx',
      components: { competences },
      // Meta
      head () {
        return {
          title: 'INFLUX',
          titleTemplate: '%s - Marketing digital, Design, Développement - Agence web Aucamville',
          meta: [
            { hid: 'description', name: 'description', content: 'De l’élaboration d’une stratégie digitale à la conception de votre application nous vous accompagnons sur l’ensemble de vos projets web.' },
            { 'property': 'og:title', 'content': 'INFLUX - Marketing digital, Design, Développement - Agence web Aucamville', 'vmid': 'og:title' },
            { 'property': 'og:description', 'content': 'De l’élaboration d’une stratégie digitale à la conception de votre application nous vous accompagnons sur l’ensemble de vos projets web.' },
            { 'property': 'og:image', 'content': socialImage, 'vmid': 'og:image' },
            { 'property': 'og:url', 'content': 'https://influx-agence.fr/conseil', 'vmid': 'og:url' }
          ]
        }
      },
      // Javascript
      mounted: () => {
          var decorationCardTop = d3.selectAll(".decoration-poleBot, .decoration-poleTop").attr("width", 285).attr("height", 50);
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
      }
    }
</script>
<style scoped>
    header.influx-intro {
        min-height: 80vh;
        padding: 50px 10%;
        position: relative;
        vertical-align: middle;
        display: table-cell;
        height: 80vh;
        background:url(~/assets/img/background/influx-conseil-top.jpg) no-repeat fixed center center / cover;
    }
    #page-conseil .expertise-content .text {
        position: relative;
        top: 0;
        left: 50%;
        padding: 0px 50px;
        -webkit-transform: translatex(-50%);
        transform: translatex(-50%);
    }
    #page-conseil .bloc-desc .col2 p {
        text-align:justify!important;
        column-count: 2;
        column-gap: 2rem;
    }
    #page-conseil .expertise-content .text p {
        width: 100%;
        display: inline-block;
        padding: 0 35px;
        margin-bottom: 35px;
        vertical-align: middle;
        text-align: center;
    }
    .bloc-desc p{
        -webkit-column-count: 2;
        column-count: 2;
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
        .expertise-content .text p {
            width: auto;
            margin:15px 0;
        }
        .vignette h4 {
            font-size: 20px;
        }
        .vignette p {
            font-size: 12px;
        }
        .bloc-title {
          font-size: 16px;
        }
        .expertise-content .text {
            padding: 0px 15px !important;
        }
        .bloc-desc p{
            padding:0 15px;
            -webkit-column-count: 1;
            column-count: 1;
        }
    }
    @media only screen and (max-width:599px){
        .influx-intro,
        .footer-devis,
        section {
            padding: 30px 15px;
        }
        .poles {
            width: 100%;
            overflow-x: hidden;
            padding-bottom: 44px;
        }
        .poles img {
            margin: 50px 0 15px;
        }
        .text {
            padding: 15px;
        }
        .expertise-content .text p {
            width: auto;
            margin:15px 0;
            padding: 0;
        }
        .vignette h4 {
            font-size: 20px;
        }
        .vignette p {
            font-size: 12px;
        }
        .expertise-content .text {
            text-align: justify;
            padding:0 !important;
        }
        .bloc-desc p{
            -webkit-column-count: 1;
            column-count: 1;
            text-align: justify;
        }
        .bloc-title {
          font-size: 12px;
        }
    }
</style>
