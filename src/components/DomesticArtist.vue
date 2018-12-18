<template>
  <div class="domestic-artist">
    <div class="columns" v-for="(product,index) in artists" :key="'domestic-artist-'+index" v-if="proId == product.folder.replace(/\s+/g, '-')">
      <div class="column is-8 is-8-desktop">
        <div class="columns is-gapless">
          <carousel :navigationPrevLabel="prev" :navigationNextLabel="next" :autoplay="true" :autoplayTimeout="3000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide :key="'domest-artist-carousel-'+index" v-for="(image, index) in product.images">
              <div :style="{ background: 'url('+require('../../public/img/domestic/' + product.folder + '/' + image)+') center center no-repeat', backgroundSize:'cover'}" class="slider-size">
              </div>
            </slide>
          </carousel>
        </div>
      </div>

      <div class="column is-4 is-4-desktop section">
        <h1 class="is-size-3 is-size-4-mobile title has-text-left">{{product.folder}}</h1>
        <p v-for="(product,index) in product.bio.split('\n')" :key="'domestic-artist-bio'+index">{{product ? product :
          'Bio coming soon...'}}
        </p>
        <ArtistSocialMediaIcons :links="product.social" />
      </div>
    </div>
 </div>
</template>
<script>
import { Domestic } from '../assets/data/statics.js'
import ArtistSocialMediaIcons from '@/components/ArtistSocialMediaIcons.vue'

export default {
  name: 'domestic-artist',
  data () {
    return {
      proId: this.$route.params.Pid,
      title: 'domest-artist',
      artists: Domestic.artists,
      loaded: false
    }
  },
  components: {
    ArtistSocialMediaIcons
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    },
    3000)
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
.domestic-artist {
  background: #DFDFDF;
}
.columns {
  min-height: 100vh;
}
.is-4, .is-4-desktop {
  position: relative;
  max-height: 100vh;
  overflow: auto;
}
.is-8, .is-8-desktop {
  padding: 0;
  max-height: 100vh;
  overflow: hidden;
  background-color: #000;
}
.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
img {
  vertical-align: top;
}
p {
  padding-bottom: 15px;
}
</style>
