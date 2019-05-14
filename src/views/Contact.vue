<template>
  <section class="contact">
    <div class="columns">
      <div class="column is-4 section">
        <h1 class="is-size-3 is-size-4-mobile title">{{title}}</h1>
        <p>{{text}}</p>
        <ContactForm class="contactF"/>
      </div>
      <div class="column is-8">
        <iframe src="https://maps.google.com/maps?q=Unit%20211%2F53%20Great%20Buckingham%20Street%2C%C2%A0Redfern%2C%20NSW%2C%202016&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </section>
</template>
<script>
import { Contact } from '../assets/data/statics.js'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'contact',
  data () {
    return {
      title: Contact.title,
      text: Contact.text
    }
  },
  components: {
    ContactForm
  }
}
</script>

<style scoped>
.contact {
  background: #DFDFDF;
}
iframe {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.is-8 {
  padding: 0;
  background: linear-gradient(
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.85)
    ),url('../../public/img/contact/mapback.jpg');
  background-position: center;
  background-size: cover;
  background-color: #000;
}
.contactF {
  margin-top: 10px;
}
</style>
