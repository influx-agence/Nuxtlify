<template>
    <div id="menu" class="menu-loading">
      <nuxt-link to="/">
        <svg id="logo" viewBox="196 275 230 256" enable-background="new 196 275 230 256" xml:space="preserve"></svg>
      </nuxt-link>
      <h1>INFL<span>UX</span></h1>
      <button class="menu-button"><i class="material-icons" >menu</i></button>
      <button class="close-button"><i class="material-icons">clear</i></button>
      <div class="main-menu">
          <div class="open-link"><p class="tab" data-select="expertise">Compétences</p><i class="material-icons">keyboard_arrow_down</i></div>
          <div class="sous-menu" data-target="expertise">
              <nuxt-link to="/methodologie">Méthodologie</nuxt-link>
              <nuxt-link to="/conseil" >Conseil</nuxt-link>
              <nuxt-link to="/creation" >Création</nuxt-link>
              <nuxt-link to="/technique" >Technique</nuxt-link>
              <nuxt-link to="/communication" >Communication</nuxt-link>
          </div>
          <nuxt-link to="/realisations" data-select="">Travaux</nuxt-link>
          <div class="open-link"><p class="tab" data-select="influx">Influx</p><i class="material-icons">keyboard_arrow_down</i></div>
          <div class="sous-menu" data-target="influx">
              <nuxt-link to="/valeurs">Valeurs</nuxt-link>
              <nuxt-link to="/equipe">Équipe</nuxt-link>
              <nuxt-link to="/blog">Blog</nuxt-link>
          </div>
          <nuxt-link to="/contact" data-select="">Contact</nuxt-link>
      </div>
      <div class="social">
        <p class="copyright">INFL<span>UX</span></p>
        <div class="sociale-link">
            <a href="https://www.facebook.com/influx.agency/">Facebook</a>
        </div>
      </div>
    </div>
</template>
<script>
    import $ from 'jquery';
    import * as d3 from "d3";
    export default {
        mounted: () => {
            setTimeout(function(){
                $('#menu').removeClass('menu-loading');
                console.log('%cMenu %cloaded', 'background: #ff5722; color: #ffffff; padding: 2px;' , 'background: #242424; color: #ffffff; padding: 2px;');
                setTimeout(function(){
                  $('#menu').addClass('menu-ready');
                  $('.menu-button').addClass('ready');
                }, 500);
            }, 2000);

            $('.menu-button').hover(function(){
                if($('.menu-button').hasClass('ready')){
                    $('#menu').addClass('menu-open');
                }
            });
            $('.menu-button').click(function(){
                if($('.menu-button').hasClass('ready')){
                    $('#menu').addClass('menu-open');
                }
            });
            $('.body').hover(function(){
              $('#menu').removeClass('menu-open');
              $('.material-icons').removeClass('open');
              $('.sous-menu').removeAttr( "style" );
            });
            $('.body, .close-button, .main-menu a').click(function(){
              $('#menu').removeClass('menu-open');
              $('.material-icons').removeClass('open');
              $('.sous-menu').removeAttr( "style" );
            });
            $('.open-link').click(function(){
              if($(this).children('.material-icons').hasClass('open')){
                $(this).children('.material-icons').removeClass('open');
                $('.sous-menu').removeAttr( "style" );
              }else{
                $('.material-icons').removeClass('open');
                $('.sous-menu').removeAttr( "style" );
                $(this).children('.material-icons').addClass('open');
                var select = $(this).children('.tab').attr('data-select');
                var taille = $('.sous-menu[data-target="'+ select +'"] a').length * 50;
                $('.sous-menu[data-target="'+ select +'"]').css('height', taille);
              }
            });
            var logo = d3.select("#logo").attr("width", 230).attr("height", 256);
              var empreinte = logo.append("g").attr("class", "logo-empreinte");
              empreinte.append("path").attr("d", "M269.355,292.949 c59.217-10.847,85.882,3.015,109.673,13.759").attr("class", "empreinte-blanc");
              empreinte.append("path").attr("d", "M239.331,319.011 c98.522-34.033,147.488,13.273,163.003,28.799").attr("class", "empreinte-orange");
              empreinte.append("path").attr("d", "M224.891,346.354 c118.503-64.149,182.395,30.948,186.932,42.35").attr("class", "empreinte-blanc");
              empreinte.append("path").attr("d", "M208.823,384.095 c119.715-99.048,188.109,5.198,199.641,40.998").attr("class", "empreinte-orange");
              empreinte.append("path").attr("d", "M214.917,415.702 c51.772-74.165,109.465-56.663,131.974-42.385c38.785,24.571,45.607,59.852,47.062,84.977").attr("class", "empreinte-blanc");
              empreinte.append("path").attr("d", "M333.871,386.521 c1.281,0.589,2.32,1.282,3.705,1.975c14.891,9.011,25.626,22.527,31.167,38.469c0.693,2.079,1.039,3.812,1.385,5.892	c5.541,22.527,4.848,44.707,1.177,66.783").attr("class", "empreinte-orange");
              empreinte.append("path").attr("d", "M226.83,450.219	c3.082-12.857,7.238-25.334,13.817-37.117c0.346-0.347,0.693-0.693,1.039-1.04c11.082-19.754,31.859-32.924,54.334-33.721").attr("class", "empreinte-orange");
              empreinte.append("path").attr("d", "M336.641,411.543 c25.903,25.819,18.977,65.674,11.22,98.043").attr("class", "empreinte-blanc");
              empreinte.append("path").attr("d", "M238.466,476.593 c3.671-12.026,5.472-24.502,9.108-36.528c1.731-5.753,3.879-11.471,6.995-16.635c3.047-5.094,7.03-9.669,11.462-13.62 c4.952-4.436,10.701-8.318,17.073-10.397").attr("class", "empreinte-blanc");
              empreinte.append("path").attr("d", "M324.382,425.648 c7.584,8.11,9.939,19.65,10.597,30.394c0.796,12.719-1.004,25.576-4.121,37.914c-1.662,6.585-3.705,13.065-6.441,19.269").attr("class", "empreinte-orange");
              empreinte.append("path").attr("d", "M251.175,491.391 c5.368-13.481,7.792-27.344,10.216-42.246c1.039-6.238,3.463-11.437,6.926-16.635c5.194-6.931,11.774-12.823,19.947-15.041").attr("class", "empreinte-orange");
              empreinte.append("path").attr("d", "M268.109,504.838 c3.636-9.392,7.099-22.908,9.246-32.785c1.939-8.872,1.801-18.992,5.333-27.379c4.017-9.6,11.462-13.308,20.986-10.12 c10.735,3.604,12.986,10.189,14.198,20.794c2.32,20.205-8.138,49.351-13.506,61.688").attr("class", "empreinte-blanc");
              empreinte.append("path").attr("d", "M285.528,512.358 c16.38-36.805,14.129-64.218,14.129-64.218").attr("class", "empreinte-orange");

        }
    }
</script>
<style>
    :root {
      --noir: #1e1e1e;
      --noir-clair: #242424;
      --gris: #444444;
      --gris-clair: #A8A8A8;
      --primary: #ff5722;
      --secondary: #ffffff;
      --info: #6bc7d8;
      --success: #a5d73f;
      --warning: #ffa922;
      --accent: #d9cf79;
      --error: #ff2214;
    }
    /* LOGO */
    #menu{
        position:fixed;
        top: 0;
        left:0;
        height:100vh;
        width:75px;
        z-index:999;
        background:var(--noir);
        -webkit-transition:all .5s ease;
        transition: all .5s ease;
        overflow: hidden;
    }
    #menu.menu-loading{
      width:100vw;
    }
    #menu.menu-devis{
      width:100vw;
    }
    #menu.menu-open{
      width:220px;
    }
    .menu-loading #logo {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -100%) scale(1.5);
                transform: translate(-50%, -100%) scale(1.5);
    }
    .menu-ready #logo {
        max-height: calc(100% - 550px);
    }
    #logo {
        position: absolute;
        top: 0;
        left: 50%;
        -webkit-transform: translate(-50%, 0) scale(1);
                transform: translate(-50%, 0) scale(1);
        -webkit-transition:all .5s ease;
        transition: all .5s ease;
        max-height: 100%;
      }
    #logo .empreinte-blanc{
        fill:none;
        stroke:#FFFFFF;
        stroke-width:3;
        stroke-linecap:round;
        stroke-miterlimit:100;
        stroke-dasharray: 100;
      }
    #logo .empreinte-orange{
        fill:none;
        stroke:#FF5722;
        stroke-width:3;
        stroke-linecap:round;
        stroke-miterlimit: 100;
        stroke-dasharray: 100;
      }
    #logo .empreinte-noir{
        fill:none;
        stroke:#242424;
        stroke-width:3;
        stroke-linecap:round;
        stroke-miterlimit:10;
      }
    .menu-loading #logo .empreinte-orange,
    .menu-loading #logo .empreinte-blanc{
          -webkit-animation: animate1 5s infinite linear; /* Chrome, Safari, Opera */
          animation: animate1 5s infinite linear;
      }
    .menu-ready #logo .empreinte-orange,
    .menu-ready #logo .empreinte-blanc{
          stroke-dasharray: 1000;
    }
    @keyframes animate1 {
         to {
        stroke-dashoffset: 1000;
      }
    }
    @-moz-keyframes animate1 {
         to {
        stroke-dashoffset: 1000;
      }
    }
    @-webkit-keyframes animate1 {
         to {
        stroke-dashoffset: 1000;
      }
    }
    #menu.menu-loading h1 {
          position: absolute;
          top: 50%;
          left: 50%;
          -webkit-transform: translatex(-50%);
                  transform: translatex(-50%);
          margin: 0;

      }
    #menu h1 {
          position: absolute;
          top: 50%;
          left: 50vw;
          -webkit-transform: translatex(-50%);
                  transform: translatex(-50%);
          margin: 0;
          font-weight: 600;
      }
    h1 span {
          color: var(--primary);
      }
    .menu-button{
      opacity:0;
      -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
      -webkit-transform: rotate(-90deg) translatey(50%) translatex(30px);
              transform: rotate(-90deg) translatey(50%) translatex(30px);
      position: fixed;
      top: 50%;
      left: -50vh;
      background:transparent;
    }
    .close-button {
        color: var(--primary);
        background: transparent;
        border: none;
        padding: 0 13px;
        position: absolute;
        right: 0;
        display:none;
        -webkit-transition:all .5s ease;
        transition: all .5s ease;
    }
    .close-button i{
      line-height:50px;
    }
    .menu-button.ready {
        background: transparent;
        border: none;
        color: #fff;
        width: 100vh;
        height: 75px;
        -webkit-transform: rotate(-90deg) translatey(50%) translatex(30px);
                transform: rotate(-90deg) translatey(50%) translatex(30px);
        position: fixed;
        top: 50%;
        left: -50vh;
        padding: 0;
        line-height: 75px;
        font-weight: bold;
        letter-spacing: 1px;
        font-family: 'Titillium Web', sans-serif !important;
        font-size: 18px;
        -webkit-transition:all .5s ease;
        transition: all .5s ease;
        opacity:1;
        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    }
    #menu.menu-open .menu-button {
        left: calc(-50vh - 220px);
    }
    .copyright span{
      color:var(--primary);
    }
    .main-menu {
      position: absolute;
      bottom: 150px;
      width: 100%;
      height: auto;
      left:220px;
      -webkit-transition:all .5s ease;
      transition: all .5s ease;
      display:none;
    }
    .menu-ready .main-menu {
      display:block;
    }
    .menu-open .main-menu {
      left:0;
    }
    .main-menu a,
    .main-menu p {
        width: 100%;
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
        line-height: 50px;
        color: #fff;
        font-family: 'titillium Web', sans-serif;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        display: block;
        text-align: center;
        text-decoration: none;
        outline: none;
        position: relative;
       }
    .sous-menu {
          background: var(--primary);
          overflow: hidden;
          height:0px;
          -webkit-transition:all .5s ease;
          transition: all .5s ease;
          color:var(--principal);
      }
    .sous-menu .nuxt-link-active {
            background: var(--secondary)!important;
        }
    .sous-menu a {
              color: var(--secondary);
              font-size: 14px;
              font-weight: 300;
          }
    .social {
        position: absolute;
        bottom: -50px;
        left: 0;
        width: 100%;
        text-align: center;
        opacity:0;
        -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        -webkit-transition:all .5s ease;
        transition: all .5s ease;
    }
    .menu-ready .social{
      bottom: 0;
      opacity:1;
      -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    }
    .copyright {
        margin: 0;
        padding: 0;
        width: 100%;
        position: absolute !important;
        display: block;
        min-width: auto;
        left: 0;
        bottom:0;
        color: #fff;
        -webkit-transition:all .5s ease;
        transition: all .5s ease;
        line-height: 50px;
    }
    .menu-open .copyright {
        left: -220px;
    }
    .sociale-link {
        width: 220px;
        position: relative;
        left: 220px;
        -webkit-transition:all .5s ease;
        transition: all .5s ease;
        color: #fff;
    }
    .menu-open .sociale-link {
        left: 0;
    }
    .sociale-link a {
        line-height: 50px;
        font-weight: bold;
        letter-spacing: 1px;
        font-family: 'Titillium Web', sans-serif !important;
        font-size: 16px;
        background: transparent;
        border: none;
        color:var(--primary);
    }
    .open-link {
        position: relative;
        border-bottom:1px solid var(--noir-clair);
        transition:all .666s ease;
        box-shadow: inset -50px 0px 0px var(--primary);
    }
    .open-link:hover {
        border-bottom:1px solid var(--primary);
        transition:all .666s ease;
    }
    .open-link .material-icons {
        position: absolute;
        right: 0;
        top: 0;
        width: 50px;
        line-height: 50px;
        text-align: center;
    }
    .open-link:hover .material-icons {
        background: var(--primary);
        transition:all .666s ease;

    }
    .menu-open .nuxt-link-exact-active {
        text-decoration:line-through;
        text-decoration-color:var(--primary);
        background: var(--noir-clair);
    }
    .menu-open .sous-menu .nuxt-link-exact-active {
        text-decoration:line-through;
        text-decoration-color:#242424;
        color: var(--primary);
    }
    .material-icons.open {
        transition:all .0s ease;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
    }
    @media only screen and (min-width:960px) and (max-width:1264px){

    }
    @media only screen and (min-width:600px) and (max-width:959px){
        #logo {
            max-height: 35%;
        }
        .menu-ready #logo {
            max-height: 75px;
            top: 15px;
        }
        .main-menu {
            bottom: auto;
            top:100px;
            height: calc(100% - 150px);
            overflow: scroll;
        }
        .menu-ready h1 {
          display: none;
        }
    }
    @media only screen and (max-width:599px){
        .menu-ready h1 {
          display: none;
        }
        #menu.menu-loading {
            width: 100vw;
            height: 100vh;
        }
        #menu {
            height: 50px;
            width: 100vw;
        }
        #menu.menu-open {
            width: 100vw;
            height: 100vh;
        }
        #menu.menu-open .menu-button {
            left: 50%;
            top: -50px;
        }
        .social {
            position: absolute;
            top: 100vh;
            height: 50px;
            -webkit-transform:translatey(0);
                    transform:translatey(0);
            opacity:0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            -webkit-transition: all .3s ease;
            transition:all .3s ease;
        }
        #menu.menu-open .social {
            -webkit-transform:translatey(-100%);
                    transform:translatey(-100%);
            opacity:1;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
            -webkit-transition: all .3s ease .5s;
            transition:all .3s ease .5s;
        }
        .sociale-link {
            width: 100%;
            left: 0;
        }
        .copyright{
          display:none;
        }
        .menu-ready #logo {
          max-height: 40px;
          top: 5px;
          left: 30px;
        }
        .menu-loading #logo {
            -webkit-transform: translate(-50%, -60%) scale(1);
                    transform: translate(-50%, -60%) scale(1);
        }
        .menu-open #logo {
          max-height:75px;
          top:15px;
          left:50%;
        }
        .menu-ready .close-button {
            display:block;
            top:-50px;
        }
        .menu-open .close-button {
            display:block;
            top:0;
        }
        .menu-button {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            -webkit-transform: rotate(0deg) translatey(-100%) translatex(-50%);
                    transform: rotate(0deg) translatey(-100%) translatex(-50%);
            top: 0;
            left: 50%;
        }
        .menu-button.ready {
            height: 50px;
            width: auto;
            top: 0;
            left: 50%;
            -webkit-transform: rotate(0deg) translatey(0) translatex(-50%);
                    transform: rotate(0deg) translatey(0) translatex(-50%);
            line-height: 50px;
        }
        .menu-ready .main-menu {
            display: block;
            max-height: calc(100vh - 140px);
            overflow: scroll;
            height: 100%;
            left: 0;
            top: 90px;
            -webkit-transition: all .3s ease;
            transition:all .3s ease;
        }
        .menu-open .main-menu {
            left: 0;
            top: 90px;
        }
    }
</style>
