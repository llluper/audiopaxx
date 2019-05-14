<template>
  <section class="international">
    <div class="columns">
      <div :class="{'column is-4 section': true, 'column-custom': $route.params.Pid !== undefined}">
        <div v-if="!$route.params.Pid">
          <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
          <p v-for="(product, index) in text.split('\n')" :key="'international-text-'+index">
            {{product}}
          </p>
<p></p>
<h1 class="is-size-3 is-size-4-mobile title">Label Brands</h1>
<div class="brands-div">
    <ul class="brands">
      <li>Disciple</li>
      <li>Night Bass</li>
      <li>Ed Banger</li>
      <li>OWSLA</li>
      <li>This Aint Bristol</li>
    </ul>
    </div>
<p></p>
<h1 class="is-size-3 is-size-4-mobile title">No. of Tours:</h1>
<p class="notours">2012 - 4 <span>|</span> 2013 - 11 <span>|</span> 2014 - 27 <span>|</span> 2015 - 45 <span>|</span> 2016 - 63 <span>|</span> 2017 - 50 <span>|</span> 2018 - 47 <span>|</span> 2019 - 12</p>
        </div>
        <div v-for="(product, index) in artists" :key="'international-artist-'+index" v-show="$route.params.Pid != undefined && $route.params.Pid == product.name.replace(/\s+/g, '-')">
          <carousel :navigationPrevLabel="prev" :navigationNextLabel="next" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide :key="'inter-events-'+index" v-for="index in (product.count != undefined ? product.count : 1)" :style="{ background: 'url('+require('../../public/img/international/' + product.name.toUpperCase().replace(/\s+/g, '-') + (index != 0 && index != 1 ? '-' + index : '') + '.jpg') + ') center center no-repeat', backgroundSize:'cover'}" class="international-artist">
              <div :style="{ background: 'url('+require('../../public/img/international/' + product.name.toUpperCase().replace(/\s+/g, '-') + (index != 0 && index != 1 ? '-' + index : '') + '.jpg') + ') center center no-repeat', backgroundSize:'cover'}" class="slider-size">
              </div>
            </slide>
          </carousel>
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
  name: 'tours',
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
ul.brands {
  list-style-type: disc;
  text-align: left;
  -moz-column-count: 2;
  -moz-column-gap: 20px;
  -webkit-column-count: 2;
  -webkit-column-gap: 20px;
  column-count: 2;
  column-gap: 20px;
}
ul:not(.brands) {
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
.notours {
  // font-style: italic;
  span {
    font-style: none;
    font-weight: 700;
  }
}
.brands-div {
  padding: 0 20px 20px;
}
</style>
