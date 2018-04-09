<template>
    <div>
        <p>{{ msg }} works!</p>
        <Test/>
    </div>
</template>

<script>
    import Test from '@/components/Inner';

    export default {
        components: {
            Test
        },
        data () {
            return {
                msg: 'Vue.js App'
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        color: red;
        p {
            color: green;
        }
    }
</style>
