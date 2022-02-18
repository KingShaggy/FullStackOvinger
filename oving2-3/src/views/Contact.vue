<template>
  <h1>Feedback</h1>
  <div class="errors" v-if="errors.length">
    <b>Please correct the following errors:</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
    </ul>
  </div>
  <form @submit.prevent="sendFeedback">
    <div class="input">
      <label>Name:</label>
      <input type="text" name="name" v-model="name" />

      <label>Email:</label>
      <input type="text" email="email" v-model="email" />

      <label>Message:</label>
      <input type="text" name="message" id="message" v-model="message" />

      <div class="submit">
        <button type="submit" :disabled="!email.length || !name.length || !message.length">Send Feedback</button>
      </div>

      <div class="response" id="response"></div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      message: "",
    }
  },
  mounted() {
    this.name = this.$store.state.name
    this.email = this.$store.state.email
  },
  methods: {
    sendFeedback() {
      this.errors = []
      console.log(1)

      if (this.name && this.email && this.message) {
        this.updateInfo(this.name, this.email)
      }
      console.log(2)


      if (!this.name) {
        this.errors.push("Name required")
      }
      console.log(3)


      if (!this.email) {
        this.errors.push("Email required")
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required")
      }
      console.log(4)


      if (!this.message) {
        this.errors.push("Message required")
      }
      console.log(5)


      console.warn("errors", this.errors)

      console.log(6)


      if (this.errors.length === 0) {
        document.getElementById("response").innerHTML="Sending...";
        setTimeout(function(){
        document.getElementById("response").innerHTML="Sent";
        },1500);
        setTimeout(function(){
        document.getElementById("response").innerHTML="";
        },3500);
      }
    },
    validEmail: function (email) {
      let re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    updateInfo(name, email) {
      this.$store.commit("updateName", name)
      this.$store.commit("updateEmail", email)
    }
  }
};
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .input {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .submit {
    text-align: center;
  }
  button:disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  }
  .container {
  text-align: center;
  padding: 30px 0 0 0;
  }
</style>