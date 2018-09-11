<template>
    <div id="page-creation"  class="influx-router">
          <header class="influx-intro" >
            <svg class="decoration-poleBot intro-deco"></svg>
            <div class="vertical-center">
                <h3 class="bloc-title animated fadeInUp delay04s">CRÉATION</h3>
                <img class="animated fadeInUp delay1s" src="~/assets/img/icons/icon-creation.png"/>
                <h2 class="animated fadeInUp delay05s">Nous plaçons la <b>lisibilité</b>, <b>l’esthétique</b> et la <b>simplicité</b> au coeur de notre travail.</h2>
            </div>
            <svg class="decoration-poleBot intro-deco-bot"></svg>
          </header>
          <competences/>
          <section class="expertise-content">
            <div class="text">
                <p class="bloc-title">
                 Aujourd’hui <b>il est primordial de marquer les esprits</b> et l'identité graphique est un point essentiel de votre communication.<br>
                 À travers <b>une direction artistique forte et pertinente</b>, Influx vous aide à sortir du lot.
                </p>
            </div>
            <div class="bloc-desc">
                <p>
                    Le webdesign doit bien sûr être <b>en accord avec votre univers</b> et vos valeurs mais il doit aussi être <b>beau et dynamique</b>.
                    Ainsi nous produisons des sites <b>visuellement attrayant</b> et des animations <b>pertinentes et soignées</b> (en lecture automatiques ou interactives).
                    <b><u>L'ergonomie</u></b> est également incontournable.<br>
                    Elle nous permet de garantir à l’utilisateur <b>une navigation fluide et rapide</b> et une compréhension du message beaucoup plus efficace.
                    <u>La lisibilité</u>, <u>l’esthétique</u> et <u>la simplicité d’utilisation</u> sont les valeurs fondamentales de nos créations.
                </p>
            </div>

          </section>
          <section class="sous-domaines">
              <div class="poles">
                  <div class="vignette">
                      <h4>IDENTITÉ GRAPHIQUE</h4>
                      <hr>
                      <p>Logotype</p>
                      <hr>
                      <p>Typographie</p>
                      <hr>
                      <p>Iconographie</p>
                      <hr>
                      <p>Charte graphique</p>
                      <hr>
                      <p>Illustrations</p>
                      <hr>
                      <p>Esthétique</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>WEB & MOBILE</h4>
                      <hr>
                      <p>Design</p>
                      <hr>
                      <p>Ergonomie / UI design</p>
                      <hr>
                      <p>Expérience digitale / UX design</p>
                      <hr>
                      <p>Animations dynamiques</p>
                      <hr>
                      <p>Responsive design</p>
                      <hr>
                      <p>Lisibilité</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>WEBDESIGN</h4>
                      <hr>
                      <p>Maquettes</p>
                      <hr>
                      <p>Mockups</p>
                      <hr>
                      <p>Moodboards</p>
                      <hr>
                      <p>Front end</p>
                      <hr>
                      <p>Conception</p>
                      <hr>
                      <p>Veille</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>PRINT</h4>
                      <hr>
                      <p>Plaquettes</p>
                      <hr>
                      <p>Affiches</p>
                      <hr>
                      <p>Cartes de visite</p>
                      <hr>
                      <p>Papeterie</p>
                      <hr>
                      <p>Objets publicitaires</p>
                      <hr>
                      <p>Bâches / Kakemonos</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div>
          </section>
    </div>
</template>
<script>
    // import components
    import competences from '~/components/competences.vue'
    import socialImage from '~/assets/img/share/creation-mini.jpg'
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
          titleTemplate: '%s - Webdesign UX / UI et Identité Graphique - Agence web Aucamville',
          meta: [
            { hid: 'description', name: 'description', content: 'Nous vous aidons à définir votre Identité graphique et fournissons des web designs UX/UI adaptés à votre activité, esthétiques et ergonomiques.' },
            { 'property': 'og:title', 'content': 'INFLUX - Webdesign UX / UI et Identité Graphique - Agence web Aucamville', 'vmid': 'og:title' },
            { 'property': 'og:description', 'content': 'Nous vous aidons à définir votre Identité graphique et fournissons des web designs UX/UI adaptés à votre activité, esthétiques et ergonomiques.' },
            { 'property': 'og:image', 'content': socialImage, 'vmid': 'og:image' },
            { 'property': 'og:url', 'content': 'https://influx-agence.fr/creation', 'vmid': 'og:url' }
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
        background:url(~/assets/img/background/influx-creation-top.jpg) no-repeat fixed center center / cover;
    }
    #page-creation .expertise-content .text {
        position: relative;
        top: 0;
        left: 50%;
        padding: 0px 50px;
        -webkit-transform: translatex(-50%);
        transform: translatex(-50%);
    }
    #page-creation .bloc-desc .col2 p {
        text-align:justify!important;
        column-count: 2;
        column-gap: 2rem;
    }
    #page-creation .expertise-content .text p {
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
            padding: 0px 15px;
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
