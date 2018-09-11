<template>
  <div>
    <influx-menu/>
    <div class="body scroll-animations">
        <nuxt/>
    </div>
    <influx-devis data-aos="fade-up" />
    <influx-footer data-aos="fade-up"/>
  </div>
</template>
<script>
import influxMenu from '~/components/menu.vue'
import influxDevis from '~/components/devis.vue'
import influxFooter from '~/components/footer.vue'

export default {
    transition: 'page',
    components: {
        influxMenu,
        influxFooter,
        influxDevis
    },
    watch: {
      '$route' (to, from) {
          console.log('%cWATCH %c/'+this.$route.name, 'font-size: 15px; background: #ff5722; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
      }
    },
    created: () => {
        console.log('%cAPP %cCreated', 'font-size: 15px; background: #ff5722; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
    },
    beforeMount: () => {
        console.log('%cAPP %cBefore mounted', 'font-size: 15px; background: #ff5722; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
    },
    mounted: () => {
        console.log('%cAPP %cMounted', 'font-size: 15px; background: #ff5722; color: #ffffff; padding: 5px;' , 'font-size: 15px; background: #242424; color: #ffffff; padding: 5px;');
        AOS.init();
    }
}

</script>
<style>
    .page-enter-active, .page-leave-active {
      transition: all .5s ease;
    }
    .page-enter-active .vertical-center, .page-leave-active .vertical-center {
      transition: all 3s ease;
      padding: 500px 0!important;
      position: relative;
    }
    .page-enter, .page-leave-active {
      opacity: 0;
      filter:blur(100px);
    }
    .page-enter .vertical-center, .page-leave .vertical-center {
      position: relative;
      padding: 70px 0!important;
    }
</style>
