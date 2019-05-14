<template>
  <div class="contactForm">
    <!-- @submit handles any form of submission. -->
  <!-- .prevent keeps the event from bubbling around and doing anything else. -->
  <form @submit="handleSubmit">
    <div class="columns is-multiline">

    <div class="column is-12">

    <div class="field">
  <label class="label has-text-dark">Name: *</label>
  <div class="control has-icons-right">
    <input v-model="name" class="input" type="text" placeholder="" required>
    <span class="icon is-small is-right">
      <i class="fas fa-address-book"></i>
    </span>
  </div>
</div>
    </div>

              <div class="column is-12">
<div class="field">
  <label class="label has-text-dark">Email Address: *</label>
  <div class="control has-icons-right">
    <input v-model="email" class="input" type="email" placeholder="" required>
    <span class="icon is-small is-right">
      <i class="fas fa-envelope"></i>
    </span>
  </div>
  <!-- <p class="help is-danger">This email is invalid</p> -->
</div>
    </div>
    <div class="column is-12">

<div class="field">
  <label class="label has-text-dark">Subject: *</label>
  <div class="control has-icons-right">
    <input v-model="subject" class="input" type="text" placeholder="" required>
              <span class="icon is-small is-right">
      <i class="fas fa-phone"></i>
    </span>
  </div>
</div>
    </div>
</div>
 <div class="columns">

    <div class="column">
<div class="field">
  <label class="label has-text-dark">Message: *</label>
  <div class="control">
    <textarea v-model="message" class="textarea" placeholder="" required></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button type="submit" class="button is-prim">Send</button>
  </div>
  <!-- <div class="control">
    <button @click="clear" class="button is-prim">Clear</button>
  </div> -->
</div>
    </div></div>
</form>
<p :class="{'subtitle is-6 status ': true, [type]: true }">
<!-- {{name}}<br>
{{email}}<br>
{{subject}}<br>
{{message}} -->
{{status}}
</p>
  </div>
</template>

<script>
// import Datepicker from 'vue-bulma-datepicker'

export default {
  name: 'contactForm',
  components: {
    // Datepicker
  },
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      type: '',
      status: ''
    }
  },
  // props: {
  //   name: String,
  //   email: String,
  //   subject: String,
  //   message: String
  // },
  methods: {
    clear () {
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    },
    handleSubmit () {
      event.preventDefault()
      this.type = 'has-text-info'
      this.status = 'Sending…'
      let data = {
        'form_name': this.name,
        'form_email': this.email,
        'form_subject': this.subject,
        'form_msg': this.message
      }
      this.$http.post('../../../public/mailer.php', JSON.stringify(data)).then(response => {
        this.type = 'has-text-success'
        this.status = 'We have received your message and will get in touch shortly. Thanks!'
        if (response.status === 200) {
          this.clear()
        }
      }, response => {
        this.type = 'has-text-danger'
        this.status = 'Sorry, there has been an error.  Please try again later or email us at events@burdekinrooms.com'
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');
.contactForm {
  max-width: 800px;
  // margin: 40px auto;
  padding: 0;
  color: #222;
  .label {
    text-align: left;
    color: #000;
    font-weight: 500;
    margin-bottom: 1px;
    font-size: 0.6rem;
  }
}
.button.is-prim {
  border-color: #3273dc;
  border-radius: 0;
  color: #3273dc;
  background: transparent;
  &:hover {
    background-color: #3273dc;
    // border-top-color:#3273dc;
    // border-color:#222;
    color: #fff;
  }
  &.is-active {
    color: #fff;
    border-top-color:#3273dc;
    border-bottom-color:#3273dc;
  }
}
input, textarea {
  border-radius: 0;
  background: rgb(203, 203, 203);
  border-color: #999;
}
.status {
  padding: 10px;
}

// input {
//   background: transparent !important;
//   padding: 10px 0;
//   border: none;
//   border-bottom: 1px solid rgba(255,255,255, .15);
//   height: 44px;
//   font-size: 17px;
//   font-weight: 400;
//   text-transform: uppercase;
//   margin: 5px 0 0;
//   border-radius: 0;
//   outline: 0;
//   resize: none;
//   line-height: 17px;
//   // background-color: #fff;
//   color: #fff;
//   font-family: 'Raleway', sans-serif;
//   box-shadow: none;
// }
// textarea {
//   border: 1px solid rgba(255,255,255, .15);
//   min-height: 158px;
//   font-size: 13px;
//   resize: vertical;
//   background: transparent !important;
//   font-weight: 400;
//   text-transform: none;
//   color: #fff;
// }
.column {
  padding-left: 0;
  padding-right: 0;
  padding: 3px 0;
}
</style>
