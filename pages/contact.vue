<template>
<section>
  <div class="influx-router">
     <iframe class="contact" src="https://influx-agence.fr/v2/contact.php" frameborder="0" scrolling="no" ></iframe>
  </div>
</section>
</template>
<script>
    // import components
    import socialImage from '~/assets/img/share/influx-mini.jpg'
    // import library
    import * as $ from 'jquery';
    import * as d3 from "d3";

    // export
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
        mounted: () => {
            //var test = document.getElementsByTagName("iframe")[0].contentWindow.document.body.scrollHeight + 'px';
            //console.log(test)
        }
    }
</script>
<style scoped>
  iframe{
    height: 600px;
    width: 100%;
    position: relative;
    min-height: 80vh;
  }
    header.influx-intro {
        min-height: 100vh;
        padding: 50px 10%;
        position: relative;
        vertical-align: middle;
        display: table-cell;
        height: 100vh;
        background:url(~/assets/img/background/influx-accueil-top.jpg) no-repeat fixed center center / cover;
    }
    #page-accueil .bloc-desc p {
        text-align:justify!important;
        column-count: 2;
        column-gap: 2rem;
    }
    #page-accueil .accueil-content {
        padding: 10%;
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
