<template>
    <div class="historyBox">
        <h3>History</h3>
        <ul>
            <li v-for="item in history" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        history() {
            return this.$store.state.history
        }
    }
}
</script>