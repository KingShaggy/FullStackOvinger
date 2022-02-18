<template>
    <h1>Register yourself</h1>
    <form @submit.prevent="confirmRegistration">
        <div class="input">

            <label>Full name:</label>
            <input type="text" name="fullName" v-model="fullName" />

            <label>Address:</label>
            <input type="text" />

            <label>Username:</label>
            <input type="text" name="username" v-model="username" />

            <label>Password:</label>
            <input type="password" name="password" v-model="password" />

            <label>Email:</label>
            <input type="email" />

            <label>Phone:</label>
            <input type="text" />


            <div class="submit">
                <button type="submit">Register</button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                fullName: "",
                username: "",
                password: "",
            }
        },
        methods: {
            confirmRegistration() {

            }
        }
    }
</script>

<style scoped>
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