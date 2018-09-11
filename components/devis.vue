<template>
    <section class="footer-devis">
        <div class="center">
            <h3><b>Laissez-vous guider par nos experts</b> et travaillons ensemble à la <b><u>réussite de vos projets.</u></b></h3>
            <router-link to="/contact">DEMANDEZ VOTRE DEVIS GRATUIT</router-link>
        </div>
    </section>
</template>
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
    .footer-devis {
        background:url(~/assets/img/background/influx-accueil-bot.jpg) no-repeat fixed center center / cover;
        padding: 50px;
        width: calc(100% - 75px);
        left: 75px;
        text-align: center;
    }
    .footer-devis h3 {
        font-size: 42px;
        font-weight: 400;
        text-transform: none;
        line-height: 1.5em;
        border:none;
        padding: 0;
        text-align: center;
        position: relative;
        display: inline-block;
        left: 50%;
        -webkit-transform: translatex(-50%);
        transform: translatex(-50%);
        letter-spacing: 3px;
    }
    .footer-devis u {
      text-decoration: underline;
      -webkit-text-decoration-color: var(--noir-clair);
              text-decoration-color: var(--noir-clair);
    }
    .footer-devis a {
        margin: 0;
        text-transform: uppercase;
        font-size: 18px;
        letter-spacing: 1px;
        color: var(--noir);
        background: #fff;
        padding: 15px;
        font-weight: 700;
        position: relative;
        display: block;
        left: 50%;
        -webkit-transform: translatex(-50%);
                transform: translatex(-50%);
        width: 350px;
        margin-top: 30px;
    }
    @media only screen and (min-width:960px) and (max-width:1264px){
        .footer-devis h3 {
            font-size: 32px;
        }
    }
    @media only screen and (min-width:600px) and (max-width:959px){
        .footer-devis h3 {
            font-size: 30px;
        }
    }
    @media only screen and (max-width:599px){
        .footer-devis h3 {
            font-size: 22px;
        }
        .footer-devis a {
            font-size: 12px;
            width: 100%;
        }
        .footer-devis{
            width: 100%;
            left: 0;
            padding: 50px 15px;
        }
    }
</style>
