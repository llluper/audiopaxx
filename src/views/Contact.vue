<template>
  <section class="contact">
    <div class="columns">
      <div class="column is-4 section">
        <h1 class="is-size-3 title">{{title}}</h1>
        <p>{{text}}</p>
        <ContactForm class="contactF"/>
      </div>
      <div class="column is-8">
        <iframe src="https://maps.google.com/maps?q=501%2F64%20Kippax%20St%2064%20Kippax%20St%2C%20Surry%20Hills%20NSW%202010%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
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
  /* margin: 20px auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.is-8 {
  padding: 0;
  /* min-width: 1000px; */
  background: linear-gradient(
      rgba(0, 0, 0, 0.85), 
      rgba(0, 0, 0, 0.85), 
      rgba(0, 0, 0, 0.85), 
      rgba(0, 0, 0, 0.85), 
      rgba(0, 0, 0, 0.85)
    ),url('../../public/img/contact/mapback.png');
  background-position: center;
  background-size: cover;
}
/* .is-4 {
  min-width: 600px;
} */
.contactF {
  margin-top: 10px;
}
</style>
