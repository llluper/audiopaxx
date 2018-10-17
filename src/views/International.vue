<template>
  <section class="international">
    <div class="columns">
      <div class="column is-4 section">
        <h1 class="is-size-3 title">{{title}}</h1>
        <p>{{text}}</p>
      </div>
      <div class="column is-8">
        <div class="scroller">
        <ul class="">
          <li :key="'icon-'+key" v-for="(value, key) in artists">{{value.name}}</li>
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
  }
  // components: { ContactForm }
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
</style>
