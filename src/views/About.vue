<template>
  <section class="about">
    <div class="columns is-multiline">
      <div class="column is-12-tablet is-4-desktop section">
        <div class="aboutSection">
        <h1 class="is-size-3 title">{{title}}</h1>
        <p :key="'abouttext-'+index" v-for="(text, index) in textArray">
          {{text}}<br><br>
        </p>
        </div>
        <div class="teamSection">

        <h1 class="is-size-3 title">{{titleTwo}}</h1>
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
        <carousel :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
          <slide :key="'events-'+index" v-for="(image, index) in images">
            <span class="helper"></span><img :src="require('../../public/img/events/'+image)">
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
// import ContactForm from '@/components/ContactForm.vue'
import { About, Events } from '../assets/data/statics.js'
import { teamList } from '../assets/data/theTeam.json'

export default {
  name: 'about',
  data () {
    return {
      title: About.title,
      titleTwo: About.titleTwo,
      text: About.text,
      textArray: [],
      team: teamList,
      images: Events.images
    }
  },
  created () {
    console.log(this.team)
  },
  mounted () {
    this.textArray = this.text.split('\n')
  }
  // components: { ContactForm }
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
  // @media only screen and (min-width: 1024px) {
    background-color: #000;
  // }
}
.teasmSection {
  width: 100%;
  position: absolute;
  bottom: 20px;
  // top: 50%;  /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%);
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
  // background: #DFDFDF;
}
.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

img {
  vertical-align: middle;
}

</style>
