<template>
  <section class="corporate">
    <div class="columns is-multiline">
      <div class="column is-12-tablet is-4-desktop section">
        <div class="corporateSection">
        <h1 class="is-size-3 is-size-3-mobile title first">{{title}}</h1>
        <p>
          Audiopaxx Corporate is a full-service corporate agency dedicated to delivering programming and branding solutions for any corporate requirement.
        </p>
        <p>
The division was launched in 2016, next to their well-founded booking, touring, management and event arms, Audiopaxx Corporate endeavours to operate as a one-stop shop for major corporations seeking excellence in brand partnerships, entertainment bookings, venue booking, music licensing, merchandise, marketing, art direction, influencers and sponsorship.
        </p>
        <p>
Events include awards nights, fashion shows, product and album launches, private functions, sports and media galas. Audiopaxx Corporate provides an array of performers from DJs, bands, acoustic vocalists and MCs, whilst offering a consultancy service for brands seeking social media influencers and brand partnerships, or developing long-term campaigns.
        </p>
        </div>
         <!-- <div class="">
          <h1 class="is-size-3 is-size-3-mobile title">Current Clients</h1>
        </div> -->
                <div>
          <h1 class="is-size-3 is-size-3-mobile title">Past Clients</h1>
          <div class="columns past">
            <div class="column is-12-tablet is-12-desktop past">
              <ul class="">
                <li :key="'corp-pastclients-'+index" v-for="(value, index) in pastClients">
                  {{value}}
                </li>
              </ul>
            </div>
          </div>
          <h1 class="is-size-3 is-size-3-mobile title">Past Artists</h1>
          <div class="columns past">
            <div class="column is-12-tablet is-12-desktop past">
              <ul class="">
                <li :key="'corp-pastartists-'+index" v-for="(value, index) in pastArtists">
                  {{value}}
                </li>
              </ul>
            </div>
          </div>
        </div>

<div class="services">
<h1 class="is-size-3 is-size-3-mobile title services-title">Services</h1>
LINE UP CURATION, BOOKING &amp; TOURING
<p>Audiopaxx has proven itself as a leading force in Australian, New Zealand and Asia touring across both domestic bookings and international tours.</p>
<p>It has supplied artists for global corporations including FIFA, Moët &amp; Chandon, GQ, Vogue and Corona – the companies also run venues and book festivals with a serious competitive advantage, allowing booking agents to ensure brands and corporations pay fair fees for artists and avoid often-inflated rates.</p>

MUSIC LICENSING &amp; COPYRIGHT
<p>Audiopaxx possesses a catalogue of music with rights to both the Master and Publishing aspects of recordings.</p>

<p>Their management clients afford the rare opportunity to offer its clients a one-stop shop for licensed music available for use in advertising, branding and social media campaigns. The managers have created bespoke songs for campaigns and events, as has previously been provided for the Microsoft ‘Imagine Cup’ through having the Artists producing music and signing over the copyright perpetually.</p>

ART DIRECTION &amp; MARKETING
<p>Audiopaxx Agents, Managers &amp; Promoters pride themselves in their ability to develop unique, trend-leading and eye-catching campaigns, boasting world-class assets to fit any brief. Past videos, artwork and graphics can be found here.</p>

<p>The team works with global leaders to put together three, six, 12 and 24 month strategies across all platforms to ensure a cohesive and integrated approach.</p>

EVENT FORMAT &amp; PRODUCTION
<p>Audiopaxx has a wealth of experience across a range of event models for clients of all sizes to take advantage of having launched the company in 2010 doing events.</p>

<p>Offering anything from an intimate dinner event between your closest partners, to an awards ceremony with a strictly curated guest list, to a large conference or branded event in which to share industry expertise; Audiopaxx can confidently meet your needs.</p>

<p>Catering to a wide range of business events that draw anything from 10 to 10,000 people; no job is too small or too large for our event management team.</p>

SPONSORSHIPS &amp; BRAND PARTNERSHIPS
<p>Audiopaxx agents, promoters and artists have worked on brand partnerships across a full range of companies including Louis Vutton, Smirnoff, Red Bull, Ralph Lauren, Vonu, VB, Globe, Captain Morgan, General Pants and Virgin Australia.</p>

<p>They have experience with different levels of involvement ranging from presenting partners to brand ambassadors and endorsement deals.</p>

</div>

        <!-- <div class="teamSection">
          <h1 class="is-size-3 is-size-3-mobile title">What We Do</h1>
          <p :key="'corporatetext-'+index" v-for="(text, index) in textArray">
          {{text}}<br><br>
        </p>
        </div> -->
      </div>
      <div class="column is-12-tablet is-8-desktop">
        <carousel :navigationPrevLabel="prev" :navigationNextLabel="next" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" :speed="3000" :minSwipeDistance="20" :perPage="1" :navigationEnabled="true" :paginationEnabled="false">
          <slide :key="'corporate-'+index" v-for="(image, index) in reverseImages">
            <span class="helper"></span>
            <div :style="{ background: 'url('+require('../../public/img/events/' + image)+') center center no-repeat', backgroundSize:'cover'}" class="slider-size"></div>
            <img :src="require('../../public/img/events/'+image)">
          </slide>
        </carousel>
      </div>
    </div>
  </section>
</template>
<script>
import { Events, Corporate } from '../assets/data/statics.js'

export default {
  name: 'corporate',
  data () {
    return {
      title: Corporate.title,
      titleTwo: Corporate.titleTwo,
      text: Corporate.text,
      pastClients: Corporate.pastClients,
      pastArtists: Corporate.pastArtists,
      textArray: [],
      images: Events.images
    }
  },
  mounted () {
    this.textArray = this.text.split('\n')
  },
  computed: {
    reverseImages () {
      return this.images.slice().reverse()
    },
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
.corporate {
  background: #DFDFDF;
}
p {
  font-size: 0.8rem;
  text-align: left;
  padding-bottom: 15px;
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
.services {
  text-align: left;
}
h1:not(.first) {
  margin: 1.5rem 0 0 0;
}
li {
  font-size: 0.8rem;
  font-style: italic;
}
ul {
  // @media only screen and (min-width: 580px) {
  //   padding: 4rem 8rem;
  // }
  text-align: left;
  // color: #fff;
  -moz-column-count: 2;
  -moz-column-gap: 20px;
  -webkit-column-count: 2;
  -webkit-column-gap: 20px;
  column-count: 2;
  column-gap: 20px;
  overflow: scroll;
}
.past {
  height: 100%;
  min-height: 100%;
}
.services-title {
  margin-bottom: 20px !important;
}
</style>
