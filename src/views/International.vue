<template>
  <section class="international">
    <div class="columns">
      <div :class="{'column is-4 section': true, 'column-custom': $route.params.Pid !== undefined}">
        <div v-if="!$route.params.Pid">
          <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
          <p v-for="(product, index) in text.split('\n')" :key="'international-text-'+index">
            {{product}}
          </p>
        </div>
        <div v-for="(product, index) in artists" :key="'international-artist-'+index" v-if="$route.params.Pid != undefined && $route.params.Pid == product.name.replace(/\s+/g, '-')">
          <carousel :navigationPrevLabel="prev" :navigationNextLabel="next" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide :key="'inter-events-'+index" v-for="index in (product.count != undefined ? product.count : 1)" :style="{ background: 'url('+require('../../public/img/international/' + product.name.toUpperCase().replace(/\s+/g, '-') + (index != 0 && index != 1 ? '-' + index : '') + '.jpg') + ') center center no-repeat', backgroundSize:'cover'}" class="international-artist">
              <!-- <span class="helper"></span><img :src="require('../../public/img/events/'+image)"> -->
              <div :style="{ background: 'url('+require('../../public/img/international/' + product.name.toUpperCase().replace(/\s+/g, '-') + (index != 0 && index != 1 ? '-' + index : '') + '.jpg') + ') center center no-repeat', backgroundSize:'cover'}" class="slider-size">
              </div>
            </slide>
          </carousel>
          <!-- <p>{{product.name}}</p> -->
          <!-- <img :src="require(`../../public/img/international/${product.name.toUpperCase().replace(/\s+/g, '-')}.jpg`)" :alt="product.name"> -->
        </div>
      </div>
      <div class="column is-8">
        <div class="scroller">
        <ul class="">
          <li @click="goToDetail(value.name.replace(/\s+/g, '-'))" :key="'icon-'+key" v-for="(value, key) in artists">{{value.name}}</li>
        </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { International } from '../assets/data/statics.js'

export default {
  name: 'international',
  data () {
    return {
      title: International.title,
      text: International.text,
      artists: International.artists
    }
  },
  methods: {
    goToDetail (proId) {
      this.$router.push({ name: 'international-artist', params: { Pid: proId } })
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

<style scoped lang="scss">
.columns {
  min-height: 100vh;
}
.is-8 {
  background-color: #000;
}
li {
  font-size: 0.8rem;
}
ul {
  @media only screen and (min-width: 580px) {
    padding: 4rem 8rem;
  }
  text-align: left;
  color: #fff;
  -moz-column-count: 3;
  -moz-column-gap: 20px;
  -webkit-column-count: 3;
  -webkit-column-gap: 20px;
  column-count: 3;
  column-gap: 20px;
  overflow: scroll;
}
.is-4 {
  background-color: #fff;
}
li:hover {
  cursor: pointer;
  color: #666;
}
p {
  padding-bottom: 15px;
}
.international-artist {
  width: 100%;
  height: 100%;
}
.column-custom {
  padding: 0;
  background-color: #000;
}
</style>
