<template>
    <div class="div">
        <div class="content has-text-centered">
            <h2 class="title">結果発表</h2>
            <table class="table iis-bordered">
                <tr>
                    <th v-for="(q,index) in this.questions" :key="q.text">
                        Q{{index + 1}}
                    </th>
                </tr>
                <tr>
                    <td v-for="correct in this.corrects" :class="getCorrectClassName(correct.cd)" :key="correct.cd">
                        {{correct.value}}
                    </td>
                </tr>
            </table>
            <p>あなたの得点は…</p>
            <p v-if="isPerfect">すごい！全問正解です！</p>
            <p v-if="!isPerfect"><strong class="is-size-2 has-text-danger">{{totalScore}}</strong>/{{maxPoint}}点でした！</p>
            <button class="button is-fullwidth is-info has-text-weight-bold">最初からやり直す</button>
        </div>
    </div>
</template>
<script>
const CORRECT = {CD :1 ,VALUE : "◯"}
const INCORRECT = {CD :0 ,VALUE : "×"}
const MAX_POINT = 100
export default {
    props:{
        totalScore:{
            type:Number,
            required:true
        },
        yourAnswer:Array,
        questions:Array
    },
    computed:{
        corrects:function(){
            const self = this
            return this.questions.map(function(q,i){
                if (q.answer === self.yourAnswer[i]){
                    return {cd : CORRECT.CD , value:CORRECT.VALUE}
                }else{
                    return {cd : INCORRECT.CD,value:INCORRECT.VALUE}
                }
            })
        },
        maxPoint:function(){
            return MAX_POINT
        },
        isPerfect:function(){
            return this.totalScore === this.maxPoint
        }
    },
    methods:{
        getCorrectClassName:function(correctCd){
            return correctCd === CORRECT.CD ? "has-text-weight-bold has-text-white has-background-success":""
        }
    }
}
</script>
<style lang="scss">

</style>