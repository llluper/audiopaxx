<template>
  <div class="domestic-artist">
    <div class="columns" v-for="(product,index) in artists" :key="'domestic-artist-'+index" v-if="proId == product.folder.replace(/\s+/g, '-')">
      <div class="column is-12-tablet is-8-desktop">
        <div class="columns is-gapless">
          <carousel :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
            <slide :key="'domest-artist-carousel-'+index" v-for="(image, index) in product.images">
              <span class="helper"></span><img :src="require('../../public/img/domestic/' + product.folder + '/' + image)">
            </slide>
          </carousel>
        </div>
      </div>

      <div class="column is-12-tablet is-4-desktop section">
        <h1 class="is-size-3 title">{{product.folder}}</h1>
        <p v-for="(product,index) in product.bio.split('\n')" :key="'domestic-artist-bio'+index">{{product ? product :
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem numquam sed nemo quod odit tenetur consequuntur delectus repudiandae, nobis est quasi aspernatur laborum fugit consectetur doloremque perspiciatis laudantium sapiente possimus.'}}
        </p>
        <ArtistSocialMediaIcons :links="product.social" />
      </div>
    </div>
   <!-- <div class="row">
    <div class="col-md-12" v-for="(product,index) in artists" :key="index">
     <div v-if="proId == product.folder">
      <h1>{{product.folder}}</h1>
      <img :src="require('../../public/img/domestic/' + product.folder + '/' + product.images[0])" :alt="product.folder">
     </div>
    </div>
   </div> -->
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
      artists: Domestic.artists
    }
  },
  components: {
    ArtistSocialMediaIcons
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
    // background-color: #000;
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
p {
  padding-bottom: 20px;
}
</style>
