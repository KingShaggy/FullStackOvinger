<template>
  <h1>Feedback</h1>
  <form @submit.prevent="sendFeedback">
    <div class="input">
      <label>Name:</label>
      <BaseInput type="text" v-model="name" :error="nameError" />

      <label>Email:</label>
      <BaseInput type="text" v-model="email" :error="emailError" />

      <label>Message:</label>
      <BaseInput type="text" id="message" />

      <div class="submit">
        <button type="submit">Send Feedback</button>
      </div>

      <div class="response" id="response"></div>
    </div>
  </form>
</template>

<script>
import BaseInput from "../components/BaseInput";
import { useField, useForm } from 'vee-validate';

export default {
  name: "Contact",
  setup() {
    function onSubmit() {
    }

    const validations = {
      email: value => {
        if (!value) return 'This field is required'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test(String(value).toLowerCase())) {
          return 'Please enter a valid email address'
        }

        return true
      },
      name: value => {
        const requiredMessage = 'This field is required'
        if (value === undefined || value === null) return requiredMessage
        if (!String(value).length) return requiredMessage

        return true
      }
    }

    useForm({
      validationSchema: validations
    })

    const { value: email, errorMessage: emailError } = useField('email')
    const { value: name, errorMessage: nameError } = useField('name')

    return {
      onSubmit,
      email,
      emailError,
      name,
      nameError
    }
  },
  components: {
    BaseInput,
  },
  // computed: {
  //   name: {
  //     get() {
  //       return this.$store.state.name
  //     },
  //     set(newName) {
  //       this.$store.commit('updateName', newName);
  //     }
  //   },
  //   email: {
  //     get() {
  //       return this.$store.state.email
  //     },
  //     set(newEmail) {
  //       this.$store.commit('updateEmail', newEmail);
  //     }
  //   }
  // },
  methods: {
    sendFeedback() {
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
</style>