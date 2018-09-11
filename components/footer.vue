<template>
    <div id="footer" class="footer-influx">
        <section class="footer-white">
            <router-link class="logo-footer" to="/">
              <svg id="logoF" viewBox="196 275 230 256" enable-background="new 196 275 230 256" xml:space="preserve"></svg>
            </router-link>
            <p class="typo-logo">INFL<b>UX</b>-AGENCY</p>
            <span><b>©</b>Tous droits réservés</span>
            <address class="my-3">
            8 Chemin Auguste Gratian<br>
            31140 Aucamville<br>
            <a slot="activator" href="tel:+33950106621">+339 50 10 66 21</a><br>
            <a href="mailto:contact@piks-l.com">contact@influx-agence.fr</a><br>
            </address>
            <span class="body-1 wow pulse">Influx <b>&hearts;</b> v0.0.1</span>
        </section>
    </div>
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
    #footer .footer-white {
        width: 100%;
        float: left;
        background:var(--secondary);
        color:var(--gris-clair);
        text-align:center;
        padding-top: 16px;
    }
    #footer .footer-white p{
        text-align: center;
    }
    #footer .footer-white span{
        color:var(--noir);
    }
    #footer .footer-white b{
        color:var(--primary);
    }
    #footer .footer-white a{
        color:var(--gris-clair);
        text-decoration: underline;
        -webkit-text-decoration-color: var(--primary);
        text-decoration-color: var(--primary);
    }
    #footer .footer-white #logoF {
      width: 70px;
      height: 70px;
      position: relative;
      display: block;
      margin: 0 auto;
    }
    @media only screen and (min-width:960px) and (max-width:1264px){

    }
    @media only screen and (min-width:600px) and (max-width:959px){

    }
    @media only screen and (max-width:599px){
        .footer-white {
            padding: 15px 0;
        }
    }
</style>
