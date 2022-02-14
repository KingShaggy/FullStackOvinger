<template>
  <h1>Feedback</h1>
  <form @submit.prevent="sendFeedback">
    <label>Name:</label>
    <input type="text" v-model="name" required>

    <label>Email:</label>
    <input type="email" v-model="email" required>

    <label>Message:</label>
    <input type="text" id="message" required>

    <div class="submit">
      <button>Send Feedback</button>
    </div>

    <div class="response" id="response"></div>
  </form>
</template>

<script>
export default {
  name: "Contact",
  computed: {
    name: {
      get() {
        return this.$store.state.name
      },
      set(newName) {
        this.$store.commit('updateName', newName);
      }
    },
    email: {
      get() {
        return this.$store.state.email
      },
      set(newEmail) {
        this.$store.commit('updateEmail', newEmail);
      }
    }
  },
  methods: {
    sendFeedback() {
      document.getElementById("message").value = ""
      document.getElementById("response").innerHTML="Sending...";
      setTimeout(function(){
      document.getElementById("response").innerHTML="Sent";
      },1500);
      setTimeout(function(){
      document.getElementById("response").innerHTML="";
      },3500);
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
  input {
    display: block;
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
</style>