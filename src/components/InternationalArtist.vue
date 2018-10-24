<template>
  <div class="international-artist">
    <div class="columns" v-for="(product,index) in artists" :key="'international-artist-'+index" v-if="proId == product.name.replace(/\s+/g, '-')">
      <div class="column is-4">
        <!-- <div class="columns is-gapless">
          <carousel :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide :key="'domest-artist-carousel-'+index" v-for="(image, index) in product.images">
              <span class="helper"></span><img :src="require('../../public/img/international/'+product.folder+ '/'+image)">
            </slide>
          </carousel>
        </div> -->
      </div>

      <div class="column is-8">
        <div class="scroller">
        <ul class="">
          <li @click="goToDetail(value.name.replace(/\s+/g, '-'))" :key="'icon-'+key" v-for="(value, key) in artists">{{value.name}}</li>
        </ul>
        </div>
      </div>
    </div>
   <!-- <div class="row">
    <div class="col-md-12" v-for="(product,index) in artists" :key="index">
     <div v-if="proId == product.folder">
      <h1>{{product.folder}}</h1>
      <img :src="require('../../public/img/international/' + product.folder + '/' + product.images[0])" :alt="product.folder">
     </div>
    </div>
   </div> -->
 </div>
</template>
<script>
import { artists } from '../assets/data/International.json'

export default {
  name: 'international-artist',
  data () {
    return {
      proId: this.$route.params.Pid,
      artists: artists
    }
  },
  methods: {
    goToDetail (proId) {
      this.$router.push({ name: 'international-artist', params: { Pid: proId } })
    }
  }
}
</script>
<style lang="scss" scoped>
.international-artist {
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
  vertical-align: middle;
}

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
li {
  cursor: pointer;
}
</style>
