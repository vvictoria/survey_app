<template>
    <div>
        <div class="progress">
            <Progress/>
        </div>
        <div class="content">
            <h1>Stages:</h1>
            {{ stage.id }}
            {{ stage.name }}
            <div v-for="question in stage.questions" :key="question.id">
                {{ question.header }}
                {{ question.text }}
                <input :type="question.input.type">
            </div>
        </div>
        <div>
            <router-link
                :to="nextStage ? {name: 'stage', params: {stageId: '' + nextStage.id}} : {name: 'finish'}"
            >
                <div v-if="nextStage !== null">Next</div>
                <div v-if="nextStage === null">Finish</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Progress from '@/components/Progress';
    import Info from '@/assets/data/questions.json';

    export default {
        components: {
            Progress,
            Info
        },

        props: {
            stageId: {
                type: String,
                required: true
            }
        },

        computed: {
            stage() {
                console.log('STAGES:', this.info);
                return this.info.stages.filter(el => el.id == this.stageId)[0];
            },
            nextStage() {
                let nextIndex = this.info.stages.indexOf(this.stage) + 1;
                if (nextIndex < this.info.stages.length) {
                    return this.info.stages[nextIndex];
                } else {
                    return null;
                }
            }
        },

        data () {
            return {
                info: Info
            }
        }
    }
</script>

<style>

</style>