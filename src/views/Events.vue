<template>
  <section class="events">
    <div class="columns is-multiline">
      <div class="column is-12-tablet is-4-desktop section">
        <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
          <p v-for="(product, index) in text.split('\n')" :key="'events-text-'+index">
            {{product}}
          </p>
      </div>
      <div class="column is-12-tablet is-8-desktop">
        <carousel :navigationPrevLabel="prev" :navigationNextLabel="next" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
          <slide :key="'events-'+index" v-for="(image, index) in images">
            <!-- <span class="helper"></span><img :src="require('../../public/img/events/'+image)"> -->
            <div :style="{ background: 'url('+require('../../public/img/events/' + image)+') center center no-repeat', backgroundSize:'cover'}" class="slider-size">
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
import { Events } from '../assets/data/statics.js'

export default {
  name: 'events',
  data () {
    return {
      title: Events.title,
      text: Events.text,
      images: Events.images
    }
  },
  computed: {
    prev () {
      return `<i class="fas fa-5x fa-angle-left"></i>`
    },
    next () {
      return `<i class="fas fa-5x fa-angle-right"></i>`
    }
  }
}
</script>
<style lang="scss" scoped>
.events {
  background: #DFDFDF;
}
.columns {
  min-height: 100vh;
}
.is-4-desktop {
  position: relative;
  max-height: 100vh;
  overflow: auto;
}
.is-8-desktop {
  padding: 0;
  max-height: 100vh;
  overflow: hidden;
  // @media only screen and (max-width: 1023px) {
    background-color: #000;
  // }
}
.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

img {
  // background: #3A6F9A;
  vertical-align: top;
  // max-height: 25px;
  // max-width: 160px;
}
p {
  padding-bottom: 15px;
}
//CODE TO MAKE CAROUSEL PICTURES SCROLLABLE
// .slider-size {
//   width: calc(100vh * (1920/1080));
//   overflow: scroll;
// }
// .VueCarousel-slide {
//   overflow: auto;
// }
</style>
