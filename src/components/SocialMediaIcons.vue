<template>
  <div class="social">
    <div class="field is-grouped">
      <p class="control">
        <a :key="'icon-'+key" v-for="(value, key) in links" target="_blank" rel="noopener" :href="value.link" :class="keyClass(key, white)">
          <i :class="'fab is-small fa-' + value.icon"></i>
          <!-- <b-icon
            pack="fab"
            :icon="value.icon"
            size="is-small"
          >
          </b-icon> -->
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { socialMediaLinks } from '../assets/data/socialMediaLinks.json'
export default {
  name: 'social',
  props: {
    white: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      links: socialMediaLinks
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
}
a.white {
  color: #fff;
  &:hover {
    // color: #fbec56;
  }
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
  text-align: center;
  @media screen and (max-width: 768px) {
    text-align: center !important;
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
  color: #fbec56;
}
</style>
