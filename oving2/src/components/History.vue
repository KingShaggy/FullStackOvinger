<template>
    <div class="historyBox">
        <ul>
            <li v-for="item in history" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['history'],
    data() {
        return {

        }
    }
}
</script>