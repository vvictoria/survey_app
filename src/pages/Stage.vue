<template>
    <div>
        <div class="users-progress">
            <Progress/>
        </div>
        <div class="content">
            Progress {{ progress }}
            <h1>Stage {{ stage.id }}</h1>
            <div v-for="question in stage.questions" :key="question.id">
                {{ question.text.split(/ ?\*\*\* ?/)[0] }}
                <select
                    v-if="question.input.type == 'country'"
                    :name="question.name"
                    :class="{'form-control': true, 'is-invalid': errors.has(question.name)}"
                    v-validate="question.input.validation_rule"
                    style="width: 200px; display: inline-block"
                >
                    <option v-for="country in countryList" :key="country.alpha2Code">
                        {{ country.name }}
                    </option>
                </select>
                <input
                    style="width: 200px; display: inline-block"
                    v-else
                    :type="question.input.type"
                    v-validate="question.input.validation_rule"
                    :name="question.name"
                    @change="processOne"
                    :class="{'form-control': true, 'is-invalid': errors.has(question.name)}"
                >
                {{ question.text.split(/ ?\*\*\* ?/)[1] }}
                <span v-show="errors.has(question.name)" class="invalid-feedback">{{ errors.first(question.name) }}</span>
            </div>
        </div>
        <div>
            <a :href="nextStage ? ('#/stages/' + nextStage.id) : '#/finish'" @click="validate">
                &rsaquo;&rsaquo;&rsaquo;
            </a>
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
        mounted() {
            fetch('https://restcountries.eu/rest/v1/all').then(
                    res => res.json()
            ).then(
                    json => {
                        this.countryList = json;
                        this.countryList.unshift({name: ''});
                    }
            );
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
            numberOfQuestions() {
                var number = 0;
                this.info.stages.forEach(function(stage){
                    number = number + stage.questions.length;
                });
                return number;
            },
            progress() {
                return Math.round(this.numberOfAnswers * 100 / this.numberOfQuestions);
            }
        },
        data () {
            return {
                info: Info,
                numberOfAnswers: 0,
                disabled: false,
                countryList: [],
                bool: null
            }
        },
        methods: {
            validate(e) {
                this.$validator.validateAll().then((result) => {
                    if (result == false) {
                        e.preventDefault();
                    }
                });
            },
            processOne(e) {
                if(!this.errors.has(e.target.name)) {
                    this.saveValue(e.target.name, e.target.value);
                    ++this.numberOfAnswers;
                } else {
                    this.removeValue(e.target.name);
                    if (this.numberOfAnswers != 0) {
                        --this.numberOfAnswers;
                    }
                }
            },
            saveValue(name, value) {
                localStorage[name] = value;
            },
            removeValue(name) {
                delete localStorage[name];
            }
        }
    }
</script>

<style>

</style>