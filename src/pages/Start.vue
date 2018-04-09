<template>
    <div class="container">
        <h1>Survey.vue</h1>
        <router-link :to="{name: 'stage', params: {stageId: '1'}}">
            Start Survey
        </router-link>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Vue.js App'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: center;
        .progress {
            border: 1px solid black;
        }
    }
</style>
