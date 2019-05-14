<template>
  <section class="domestic">
    <div class="columns">
      <div class="column is-8">
          <div class="scroller">
        <div class="columns is-gapless is-multiline is-flex">
            <div v-resize class="column is-half-mobile is-one-quarter" :key="'domes-'+key" v-for="(value, key) in selectedList">
              <img @click="goToDetail(value.folder.replace(/\s+/g, '-'))" :src="require('../../public/img/domestic/' + value.folder + '/' + value.folder.replace(/\s+/g, '').toUpperCase() + '_THUMB.jpg')" :alt="value.folder">
            <div class="overlay">
              <p>
              {{ value.folder }}
              </p>
            </div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4 section">
        <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
        <p v-for="(product, index) in text.split('\n')" :key="'domestic-artist-bio'+index">
          {{product}}
        </p>
        <div>
          <ul class="type-list">
            <li @click="typeSelected = 'All'" :class="{'active-type': (typeSelected == 'All')}">ALL</li>
            <li @click="typeSelected = 'Bookings'" :class="{'active-type': typeSelected == 'Bookings'}">BOOKINGS</li>
            <li @click="typeSelected = 'Management'" :class="{'active-type': typeSelected == 'Management'}">MANAGEMENT</li>
          </ul>
        </div>
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
      artists: Domestic.artists,
      typeSelected: 'All'
    }
  },
  computed: {
    bookingsArtists () {
      return this.artists.filter((artist) => {
        return artist.bookings === true
      })
    },
    managementArtists () {
      return this.artists.filter((artist) => {
        return artist.management === true
      })
    },
    selectedList () {
      if (this.typeSelected === 'Bookings') {
        return this.bookingsArtists
      } else if (this.typeSelected === 'Management') {
        return this.managementArtists
      } else {
        return this.artists
      }
    }
  },
  methods: {
    goToDetail (proId) {
      this.$router.push({ name: 'domestic-artist', params: { Pid: proId } })
    }
  },
  directives: {
    resize: {
      // directive definition
      inserted: function (el) {
        el.style.height = (el.clientWidth - 1) + 'px'
      }
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
  position: relative;
  min-height: 100%;
  img {
    min-height: 100%;
    width: auto;
  }
  // max-height: 300px;
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
.type-list {
  display: inline-block;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 700;
  li {
    color: #363636;
    display: inline-block;
    padding: 5px 10px;
    cursor: pointer;
    &.active-type {
      color: #fff;
    }
  }
}

.overlay {
  display: flex;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  width: 101%;
  height: 101%;
  opacity: 0;
  position: absolute;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%);
  &:hover {
    opacity:1;
  }
  margin: 0 auto;
  p {
    padding-bottom: 0;
    text-align: center;
    margin: auto;
  }
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
