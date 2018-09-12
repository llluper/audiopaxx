<template>
  <div id="app">
    <div id="mySidenav" :class="{ 'sidenav': true, 'open': open }" @click="open = !open">
      <div class="brand">
        <img src="./assets/audiopaxx-logo.png" alt="Audiopaxx Logo" :class="{'menu': true}">
      </div>
      <!-- <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a> -->
      <!-- <a href="javascript:void(0)" class="" @click="openNav()">&plus;</a> -->
      <div :class="{'menu': true, 'menuClosed' : !open}">
      <a class="menu-item" href="#">Domestic</a>
      <a class="menu-item" href="#">International</a>
      <a class="menu-item" href="#">Events</a>
      <a class="menu-item" href="#">About</a>
      <a class="menu-item" href="#">Contact</a>
      </div>
      <SocialMediaIcons :class="{'social menu': true, 'menuClosed' : !open}"/>
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
      open: false
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
    }
  }
}
</script>

<style lang="scss">
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
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a.menu-item {
  padding: 8px 8px 8px 0px;
  text-decoration: none;
  font-size: 16px;
  color: #818181;
  display: block;
  transition: 0.3s;
  text-transform: uppercase;
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
}

.view {
  margin-left: 60px;
  // width: calc(100vh - 60px);
  transition: 0.5s;
}
.openView {
  margin-left: 280px;
  transition: 0.3s;
}
.menu {
  transition: 0.5s;
}
.menuClosed {
  opacity: 0;
  transition: 0.3s;
}
.social {
  margin-top: 30vh;
}
.brand {
  height: 80px;
}
.brand img {
  width: 100%;
  height: auto;
  padding: 25px;
}
</style>
