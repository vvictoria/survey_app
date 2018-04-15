<template>
    <div>
        <div class="steps">
            <router-link :to="{name: 'stage', params: {stageId: ''+stage.id}}" class="step" v-for="(stage, index) in info.stages" :key="stage.id">
                <span class="pin">{{ index+1 }}</span>
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

<style lang="scss" scoped>
    .steps {
        display: flex;
        border-top: 2px solid #DDD;
        margin-top: 32px;
        .step {
            flex: 1;
            text-align: center;
            height: 66px;
            margin-top: -32px;
            display: flex;
            .pin {
                border-radius: 50%;
                border: 2px solid #F00;
                background: #F00;
                color: #FFF;
                font-family: sans-serif;
                width: 32px;
                height: 32px;
                font-size: 20px;
                line-height: 32px;
                margin: auto;
            }
            &.router-link-active ~ .step .pin {
                background: #DDD;
                border-color: #DDD;
            }
        }
    }
</style>