<template>
<div class="container">
  <div class="columns is-mobile is-centered">
    <div class="colums is-half">
      <h1 class="title is-1 has-text-centered">Vueクイズ</h1>
      <quiz v-if="questionText" :question="questionText.text" @click-yes-btn="doAnswer" @click-no-btn="doAnswer"></quiz>
      <status v-if="!questionText" :totalScore="totalScore" :questions="questions" :yourAnswer="yourAnswer"></status>
      </div>
    </div>
  </div>
</template>

<script>
import quiz from '@/components/quiz'
import status from '@/components/status'
const ANSWER = { YES: 1, NO: 0 }
const MAX_POINT =100
export default {
  components:{
    quiz,
    status
  },
  data:function(){
    return{
       questions: [{
                    text: "v-on:click の省略記法は #click である",
                    answer: ANSWER.NO
                },
                {
                    text: "単一要素にトランジション効果を付与するのは aniamtion コンポーネントである",
                    answer: ANSWER.NO
                },
                {
                    text: "v-for の区切り文字として in の他に of を使用できる",
                    answer: ANSWER.YES
                },
                {
                    text: "app.component で定義したコンポーネントを使う場合は、定義した後に Vue.createApp() の components オプション内で再度定義する必要がある",
                    answer: ANSWER.NO
                },
                {
                    text: "Vue.js をもっと書きたい",
                    answer: ANSWER.YES
                }
            ],
            currentIndex:0,
            yourAnswer:[]
    }
  },
  computed:{
    questionText:function(){
      return this.questions[this.currentIndex]
    },
    correctQuestion:function(){
      const self =this
      return this.questions.filter(function(q,i){
        return q.answer === self.yourAnswer[i]
      })
    },
    totalScore:function(){
        const score = MAX_POINT / this.questions.length
        return Math.floor(score * this.correctQuestion.length)
    }
  },
  methods:{
    doAnswer:function(answer){
      this.yourAnswer[this.currentIndex] = answer
      this.nextIndex()
    },
    nextIndex:function(){
      if (this.questions.length > this.currentIndex){
        this.currentIndex += 1
      }
    },
    restartIndex:function(){
      this.currentIndex = 0
      this.initYourAnswerArray()
    },
    initYourAnswerArray:function(){
      this.yourAnswer = Array(this.questions.length)
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
.container{
  margin-top: 30px;
}
</style>
