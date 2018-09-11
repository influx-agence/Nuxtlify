<template>
    <div id="page-agence" class="influx-router">
      <header class="influx-intro" >
        <svg class="decoration-poleBot intro-deco"></svg>
        <div class="vertical-center">
            <h3 class="bloc-title animated fadeInUp delay04s">NOS VALEURS</h3>
            <h2 class="animated fadeInUp delay05s"><b>Influx</b> c’est avant tout une philosophie et des valeurs partagées avec nos clients</h2>
        </div>
        <svg class="decoration-poleBot intro-deco-bot"></svg>
      </header>
      <section class="creativite">
          <h2 class="right-title">Créativité et pertinence</h2>
          <div class="left-bloc">
            <p>
              Le moteur de notre démarche est la créativité. Nous adorons créer, réfléchir, analyser, concevoir et inventer. Nous aimons l’esthétique, le design et parfois prendre quelques risques, en gardant toutefois la pertinence comme valeur centrale.
            </p>
            <p>
              Que ce soit dans le design, le développement ou le message en lui même, nous cherchons le ton juste sur chacun des projets auxquels nous participons.
            </p>
          </div>
      </section>
      <section class="creativite">
          <h2 class="left-title">Un partenaire impliqué</h2>
          <div class="right-bloc">
            <p>
              Influx se pose comme un partenaire avec chacun de ses clients. La réussite de notre action implique un engagement total de notre part et une adéquation parfaite.
            </p>
            <p>
              De ce fait, en plus de votre demande précise, nous avons besoin de connaître votre démarche globale, les valeurs que vous représentez ainsi que votre culture d’entreprise.
            </p>
            <p>
              La stratégie digitale et les dispositifs qui en découlent doivent être en accord parfait avec votre environnement, les enjeux auxquels vous faites face et les objectifs à atteindre.
            </p>
          </div>
      </section>
      <section class="creativite">
          <h2 class="right-title">Performance et business</h2>
          <div class="left-bloc">
            <p>
              Nos dispositifs sont pensés pour atteindre les objectifs fixés en restant en adéquation avec votre activité et ses enjeux. Nous développons des outils sur mesure dans une logique de performance.
            </p>
            <p>
              Pour chaque site, plateforme ou application nous définissons des métriques de performance et les outils d’analyse à mettre en place afin de suivre le déroulement des opérations et optimiser votre stratégie en temps réel.
            </p>
          </div>
      </section>
      <section class="creativite">
          <h2 class="left-title">Qualité et excellence</h2>
          <div class="right-bloc">
            <p>
              Nous sommes des passionnés et nous adorons ce que nous faisons. Nous cherchons constamment à nous améliorer et la remise en question est quasi-permanente chez Influx.
            </p>
            <p>
              Veille technologique, formation, collaborations, échange, nous utilisons tous les moyens à notre disposition pour rester en phase avec l’actualité de notre métier.
            </p>
            <p>
              Nous optimisons nos systèmes et nos méthodes tous les jours un peu plus, notre évolution est constante.
            </p>
          </div>
      </section>
    </div>
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
          titleTemplate: '%s - Découvrez notre philosophie - Agence web Aucamville',
          meta: [
            { hid: 'description', name: 'description', content: 'Voici notre philosophie et les valeurs que nous revendiquons.Nous espérons que vous les partagerez avec nous dans vos projets.' },
            { 'property': 'og:title', 'content': 'INFLUX - Découvrez notre philosophie - Agence web Aucamville', 'vmid': 'og:title' },
            { 'property': 'og:description', 'content': 'Voici notre philosophie et les valeurs que nous revendiquons.Nous espérons que vous les partagerez avec nous dans vos projets.' },
            { 'property': 'og:image', 'content': socialImage, 'vmid': 'og:image' },
            { 'property': 'og:url', 'content': 'https://influx-agence.fr/valeurs', 'vmid': 'og:url' }
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
    .creativite {
        background:url(~/assets/img/background/influx-agence-top.jpg) no-repeat fixed center center / cover;
    }
    header.influx-intro {
        min-height: 80vh;
        padding: 50px 10%;
        position: relative;
        vertical-align: middle;
        display: table-cell;
        height: 80vh;
        background:url(~/assets/img/background/influx-agence-top.jpg) no-repeat fixed center center / cover;
    }
    @media only screen and (min-width:960px) and (max-width:1264px){

    }
    @media only screen and (min-width:600px) and (max-width:959px){
        .right-bloc,
        .left-bloc {
            width: calc(100% - 100px);
            left: 50px;
            padding: 30px;
            margin-top: 50px;
        }
        #page-agence section h2 {
            position: relative;
            width: calc(100% - 100px);
            top: 50px;
            -webkit-transform: none;
                    transform: none;
            padding: 0;
            left: 50px;
        }
    }
    @media only screen and (max-width:599px){
        .influx-intro,
        .footer-devis,
        section {
            padding: 30px 15px;
        }
        .right-bloc,
        .left-bloc {
            width: calc(100% - 30px);
            left: 15px;
            padding: 15px;
            margin-top: 100px;
            text-align: justify;
        }
        .owl-item.center {
            opacity: 1;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
            -webkit-transition: all .5s ease;
            transition: all .5s ease;
        }
        .owl-item {
            opacity: 0;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        }
        #page-agence section h2 {
            width: calc(100% - 60px);
            top: 50px;
            -webkit-transform: none;
                    transform: none;
            padding: 0;
            left: 30px;
        }
    }
</style>
