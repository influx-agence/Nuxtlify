<template>
    <section class="realisations">
        <h3 class="bloc-title">Nos derniers clients</h3>
        <div class="owl-carousel crea-carousel">
            <div class="item">
                <svg class="decoration-Slider"></svg>
                <img class="clip-examples" src='~/assets/img/mockup/mlh-works-carou.jpg'>
                <div class="text">
                    <svg class="decoration-poleBot"></svg>
                    <router-link  to="/realisations#muriel-lhermet">
                        <h4>Muriel LHERMET</h4>
                        <p class="headline">Artiste peintre</p>
                    </router-link>
                    <svg class="decoration-poleBot"></svg>
                </div>
            </div>
            <div class="item">
                <svg class="decoration-Slider"></svg>
                <img class="clip-examples" src='~/assets/img/mockup/cdm-works-carou.jpg'>
                <div class="text">
                    <svg class="decoration-poleBot"></svg>
                    <router-link to="/realisations#la-cour-des-miracles">
                        <h4>La cour des miracles</h4>
                        <p class="headline">Studio de tatouage</p>
                    </router-link>
                    <svg class="decoration-poleBot"></svg>
                </div>
            </div>
            <div class="item">
                <svg class="decoration-Slider"></svg>
                <img class="clip-examples" src='~/assets/img/mockup/fin-works-carou.jpg'>
                <div class="text">
                    <svg class="decoration-poleBot"></svg>
                    <router-link to="/realisations#finestra-31">
                        <h4>Finestra31</h4>
                        <p class="headline">Construction et menuiserie</p>
                    </router-link>
                    <svg class="decoration-poleBot"></svg>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import * as $ from 'jquery';
    import * as d3 from "d3";
    if (process.browser) {
      var Jquery = require('jquery');
      var owlCarousel = require('owl.carousel');
    }
    export default {
        mounted: () => {
            function responsivefy(svg) {
              var container = d3.select(svg.node().parentNode);
              var width = parseInt(svg.style("width"));
              var height = parseInt(svg.style("height"));
              var aspect = width / height;
            	svg.attr("viewBox", "0 0 " + width + " " + height).attr("perserveAspectRatio", "xMinYMid").call(resize);
              d3.select(window).on("resize." + container.attr("id"), resize);
            	function resize() {
            		var targetWidth = parseInt(container.style("width"));
            		svg.attr("width", targetWidth);
            		svg.attr("height", Math.round(targetWidth / aspect));
            	}
            }
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
            var decorationSlider = d3.selectAll(".decoration-Slider").attr("width", 451).attr("height", 395).call(responsivefy);
                var selectionS1 = decorationSlider.append("g");
                selectionS1.append("rect").attr("x", 87.344).attr("y", 59.348).attr("transform", "matrix(-0.7071 0.7071 -0.7071 -0.7071 524.6096 177.7086)").attr("width", 276.313).attr("height", 276.313);
                selectionS1.append("rect").attr("x", 425.186).attr("y", 188.19).attr("transform", "matrix(-0.7071 0.7071 -0.7071 -0.7071 882.6011 30.4189)").attr("width", 19.628).attr("height", 19.628);
                selectionS1.append("rect").attr("x", 6.186).attr("y", 188.19).attr("transform", "matrix(-0.7071 0.7071 -0.7071 -0.7071 167.3256 326.6994)").attr("width", 19.628).attr("height", 19.628);
            $(document).ready(function(){
                $(".crea-carousel").owlCarousel({
                    loop:true,
                    mouseDrag:true,
                    touchDrag:true,
                    nav:true,
                    dots:false,
                    lazyLoad:true,
                    autoplay:false,
                    smartSpeed: 1000,
                    center: true,
                    items:1,
                    responsive:{ 320:{ items:1 }, 960:{ items:2 }}
                });
            });
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
/* HIGHLIGHT */
.realisations {
    width: 100%;
    overflow: hidden;
    padding: 50px 0;
    background: rgba(68,68,68,0.1);
    height:900px;
}
.crea-carousel {
    position: relative;
    padding-top: 50px;
    height: 100%;
}
  .crea-carousel .owl-stage-outer {
      overflow: visible;
  }
    .crea-carousel .owl-item{
        position: relative;
        color: #fff;
        text-transform: uppercase;
        height: auto;
    }
    .crea-carousel .item {
        position: relative;
        left: 50%;
        -webkit-transform: translatex(-50%);
                transform: translatex(-50%);
        width: 500px;
        padding-bottom: 50px;
    }
    .crea-carousel svg {
      position: absolute;
      top: 10px;
      left: 0;
    }
    .crea-carousel img {
      position: absolute;
      left: 50%;
      -webkit-transform: translatex(-50%);
      transform: translatex(-50%);
      z-index: 1;
      top: 39.5px;
      width: 378px !important;
      height: 378px;
    }
    .crea-carousel .owl-item .text {
      position: relative;
      text-align: center;
      width: 285px;
      left: 50%;
      -webkit-transform: translatex(-50%);
              transform: translatex(-50%);
      padding-top: 75px;
      background: transparent;
      z-index: -1;
      -webkit-transition: all .5s ease;
      transition:all .5s ease;
      padding-bottom: 0;
    }
    .crea-carousel .owl-item.center .text {
      padding-top: 450px !important;
      background: var(--noir);
    }
          .crea-carousel h4 {
            font-weight: 600;
            letter-spacing: 2px;
            margin: 15px 0;
            font-size: 26px;
            line-height: 28px;
            opacity:0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            -webkit-transition: all .3s ease;
            transition:all .3s ease;
          }
          .crea-carousel .owl-item.center h4 {
            opacity:1 !important;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
            -webkit-transition: all .3s ease .2s;
            transition:all .3s ease .2s;
          }
          .headline {
              font-size: 14px;
              line-height: 18px;
              color: var(--primary);
              font-family: 'Titillium Web', sans-serif;
              padding: 0 0 50px;
              opacity:0;
              -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
              -webkit-transition: all .3s ease;
              transition:all .3s ease;
          }
          .crea-carousel .owl-item.center .headline {
            opacity:1 !important;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
            -webkit-transition: all .3s ease .2s;
            transition:all .3s ease .2s;
          }
          .crea-carousel .decoration-poleBot:first-child {
              position: absolute;
              top: -3px;
              left: 50%;
              -webkit-transform: translatex(-50%);
                      transform: translatex(-50%);
          }
          .crea-carousel .decoration-poleBot:last-child {
              position: absolute;
              bottom: 0;
              left: 50%;
              -webkit-transform: translatex(-50%) translatey(100%);
                      transform: translatex(-50%) translatey(100%);
              top: auto;
          }
          .crea-carousel .decoration-poleBot:first-child path{
            fill:var(--primary);
            -webkit-transition: all .3s ease .2s;
            transition:all .3s ease .2s;
          }
          .crea-carousel .owl-item.center .decoration-poleBot path {
            fill:#fff;
            -webkit-transition: all .3s ease;
            transition:all .3s ease;
          }
          .crea-carousel .decoration-poleBot:last-child path{
            fill:var(--primary) !important;
          }
  .crea-carousel .owl-nav {
      position: absolute;
      width: 100%;
      bottom: 30%;
  }
    .crea-carousel .owl-prev {
        left: calc(50% - 200px);
        position: absolute;
        -webkit-transform: translatex(-50%);
                transform: translatex(-50%);
    }
    .crea-carousel .owl-next {
        left: calc(50% + 200px);
        position: absolute;
        -webkit-transform: translatex(-50%);
                transform: translatex(-50%);
    }
      .owl-prev span, .owl-next span {
        color: #fff;
        font-size: 5em;
        line-height: 17px;
        overflow: hidden;
        padding: 10px;
      }
  .clip-examples {
      -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  .decoration-Slider rect {
    stroke: #FFF;
    stroke-width: 3px;
    fill: transparent;
  }
  @media only screen and (min-width:960px) and (max-width:1264px){
      .crea-carousel .owl-item {
          -webkit-transform: scale(.6);
                  transform: scale(.6);
          -webkit-transition: all .3s ease;
          transition: all .3s ease;
      }
      .crea-carousel .owl-item.center {
          -webkit-transform: scale(1);
                  transform: scale(1);
      }
  }
  @media only screen and (min-width:600px) and (max-width:959px){
  }
  @media only screen and (max-width:599px){
      .crea-carousel{
          padding: 0;
      }
      .crea-carousel .item {
          -webkit-transform: translatex(-50%) scale(0.8) !important;
                  transform: translatex(-50%) scale(0.8) !important;
      }
      .crea-carousel svg {
          left: 2px;
      }
      .crea-carousel .owl-prev {
          left: 0;
          -webkit-transform: none;
                  transform: none;
      }
      .crea-carousel .owl-next {
          -webkit-transform: translatex(-100%);
                  transform: translatex(-100%);
          left: 100%;
      }
      .realisations {
          height: 750px;
      }
  }
</style>
