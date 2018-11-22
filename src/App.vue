<template>
  <div id="app">
    <div id="mySidenav" :class="{ 'sidenav': true, 'open': open }" >
      <div class="is-relative">
      <div class="brand" @click="open = !open">
        <img src="./assets/audiopaxx-A-white.png" alt="Audiopaxx Logo" :class="{'logo menu': true, 'is-hiddn': open}">
        <!-- <img src="./assets/audiopaxx-white.png" alt="Audiopaxx Logo" :class="{'logo menu openA': true, 'is-hidden': !open}"> -->
        <a :class="{'menu-item': true, 'menuClosed' : !open}" to="/"><img src="./assets/audiopaxx-white-word.png" alt="Audiopaxx Logo" :class="{'logo menu': true, 'is-hiddn': open}"></a><br>
      </div>
      <!-- <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a> -->
      <!-- <a href="javascript:void(0)" class="" @click="openNav()">&plus;</a> -->
      <div :class="{'menu': true, 'menuClosed' : !open}" @click="getWindowWidth()">
        <div class="cont">
          <router-link class="menu-item" to="/"><span :class="{'active-menu': this.$route.path== '/'}">Domestic</span></router-link><br>
          <router-link class="menu-item" to="/international"><span :class="{'active-menu': this.$route.path== '/international'}">International</span></router-link><br>
          <router-link class="menu-item" to="/events"><span :class="{'active-menu': this.$route.path== '/events'}">Events</span></router-link><br>
          <router-link class="menu-item" to="/about"><span :class="{'active-menu': this.$route.path== '/about'}">About</span></router-link><br>
          <router-link class="menu-item" to="/contact"><span :class="{'active-menu': this.$route.path== '/contact'}">Contact</span></router-link><br>
        </div>
      </div>
      <SocialMediaIcons :class="{'social menu': true, 'menuClosed' : !open}"/>
    </div>
    </div>

<!-- Use any element to open the sidenav -->
    <router-view :class="{ 'view': true, 'openView': open }"/>
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
      open: false,
      mobile: false
    }
  },
  methods: {
    openNav () {
      // document.getElementById("mySidenav").style.width = "250px";
      // document.getElementById("main").style.marginLeft = "250px";
      // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      this.open = true
    },

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    closeNav () {
      // document.getElementById("mySidenav").style.width = "0";
      // document.getElementById("main").style.marginLeft = "0";
      // document.body.style.backgroundColor = "white";
      this.open = false
    },
    getWindowWidth () {
      let w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      this.mobile = w > 768
      this.open = this.mobile
    }
  },
  mounted () {
    // this.getWindowWidth()
  }
}
</script>

<style lang="scss">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
}

/* The navigation menu links */
.sidenav a.menu-item {
  padding: 6px;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  color: rgba(255, 255, 255, 0.701);
  display: block;
  transition: 0.3s;
  text-transform: uppercase;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  display:inline-block;
  // margin-left: 60px;
}
.cont {
  display: inline-block;
  margin: 0 auto;
  // max-width: 50%;
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
  transition: margin-left .5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}
.open {
  width: 280px;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
}

.view {
  margin-left: 60px;
  // width: calc(100vh - 60px);
  transition: 0.5s;
}
.openView {
  margin-left: 280px;
  transition: 0.5s;
}
.menu {
  transition: 2.3s;
}
.menuClosed {
  display: none !important;
  transition: 0.3s;
}
.social {
  position: absolute;
  bottom: 5%;
  // top: 50%;  /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%);
  a {
    color: #fff;
  }
}
.brand {
  display: block;
  // height: 80px;
  padding: 0 16px 45px;
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
h1.is-size-3, .is-size-4-mobile {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  letter-spacing: 3px;
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
  position:relative;
  overflow: scroll;
  height: 100vh;
}
// .view > .columns > .is-4 {
// //  height: 100vh;
// }
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
.is-4, .is-8, .is-4-desktop, .is-8desktop {
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}
.slider-size {
  height: 100vh; /* This is your slider height */
  // width: calc(100vh * (1920/1080));
  width: auto;
  // min-width: 50vh;
  // overflow: scroll;
}
.VueCarousel {
  width: 100%;
}
// .VueCarousel-slide {
//   overflow: auto;
// }

</style>
