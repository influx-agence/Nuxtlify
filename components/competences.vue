<template>
    <section class="domaines-activite" >
      <div class="select-grab">
        <div class="pole">
          <nuxt-link to="/conseil" class="vignette">
            <h4>Conseil</h4>
          </nuxt-link>
        </div><div class="pole">
          <nuxt-link to="/creation" class="vignette">
            <h4>Création</h4>
          </nuxt-link>
        </div><div class="pole">
          <nuxt-link to="/technique" class="vignette">
            <h4>Technique</h4>
          </nuxt-link>
        </div><div class="pole">
          <nuxt-link to="/communication" class="vignette">
            <h4>Communication</h4>
          </nuxt-link>
        </div>
      </div>
    </section>
</template>
<script>
    import * as $ from 'jquery';

    export default {
        mounted: () => {
            $(window).scroll(function(){

              var height = $('.influx-intro').height();
              var selectH = $('.domaines-activite').height();

               if($(window).scrollTop()>= height + selectH + 100 ){
                  $('.domaines-activite .select-grab').addClass("grab");
               }else{
                  $('.domaines-activite .select-grab').removeClass("grab");
               }

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
.domaines-activite {
    position: relative;
    top: 0;
    padding: 50px 0 50px;
    height:150px;
    transition: all .5s ease;
}
.pole {
    width: 25%;
    position: relative;
    height: auto;
    display: inline-block;
    text-align: center;
    overflow:hidden;
}
.pole .vignette {
    width: 283px;
    position: relative;
    left: 50%;
    -webkit-transform: translatex(-50%);
    transform: translatex(-50%);
    padding: 15px 0;
    background: var(--noir);
    box-shadow: 0px 0px 30px var(--noir);
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    display: block;

}

.pole .vignette h4 {
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 0;
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
.pole .vignette.nuxt-link-exact-active{
    background: var(--primary);
}
.pole .vignette.nuxt-link-exact-active h4{
    color: #fff;
}
.pole .vignette.nuxt-link-exact-active:hover h4 {
    color: var(--noir);
}
.pole .vignette:hover h4 {
    color: var(--primary);
}
.grab {
    position: fixed;
    padding: 0 ;
    z-index: 10;
    top: 0;
    width: calc(100% - 75px);
    background:var(--noir-clair);
}
@media only screen and (min-width:960px) and (max-width:1264px){
    .domaines-activite {
        padding: 0;
        font-size: 14px;
    }
    .poles, .pole {
        display: inline-block;
        padding-bottom: 44px;
        -webkit-transform: scale(.8);
                transform: scale(.8);
        overflow:hidden;
    }
}
@media only screen and (min-width:600px) and (max-width:959px){
    .domaines-activite {
        padding: 0;
        font-size: 14px;
    }
    .pole .decoration-poleTop,
    .pole .decoration-poleBot {
        display: none;
    }
    .pole .vignette{
      width:100%;
    }
    .pole .vignette,
    .pole .vignette h4 {
        padding: 0;
        font-size: 12px;
        padding: 15px 0;
    }
}
@media only screen and (max-width:599px){
    .domaines-activite {
        padding: 0;
        height: 275px;
    }
    .pole{
      width:100%;
    }
    .pole .decoration-poleTop,
    .pole .decoration-poleBot {
        display: none;
    }
    .pole .vignette{
      width:100%;
      padding: 0 !important;
    }
    .pole .vignette,
    .pole .vignette h4 {
        padding: 0;
        font-size: 12px;
        padding: 15px 0;
    }
    .grab {
        top: 0;
        width: 100%;
        position: relative;
    }
}
</style>
