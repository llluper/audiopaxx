<template>
  <section class="international">
    <div class="columns">
      <div class="column is-4 section">
        <div v-if="!$route.params.Pid">
          <h1 class="is-size-2 is-size-3-mobile title">{{title}}</h1>
          <p v-for="(product, index) in text.split('\n')" :key="'international-text-'+index">
            {{product}}
          </p>
        </div>
        <div v-for="(product, index) in artists" :key="'international-artist-'+index" v-if="$route.params.Pid != undefined && $route.params.Pid == product.name.replace(/\s+/g, '-')">
         <p>{{product.name}}</p>
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
import { artists } from '../assets/data/International.json'

export default {
  name: 'international',
  data () {
    return {
      title: International.title,
      text: International.text,
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
li {
  cursor: pointer;
}
p {
  padding-bottom: 20px;
}
</style>
