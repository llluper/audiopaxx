<template>
  <div class="about">
    <div class="columns">
      <div class="column is-4">
        <h1 class="is-size-2 has-text-uppercase">Contact the team</h1>
        <p>For employments, investements...</p>
        <ContactForm />
      </div>
      <div class="column is-8">
        <iframe src="https://maps.google.com/maps?q=501%2F64%20Kippax%20St%2064%20Kippax%20St%2C%20Surry%20Hills%20NSW%202010%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'about',
  components: {
    ContactForm
  }
}
</script>

<style>
iframe {
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
