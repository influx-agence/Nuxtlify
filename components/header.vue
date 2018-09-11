<template>
    <header class="influx-intro" >
      <svg class="decoration-poleBot intro-deco"></svg>
      <div class="vertical-center">
          <h3 class="bloc-title animated fadeInUp delay04s">{{ $store.state.counter }}</h3>
      </div>
      <svg class="decoration-poleBot intro-deco-bot"></svg>
    </header>
</template>
<script>
    import * as $ from 'jquery'
    import * as d3 from "d3"
    export default {
        data() {
          return {
            post: 0
          }
        }
    }
</script>
