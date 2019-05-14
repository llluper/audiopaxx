<template>
  <section class="about">
    <div class="columns is-multiline">
      <div class="column is-12-tablet is-4-desktop section">
        <div class="aboutSection">
        <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
        <p :key="'abouttext-'+index" v-for="(text, index) in textArray">
          {{text}}<br><br>
        </p>
        </div>
        <div class="teamSection">
          <h1 class="is-size-3 is-size-4-mobile title">{{titleTwo}}</h1>
          <div class="the-team">
            <div class="columns is-multiline is-gapless is-mobile">
              <div :key="'icon-'+key" v-for="(value, key) in team" class="column is-3">
                <img :src="require('../../public/img/team/' + value.email.split('@')[0]+'.png')" :alt="value.name">
                  <p class="has-text-centered"><span class="is-uppercase has-text-weight-bold">{{value.name}}</span><br>
                  <span class="has-text-weight-bold">{{value.position}}</span><br>
                  <a :href="'mailto:'+value.email">{{value.email}}</a>
                </p>
              </div>
              <div class="team-text">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-12-tablet is-8-desktop">
        <carousel :navigationPrevLabel="prev" :navigationNextLabel="next" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
          <slide :key="'events-'+index" v-for="(image, index) in images">
            <span class="helper"></span><img :src="require('../../public/img/about/'+image)">
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
import { About } from '../assets/data/statics.js'

export default {
  name: 'about',
  data () {
    return {
      title: About.title,
      titleTwo: About.titleTwo,
      text: About.text,
      textArray: [],
      team: About.teamList,
      images: About.images
    }
  },
  mounted () {
    this.textArray = this.text.split('\n')
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
.about {
  background: #DFDFDF;
}
p {
  font-size: 0.8rem;
  text-align: left;
}
.is-4-desktop {
  position: relative;
  max-height: 100vh;
  overflow: auto;
}
.is-8-desktop {
  padding: 0;
  max-height: 100vh;
  overflow: auto;
  background-color: #000;
}
.columns {
  height: 100%;
}
.the-team {
  max-height: 220px;
  overflow: scroll;
  p {
    font-size: 0.4rem;
  }
}
.teamSection {
  padding-top: 3rem;
  font-size: 0.1rem;
}
.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
img {
  vertical-align: top;
}
</style>
