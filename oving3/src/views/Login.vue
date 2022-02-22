<template>
    <h1>Please log in</h1>
    <form data-test="form" @submit.prevent="confirmLogin">
        <div class="input">
            <label>Username:</label>
            <input data-test="username" type="text" name="username" v-model="username" />

            <label>Password:</label>
            <input data-test="password" type="password" name="password" v-model="password" />


            <div class="submit">
                <button type="submit">Login</button>
            </div>
        </div>
    </form>
    <div v-if="invalid">
        <router-link :to="{name: 'Register'}">Invalid login. Please click here to register</router-link>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
                invalid: false,
            }
        },
        methods: {
            confirmLogin() {
                if (this.username !== this.$store.state.username && this.password !== this.$store.state.password) {
                    this.invalid = true;
                } else {
                    this.$store.commit("updateToken", 123);
                    this.$router.push({ name: 'Home' });
                }
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
  button:disabled{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  }
</style>