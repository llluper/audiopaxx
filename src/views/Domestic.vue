<template>
  <section class="domestic">
    <div class="columns">
      <div class="column is-8">
          <div class="scroller">
        <div class="columns is-gapless is-multiline is-flex">
            <div class="column is-half-mobile is-one-quarter" :key="'domes-'+key" v-for="(value, key) in artists">
              <img @click="goToDetail(value.folder.replace(/\s+/g, '-'))" :src="require('../../public/img/domestic/' + value.folder + '/' + value.folder.replace(/\s+/g, '').toUpperCase() + '_THUMB.jpg')" :alt="value.folder">
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
}
.is-8 {
  padding: 0;
  background-color: #000;
}
p {
  padding-bottom: 15px;
}
</style>
