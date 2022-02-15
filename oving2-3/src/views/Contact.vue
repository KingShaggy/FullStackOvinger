<template>
  <h1>Feedback</h1>
  <Form @submit="sendFeedback">
    <label>Name:</label>
    <Field type="text" v-model="name" />

    <label>Email:</label>
    <Field type="email" name="email" v-model="email" :rules="validateEmail" />
    <ErrorMessage name="email" />

    <label>Message:</label>
    <Field type="text" id="message" />

    <div class="submit">
      <button>Send Feedback</button>
    </div>

    <div class="response" id="response"></div>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "Contact",
   components: {
    Form,
    Field,
    ErrorMessage,
  },
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
      document.getElementById("message").value = "";
      document.getElementById("response").innerHTML="Sending...";
      setTimeout(function(){
      document.getElementById("response").innerHTML="Sent";
      },1500);
      setTimeout(function(){
      document.getElementById("response").innerHTML="";
      },3500);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    }
  }
};
</script>

<style>
  Form {
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
  Field {
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