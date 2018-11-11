<template>
  <div class="artist-social">
    <div class="field is-grouped">
      <p class="control">
        <a :key="'icon-'+key" v-for="(value, key) in links" target="_blank" rel="noopener" :href="value.link" :class="keyClass(key, white)">
          <i :class="'fab fa-2x fa-' + value.icon"></i>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artist-social',
  props: {
    white: {
      default: false,
      type: Boolean
    },
    links: {
      type: Object,
      default () {
        return { }
      }
    }
  },
  methods: {
    keyClass: function (key, white) {
      return white ? key + ' white' : key
    }
  }
}
</script>

<style scoped lang="scss">
a {
  color: #323232;
  font-weight: normal;
  padding: 3px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  i {
    font-size: 1.7em;
  }
}
a.white {
  color: #fff;
  // &:hover {
  //   // color: #fbec56;
  // }
}
a, a:hover {
  transition: color 1s;
}
a.facebook:hover {
  color: #3b5998;
}
a.instagram:hover {
  color: #c32aa3;
}
a.snapchat:hover {
  color: #fffc00;
}
a.twitter:hover {
  color: #1da1f2;
}
a.youtube:hover {
  color: #ff0000;
}
a.spotify:hover {
  color: #1ed760;
}
.control {
  width: 100%;
  text-align: left;
  @media screen and (max-width: 768px) {
    text-align: left !important;
  }
}
.control span {
  padding: 20px;
}
a.facebook:hover,
a.instagram:hover,
a.snapchat:hover,
a.twitter:hover,
a.youtube:hover,
a.spotify:hover {
  color: #fff;
}
</style>
