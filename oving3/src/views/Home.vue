<template>
    <div>
        <h1>Hello {{ name }} </h1>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                name: ""
            }
        },
        mounted() {
            this.name = this.$store.state.fullName;
        }
    }
</script>

<style scoped>

</style>