<template>
  <section class="domestic">
    <div class="columns">
      <div class="column is-8">
          <div class="scroller">
        <div class="columns is-gapless is-multiline is-flex">
            <div class="column is-half-mobile is-one-quarter" :key="'domes-'+key" v-for="(value, key) in artists">
            <!-- <div class="is-one-quart"  style="background-image: url('../assets/x.jpg')"> -->
              <img @click="goToDetail(value.folder.replace(/\s+/g, '-'))" :src="require('../../public/img/domestic/' + value.folder + '/' + value.folder.replace(/\s+/g, '').toUpperCase() + '_THUMB.jpg')" :alt="value.folder">
              <!-- <img :src="require('../../public/domestic/' + value.name.toLowercase() + 'jpg')" alt=""> -->
            <!-- </div> -->
            <!-- <p>{{value.name}}</p> -->
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4 section">
        <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
        <p v-for="(product, index) in text.split('\n')" :key="'domestic-artist-bio'+index">
          {{product}}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
import { Domestic } from '../assets/data/statics.js'
// import { artists } from '../assets/data/Domestic.json'
// import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'domestic',
  data () {
    return {
      title: Domestic.title,
      text: Domestic.text,
      artists: Domestic.artists
    }
  },
  methods: {
    goToDetail (proId) {
      this.$router.push({ name: 'domestic-artist', params: { Pid: proId } })
    }
  }
  // components: { ContactForm }
}
</script>

<style scoped lang="scss">
.domestic {
  background: #DFDFDF;
  img {
    cursor: pointer;
  }
}

.is-one-quarter {
  // height: calc(100vh / 4);
  min-height: 100%;

  img {
    min-height: 100%;
    width: auto;
  }
  max-height: 300px;

  @media only screen and (min-width: 600px) {
    height: 200px;
  }
  @media only screen and (min-width: 768px) {
    height: 240px;
  }
  @media only screen and (min-width: 1480px) {
    height: 300px;
  }
  @media only screen and (min-width: 1280px) {
    height: 260px;
  }
  @media only screen and (max-width: 400px) {
    max-height: 200px;
  }
  @media only screen and (max-width: 600px) {
    max-height: 180px;
  }
  // display: inline-block;
  // height: 0;
  // padding-bottom: 25% !important;
  // width: 25% !important;
  // background-size: cover;
  // background-position: center center;
}
.is-8 {
  padding: 0;
  background-color: #000;
}

.columns {
  // min-height: 100%;
}
p {
  padding-bottom: 15px;
}
</style>
