<template>
  <h1>Calculator</h1>
  <Calculator />
  <History />
</template>

<script>
import Calculator from "../components/Calculator.vue";
import History from '../components/History.vue';

export default {
  name: "Home",
  components: {
    Calculator,
    History,
  },
};
</script>