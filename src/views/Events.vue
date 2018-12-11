<template>
  <section class="events">
    <div class="columns is-multiline">
      <div class="column is-12-tablet is-4-desktop section">
        <div class="sectionn">
          <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
          <p v-for="(product, index) in text.split('\n')" :key="'events-text-'+index">
            {{product}}
          </p>
        </div>
        <div class="sectio">
          <h1 class="is-size-3 is-size-4-mobile title">Venues</h1>
          <p>Audiopaxx books the following unique and highly exclusive venues in Australasia like nothing else in the world.</p>
          <p class="has-text-weight-bold top20">- The Sydney Glass Island</p>
          <img :src="require('../../public/img/events/glasshouse.jpg')" alt="Audiopaxx Events">
          <p class="top20">The ultimate Sydney Harbour venue for your dance party, celebration or corporate event. The Sydney Glass Island is a magnificent venue for dining &amp; celebrations, in one of the world's most spectacular settings - Sydney Harbour. With an unrestricted 360 degree outlook, you will be captivated by breathtaking harbour views throughout the duration of your event.</p>
          <p class="has-text-weight-bold top20">- Cloud 9, Fiji</p>
          <img :src="require('../../public/img/events/cloud.jpg')" alt="Audiopaxx Events">
          <p class="top20">
            A floating boathouse surrounded by crystal waters near the
            world famous surf destination 'Cloud Break’ with 360 degrees of the
            picturesque Fijian Pacific Ocean. The venue serves delicious wood fire pizzas and world famous cocktails on reclining day chairs with some of the biggest DJs in the world listed this as their favourite venue. Perfect for corporates, album launches and takeovers
            <a href="https://www.cloud9.com.fj/">https://www.cloud9.com.fj/</a>
          </p>
        </div>
        <div class="sectio bot20">
          <h1 class="is-size-3 is-size-4-mobile title">Events</h1>
          <p>Audiopaxx domestic and international Agents book the following events;</p>
          <ul>
            <li @click="goToDetail(value.name.replace(/\s+/g, '-'))" :key="'icon-'+key" v-for="(value, key) in events">{{value}}</li>
          </ul>
          <img :src="require('../../public/img/events/events-13.jpg')" alt="Audiopaxx Events">
        </div>
        <div class="sectio">
          <h1 class="is-size-3 is-size-4-mobile title">Festivals</h1>
          <p>Audiopaxx domestic and international Artists have performed at the following festivals;</p>
          <ul>
            <li @click="goToDetail(value.name.replace(/\s+/g, '-'))" :key="'icon-'+key" v-for="(value, key) in festivals">{{value}}</li>
          </ul>
        </div>
        <div class="sectio">
          <h1 class="is-size-3 is-size-4-mobile title">Corporate</h1>
          <p>Audiopaxx team of Agents have placed Artists with the following corporate brands;</p>
          <ul>
            <li @click="goToDetail(value.name.replace(/\s+/g, '-'))" :key="'icon-'+key" v-for="(value, key) in corporate">{{value}}</li>
          </ul>
        </div>
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
      events: Events.events,
      festivals: Events.festivals,
      corporate: Events.corporate,
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
.sectio {
  padding-top: 30px;
}

li {
  font-size: 0.8rem;
}
ul {
list-style-type: disc;
@media only screen and (min-width: 580px) {
    padding: 0 2rem 2rem;
  }
  text-align: left;
  // color: #fff;
  -moz-column-count: 3;
  -moz-column-gap: 20px;
  -webkit-column-count: 3;
  -webkit-column-gap: 20px;
  column-count: 2;
  column-gap: 20px;
  overflow: scroll;
}
.bot20 {
  padding-bottom: 30px;
}
.top20 {
  padding-top: 15px;
}
</style>
