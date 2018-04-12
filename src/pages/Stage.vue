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
                {{ question.text }}
                <input
                    :type="question.input.type"
                    v-validate="question.input.validation_rule"
                    :name="question.name"
                    @change="processOne"
                >
                <span v-show="errors.has(question.name)" class="help is-danger">{{ errors.first(question.name) }}</span>
            </div>
        </div>
        <div>
            <router-link
                :to="nextStage ? {name: 'stage', params: {stageId: '' + nextStage.id}} : {name: 'finish'}"
                @click.native="valildate"
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
                return this.info.stages.filter(el => el.id == this.stageId)[0];
            },
            nextStage() {
                let nextIndex = this.info.stages.indexOf(this.stage) + 1;
                if (nextIndex < this.info.stages.length) {
                    return this.info.stages[nextIndex];
                } else {
                    return null;
                }
            },
            numberOfQuestions: function () {
                var number = 0;
                this.info.stages.forEach(function(stage){
                    number = number + stage.questions.length;
                });
                return number;
            }
        },
        data () {
            return {
                info: Info
            }
        },
        methods: {
            validate() {
                this.$validator.validateAll().then((result) => {
                    // eslint-disable-next-line
                    alert(`Validation Result: ${result}`);
                });
            },
            processOne(e) {
                if(!this.errors.has(e.target.name)) {
                    this.saveValue(e.target.name, e.target.value);
                } else {
                    this.removeValue(e.target.name);
                }
                console.log(localStorage);


                // change progress
            },
            saveValue(name, value) {
                localStorage[name] = value;
            },
            removeValue(name) {
                delete localStorage[name];
            },
            processGroup() {
                // if not all are saved
            }
        }
    }
</script>

<style>

</style>