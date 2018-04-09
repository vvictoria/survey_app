<template>
    <div>
        <div v-for="(stage, index) in info.stages" :key="stage.id">
            <router-link :to="{name: 'stage', params: {stageId: ''+stage.id}}">
                Stage {{ index+1 }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import Info from '@/assets/data/questions.json';

    export default {
        components: {
            Info
        },

        data () {
            return {
                info: Info
            }
        },
    }
</script>

<style>

</style>