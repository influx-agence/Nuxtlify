<template>
    <div id="page-communication"  class="influx-router">
          <header class="influx-intro" >
            <svg class="decoration-poleBot intro-deco"></svg>
            <div class="vertical-center">
                <h3 class="bloc-title animated fadeInUp delay04s">COMMUNICATION</h3>
                <img class="animated fadeInUp delay1s" src="~/assets/img/icons/icon-communication.png">
                <h2 class="animated fadeInUp delay05s">Du contenu officiel de <b>votre site</b> à la gestion de <b>votre campagne web</b> notre pôle de marketing digital est <b>capable de tout</b>.</h2>
            </div>
            <svg class="decoration-poleBot intro-deco-bot"></svg>
          </header>
          <competences/>
          <section class="expertise-content">
            <div class="text">
                <p class="bloc-title">
                  <b>Influx</b> peut définir et mettre en place votre <b>stratégie digital marketing</b> et élaborer <b>la stratégie social media</b> qui donnera l’impact nécessaire à votre message.<br>
                  Notre pôle community management assure <b>la gestion et le management de toutes vos campagnes web, de votre blog et de vos réseaux sociaux.</b>
                </p>
            </div>
            <div class="bloc-desc">
                <p>
                    Nous pouvons aussi prendre en charge <b><u>votre stratégie de contenu</u> et sa gestion au quotidien.</b>
                    Notre équipe s'occupe de la création de <b>la totalité de vos contenus :</b> rédactionnel, photo, illustration, infographie…
                    Nous pensons que le contenu rédactionnel doit être réalisé avec <b>style et panache.</b> De ce fait, au-delà <b>du <u>storytelling</u>, <u>du SEO</u> et <u>du marketing rédactionnel</u></b>, nous revendiquons notre amour de la plume.
                </p>
            </div>
          </section>
          <section class="sous-domaines">
              <div class="poles">
                  <div class="vignette">
                      <h4>STRATÉGIE DIGITALE</h4>
                      <hr>
                      <p>Branding / Identité</p>
                      <hr>
                      <p>Audit et marketing</p>
                      <hr>
                      <p>Stratégie Social media</p>
                      <hr>
                      <p>Stratégie de contenu</p>
                      <hr>
                      <p>Stratégie SEO</p>
                      <hr>
                      <p>Ciblage et territoire de marque</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>CONTENU</h4>
                      <hr>
                      <p>Content management</p>
                      <hr>
                      <p>Rédactionnel optimisé SEO</p>
                      <hr>
                      <p>Storytelling</p>
                      <hr>
                      <p>Charte éditoriale</p>
                      <hr>
                      <p>Photo / Vidéo</p>
                      <hr>
                      <p>Marketing rédactionnel</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>SOCIAL MEDIA</h4>
                      <hr>
                      <p>Community management</p>
                      <hr>
                      <p>Ligne et planning éditoriaux</p>
                      <hr>
                      <p>Gestion campagnes de publicité</p>
                      <hr>
                      <p>Analytics et reporting</p>
                      <hr>
                      <p>Optimisation du référencement</p>
                      <hr>
                      <p>Territoire éditorial</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div><div class="poles">
                  <div class="vignette">
                      <h4>VEILLE</h4>
                      <hr>
                      <p>Veille concurentielle</p>
                      <hr>
                      <p>Benchmarking</p>
                      <hr>
                      <p>Modération</p>
                      <hr>
                      <p>Suivi de publications</p>
                      <hr>
                      <p>Publicité</p>
                      <hr>
                      <p>Gestion des crises</p>
                      <svg class="decoration-poleTop"></svg>
                  </div>
              </div>
          </section>
    </div>
</template>
<script>
    // import components
    import competences from '~/components/competences.vue'
    import socialImage from '~/assets/img/share/communication-mini.jpg'
    // import library
    import * as $ from 'jquery';
    import * as d3 from "d3";
    // export
    export default {
      layout: 'influx',
      components: { competences },
      // Meta
      head () {
        return {
          titleTemplate: '%s - Marketing Digital, Social Media, SEO - Agence web Aucamville',
          meta: [
            { hid: 'description', name: 'description', content: 'Votre stratégie digitale est essentielle. Nous apportons les solutions nécessaires en marketing digital, content & community management et social media.' },
            { 'property': 'og:title', 'content': 'INFLUX - Marketing Digital, Social Media, SEO - Agence web Aucamville', 'vmid': 'og:title' },
            { 'property': 'og:description', 'content': 'Votre stratégie digitale est essentielle. Nous apportons les solutions nécessaires en marketing digital, content & community management et social media.' },
            { 'property': 'og:image', socialImage, 'vmid': 'og:image' },
            { 'property': 'og:url', 'content': 'https://influx-agence.fr/communication', 'vmid': 'og:url' }
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
        background:url(~/assets/img/background/influx-communication-top.jpg) no-repeat fixed center center / cover;
    }
    #page-communication .expertise-content .text {
        position: relative;
        top: 0;
        left: 50%;
        padding: 0px 50px;
        -webkit-transform: translatex(-50%);
        transform: translatex(-50%);
    }
    #page-communication .bloc-desc .col2 p {
        text-align:justify!important;
        column-count: 2;
        column-gap: 2rem;
    }
    #page-communication .expertise-content .text p {
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
