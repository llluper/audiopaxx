<template>
  <div id="app">
    <div id="mySidenav" :class="{ 'sidenav': true, 'open': open }">
      <div class="is-relative">
        <div class="brand" @click="getWindowWidth(true)">
          <div v-if="svgLoaded" :class="{'lottie': true, 'opened' : open}"></div>
          <img
            v-else
            src="./assets/audiopaxx-A-white.png"
            alt="Audiopaxx Logo"
            :class="{'logo menu': true, 'is-hiddn': open}"
          >
        </div>
        <div :class="{'menu menC': true, 'menuClosedC' : !open2}" @click="getWindowWidth(false)">
          <div class="cont">
            <div class="lottie2" :class="{'menu-item': true, 'menuClosed' : !open2}"></div>
            <router-link class="menu-item" to="/">
              <span :class="{'active-menu': this.$route.path== '/'}">Artists</span>
            </router-link>
            <br>
            <router-link class="menu-item" to="/tours">
              <span :class="{'active-menu': this.$route.path== '/tours'}">Tours</span>
            </router-link>
            <br>
            <router-link class="menu-item" to="/events">
              <span :class="{'active-menu': this.$route.path== '/events'}">Events &amp; Venues</span>
            </router-link>
            <br>
            <router-link class="menu-item" to="/corporate">
              <span :class="{'active-menu': this.$route.path== '/corporate'}">Corporate</span>
            </router-link>
            <br>
            <router-link class="menu-item" to="/about">
              <span :class="{'active-menu': this.$route.path== '/about'}">About</span>
            </router-link>
            <br>
            <router-link class="menu-item" to="/contact">
              <span :class="{'active-menu': this.$route.path== '/contact'}">Contact</span>
            </router-link>
            <br>
            <SocialMediaIcons :class="{'social menu': true, 'menuClosed' : !open2}"/>
          </div>
        </div>
      </div>
    </div>

    <transition name="slide-fade" mode="out-in">
      <router-view :class="{ 'view': true, 'openView': open }"/>
    </transition>
  </div>
</template>
<script>
import SocialMediaIcons from '@/components/SocialMediaIcons.vue'
export default {
  name: 'app',
  components: {
    SocialMediaIcons
  },
  data () {
    return {
      open: !false,
      open2: !false,
      desktop: false,
      svgLoaded: false
    }
  },
  methods: {
    getWindowWidth (logoClick) {
      let w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      this.desktop = w > 768
      if (!this.desktop) {
        this.open = !this.open
        if (this.open2) {
          this.open2 = !this.open2
        } else {
          setTimeout(() => {
            this.open2 = !this.open2
          }, 480)
        }
      } else {
        if (logoClick) {
          if (!this.open) {
            this.open = !this.open
            setTimeout(() => {
              this.open2 = !this.open2
            }, 480)
          } else {
            this.open2 = !this.open2
            this.open = !this.open
          }
        }
      }
    }
  },
  mounted () {
    this.svgLoaded = true
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1.5s cubic-bezier(1, 0.5, 0.8, 1);
  @media screen and (max-width: 768px) {
    // transition: all 0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: none;
  }
}
.slide-fade-leave-to {
  @media screen and (min-width: 769px) {
    transform: translateX(100vw);
  }
  @media screen and (max-width: 768px) {
    transform: translateX(100vw);
  }
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(100vw);
  opacity: 0;
}
html {
  overflow-y: hidden !important;
  @media screen and (max-height: 768px) {
    overflow-y: scroll !important;
  }
  -webkit-overflow-scrolling: touch;
  overflow-x: auto !important;
  background: #111;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #111;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 60px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 30px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
.menu {
  margin: 0 auto;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s;
  flex-flow: wrap;
  flex-basis: 100%;
}

/* The navigation menu links */
.sidenav a.menu-item {
  padding: 4px;
  text-decoration: none;
  font-size: 12px;
  color: #818181;
  color: rgba(255, 255, 255, 0.701);
  display: block;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  display: inline-block;
}
.cont {
  display: inline-block;
  margin: 0 auto;
  min-height: calc(100vh - (164px + 30px));
  @media screen and (max-width: 414px) {
    min-height: calc(100vh - (222px + 30px));
  }
  @media screen and (max-width: 375px) {
    min-height: calc(100vh - (195px + 30px));
  }
  @media screen and (max-width: 320px) {
    min-height: calc(100vh - (174px + 30px));
  }
  width: 140px;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
.open {
  width: 280px;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
}
.view {
  margin-left: 60px;
  transition: 0.5s;
}
.openView {
  margin-left: 280px;
  transition: 0.4s;
}
.menC {
  opacity: 1;
  transition: 0.5s opacity;
}
.menuClosedC {
  opacity: 0;
  transition: 0.1s opacity;
}
.social {
  position: absolute;
  bottom: 5%;
  a {
    color: #fff;
  }
}
.brand {
  display: block;
  .openA {
    padding-top: 25px;
  }
  a.menu-item {
    padding-top: 7px;
  }
}
.brand img {
  width: 100px;
  height: auto;
  transition: all 2s;
}
h1.is-size-3,
.is-size-4-mobile {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
}
h1.is-size-3 {
  font-size: 1.8rem !important;
}
#mySidenav {
  height: 100vh;
}
.title {
  text-transform: uppercase;
}
section:not(.VueCarousel) {
  height: 100vh;
}
.columns {
  margin: 0 !important;
}
p {
  font-size: 0.8rem;
  text-align: left;
}
.scroller {
  position: relative;
  overflow: scroll;
  height: 100vh;
}
.active-menu,
.sidenav a.menu-item span:hover {
  background-color: #666;
}
button.VueCarousel-navigation-prev,
button.VueCarousel-navigation-next {
  transform: translateY(-50%) translateX(0%) !important;
}
section.view {
  overflow: auto;
}
.is-4,
.is-8,
.is-4-desktop,
.is-8desktop {
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
.slider-size {
  height: 100vh; /* This is your slider height */
  width: auto;
}
.VueCarousel {
  width: 100%;
}
.lottie {
  transition: all 0.5s ease;
  min-height: 147px;
}
.lottie.opened {
  transform: translateX(-20px);
}
.lottie2 {
  width: 70%;
  margin: -40px auto -10px 0;
  min-height: 60px;
  padding-left: 4px;
}
// .menu-item:first-child {
//   background: linear-gradient(270deg, #66c3ab, #6678c3, #aa66c3);
//   background-size: 600% 600%;

//   -webkit-animation: AnimationName 30s ease infinite;
//   -moz-animation: AnimationName 30s ease infinite;
//   animation: AnimationName 30s ease infinite;

//   @-webkit-keyframes AnimationName {
//       0%{background-position:0% 50%}
//       50%{background-position:100% 50%}
//       100%{background-position:0% 50%}
//   }
//   @-moz-keyframes AnimationName {
//       0%{background-position:0% 50%}
//       50%{background-position:100% 50%}
//       100%{background-position:0% 50%}
//   }
//   @keyframes AnimationName {
//       0%{background-position:0% 50%}
//       50%{background-position:100% 50%}
//       100%{background-position:0% 50%}
//   }
// }
</style>
