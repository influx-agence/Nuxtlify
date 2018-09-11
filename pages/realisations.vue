<template>
    <div id="page-realisations"  class="influx-router">
          <header class="influx-intro" >
            <svg class="decoration-poleBot intro-deco"></svg>
            <div class="vertical-center">
                <h3 class="bloc-title animated fadeInUp delay04s">RÉALISATIONS</h3>
                <h2 class="animated fadeInUp delay05s"><b>Influx</b> conçoit et réalise des solutions web et mobiles sur mesure, <b>découvrez nos dernières réalisations</b>.</h2>
            </div>
            <svg class="decoration-poleBot intro-deco-bot"></svg>
          </header>
          <highlight/>
          <section id="la-cour-des-miracles" class="crea">
              <div class="owl-carousel font-carousel bloc left">
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/cdm-works-1.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/cdm-works-2.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/cdm-works-3.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur" ></div>
                    <img src="~/assets/img/mockup/cdm-works-4.jpg" alt="">
                  </div>
              </div>
              <div class="bloc right">
                  <div class="vertical-align">
                      <svg class="decoration-poleBot rotate"></svg>
                      <h3 class="animated">LA COUR DES MIRACLES</h3>
                      <p>
                        Création d'un site pour un studio de tatouage :<br> <b>UX design</b> / <b>Site avec CMS</b> / <b>Contenu rédactionnel optimisé SEO</b>
                      </p>
                      <a href="https://lacourdesmiracles.tattoo" target="_blank">Aller sur le site</a>
                  </div>
              </div>
          </section>
          <section id="muriel-lhermet" class="crea">
              <div class="owl-carousel font-carousel bloc right">
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/mlh-works-1.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/mlh-works-2.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/mlh-works-3.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/mlh-works-4.jpg" alt="">
                  </div>
              </div>
              <div class="bloc left">
                  <div class="vertical-align">
                  <svg class="decoration-poleBot rotate"></svg>
                      <h3 class="animated">MURIEL LHERMET</h3>
                      <p>
                        Création d'un site vitrine pour une artiste peintre :<br> <b>UI (iamsailor) / Intégration / Responsive / Opensource ( OpenSeaDragon et plus ) </b>
                      </p>
                      <a href="https://www.muriellhermet.fr" target="_blank">Aller sur le site</a>
                  </div>
              </div>
          </section>
          <section id="finestra-31" class="crea">
              <div class="owl-carousel font-carousel bloc left">
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/fin-works-1.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/fin-works-2.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/fin-works-3.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/fin-works-4.jpg" alt="">
                  </div>
              </div>
              <div class="bloc right">
                  <div class="vertical-align">
                      <svg class="decoration-poleBot rotate"></svg>
                      <h3 class="animated">FINESTRA 31</h3>
                      <p>
                        Refonte totale du site existant :<br> <b>UX-UI design / Responsive / Développement de l'interface/ CMS </b>
                      </p>
                      <a href="https://finestra31.fr" target="_blank">Aller sur le site</a>
                  </div>
              </div>
          </section>
          <section id="artcore-tattoos" class="crea">
              <div class="owl-carousel font-carousel bloc right">
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/art-works-1.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/art-works-2.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/art-works-3.jpg" alt="">
                  </div>
                  <div class="item">
                    <div class="blur"></div>
                    <img src="~/assets/img/mockup/art-works-4.jpg" alt="">
                  </div>
              </div>
              <div class="bloc left">
                  <div class="vertical-align">
                  <svg class="decoration-poleBot rotate"></svg>
                      <h3 class="animated">ARTCORE TATTOOS</h3>
                      <p>
                         Création d’un site vitrine administrable (Wordpress) :<br> <b>Webdesign / Contenu rédactionnel optimisé SEO / Stratégie social media </b>
                      </p>
                      <a href="https://artcoretattoos.com/" target="_blank">Aller sur le site</a>
                  </div>
              </div>
          </section>
          <section id="autres">
          </section>
    </div>
</template>
<script>
    // import components
    import highlight from '~/components/highlight.vue'
    import socialImage from '~/assets/img/share/realisations-mini.jpg'
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
      components: { highlight },
      // Meta
      head () {
        return {
          title: 'INFLUX',
          titleTemplate: '%s - Voici nos dernières réalisations - Agence web Aucamville',
          meta: [
            { hid: 'description', name: 'description', content: 'Influx est une agence web basée à Aucamville. Nous apportons des solutions en marketing digital, stratégie social media, webdesign et développement.' },
            { 'property': 'og:title', 'content': 'INFLUX - Voici nos dernières réalisations - Agence web Aucamville', 'vmid': 'og:title' },
            { 'property': 'og:description', 'content': 'Nous sommes fiers de nos applications et de nos réalisations. Voici nos derniers travaux et les projets sur lesquels nous sommes impliqués.' },
            { 'property': 'og:image', 'content': socialImage, 'vmid': 'og:image' },
            { 'property': 'og:url', 'content': 'https://influx-agence.fr/realisations', 'vmid': 'og:url' }
          ]
        }
      },
      // Javascript
      mounted: () => {
        var owl = $('.font-carousel');
        var owlCarouselTimeout = 2000;
        owl.owlCarousel({
            items:1,
            loop:true,
            margin:0,
            autoplay:false,
            autoplayTimeout: owlCarouselTimeout,
            autoplayHoverPause:true,
            mouseDrag:true,
            smartSpeed:500,
            touchDrag:true,
            nav:false,
            dots:false,
            lazyLoad:true,
            center: true,
            items:1,
            responsive:{
                320:{ items:1 },
                960:{ items:1 }
            }
        });
        $(".crea").on('mouseover',function(){
            $(this).children('.font-carousel').trigger('play.owl.autoplay')
        });
        $(".crea").on('mouseleave',function(){
            $(this).children('.font-carousel').trigger('stop.owl.autoplay')
        });
        $('.blur').each(function(){
          var selectfont = $(this).next('img').attr('src');
          var div = $(this).attr('style','background:url(' + selectfont + ') no-repeat center center / cover');
        });
        $(window).scroll(function(){
            $( ".crea" ).each(function() {
        				var	select = $(this).offset();
        				var height = jQuery(window).height();
                        var selectH = $(this).height();

        			 if($(window).scrollTop()>= ((select.top - selectH ) + ((height - selectH ) / 4 )) && $(window).scrollTop()<= ((select.top + selectH ) - ((height + selectH ) / 4 ))){
                         $(this).addClass("hover");
        			 }else{
        			     $(this).removeClass("hover");
        			 }
            });
        });
        console.log('%cPAGE %c/realisations', 'font-size: 15px; background: #6bc7d8; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
      },
      beforeDestroy: () => {
          console.log('%cPAGE %c/realisations', 'font-size: 15px; background: #d9cf79; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
      },
      destroyed: () => {
          console.log('%cPAGE %c/realisations',  'font-size: 15px; background: #FF2214; color: #ffffff; padding: 5px;' ,  'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;' );
      }
    }
</script>
<style>
    :root {
      /* COLOR */
      --noir: #1e1e1e;
      --noir-clair: #242424;
      --gris: #444444;
      --gris-clair: #A8A8A8;
      /* THEME */
      --primary: #ff5722;
      --secondary: #ffffff;
      --info: #6bc7d8;
      --success: #a5d73f;
      --warning: #ffa922;
      --accent: #d9cf79;
      --error: #ff2214;
    }
    /* INTRO */
    header.influx-intro {
        min-height: 80vh;
        padding: 50px 10%;
        position: relative;
        vertical-align: middle;
        display: table-cell;
        height: 80vh;
        background:url(~/assets/img/background/influx-realisation-top.jpg) no-repeat fixed center center / cover;
    }
    /* Realisations */
    #page-realisations .crea {
        height: 480px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 0;
    }
    #page-realisations .bloc a {
        margin-top: 15px;
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 1px;
        color: #1e1e1e;
        background: #fff;
        padding: 10px;
        font-weight: 700;
        position: relative;
        display: inline-block;
    }
    #page-realisations .crea:hover {
        background: var(--primary);
        -webkit-transition: 1s ease all;
        transition: 1s ease all;
    }
    #page-realisations .crea:hover svg path {
        fill: white;
    }
    #page-realisations .bloc {
        width: 50%;
        float:left;
        display: inline-block;
    }
    #page-realisations .vertical-align {
        position: relative;
        top: 50%;
        -webkit-transform: translatey(-50%);
        transform: translatey(-50%);
        padding: 0 50px;
    }
    /* Left side */
    #page-realisations .bloc.left {
        text-align: right;
    }
    #page-realisations .left .vertical-align {
        padding: 0 100px 0 50px;
    }
    #page-realisations .left .vertical-align .decoration-poleBot {
        top: 50%;
        -webkit-transform: translateY(-50%) translatex(110px) rotate(90deg);
        transform: translateY(-50%) translatex(110px) rotate(90deg);
        left: auto;
        right: 0;
    }
    /* Right side */
    #page-realisations .bloc.right {
        left: 50%;
        position: absolute;
        height: 100%;
        float:left;
        text-align: left;
    }
    #page-realisations .right .vertical-align {
        padding: 0 50px 0 100px;
    }
    #page-realisations .right .vertical-align .decoration-poleBot {
        top: 50%;
        -webkit-transform: translateY(-50%) translatex(-110px) rotate(-90deg);
        transform: translateY(-50%) translatex(-110px) rotate(-90deg);
    }

    .blur {
        position: absolute;
        height: 100%;
        width: 100%;
        filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="10" /></filter></svg>#filter');
        -webkit-flter: blur(10px);
                filter: blur(10px);
    }
    .decoration-poleBot {
        position: absolute;
        bottom: 0;
        width: auto;
        height: auto;
        left: 0;
        -webkit-transform: translatey(100%);
        transform: translatey(100%);
    }
    .decoration-poleBot path {
        fill: #444444;
        -webkit-transition: 1s ease all;
        transition: 1s ease all;
    }
    .font-carousel{
        height: 480px;
        background:var(--noir);
    }
    .font-carousel .owl-stage-outer,
    .font-carousel .owl-stage,
    .font-carousel .owl-item,
    .font-carousel .item{
        height:100%;
        overflow:hidden;
     }
    .font-carousel .item img{
        max-width: 100%;
        max-height: none;
        width: auto !important;
        height: auto !important;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        position: relative;
    }
    @media only screen and (min-width:960px) and (max-width:1264px){

    }
    @media only screen and (min-width:600px) and (max-width:959px){
        #page-realisations .bloc {
            width: 100%;
            left: 0 !important;
            position: relative !important;
            height: 480px !important;
        }
        #page-realisations .crea {
            height: auto;
            display: block;
        }
        .vertical-align {
            position: absolute;
        }
        #page-realisations .right .vertical-align .decoration-poleBot,
        #page-realisations .left .vertical-align .decoration-poleBot{
            top: 0;
            -webkit-transform: translateY(-50px) translatex(-50%) rotate(0deg);
            transform: translateY(-50px) translatex(-50%) rotate(0deg);
            left: 50%;
        }
        #page-realisations .left .vertical-align,
        #page-realisations .right .vertical-align {
            padding: 50px;
            text-align: center !important;
            width: 100%;
        }
    }
    @media only screen and (max-width:599px){
        .influx-intro a {
            margin: 0 0 15px;
            font-size: 14px;
        }
        #page-realisations .bloc {
            width: 100%;
            left: 0 !important;
            position: relative !important;
            height: auto !important;
        }
        #page-realisations .crea {
            height: auto;
            display: block;
        }
        #page-realisations .bloc {
            height: 320px !important;
        }
        .vertical-align {
            position: absolute;
        }
        #page-realisations .right .vertical-align .decoration-poleBot,
        #page-realisations .left .vertical-align .decoration-poleBot{
            top: 0;
            -webkit-transform: translateY(0) translatex(-50%) rotate(0deg);
            transform: translateY(0) translatex(-50%) rotate(0deg);
            left: 50%;
        }
        #page-realisations .left .vertical-align,
        #page-realisations .right .vertical-align {
            padding: 50px 15px;
            text-align: center !important;
            width: 100%;
        }
    }
</style>
