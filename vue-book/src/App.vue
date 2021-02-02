<template>
  <h1>Vueクイズ</h1>
  <quiz></quiz>
</template>

<script>
import quiz from '@/components/quiz'
const ANSWER = { YES: 1, NO: 0 }
const CORRECT = { CD: 1, VALUE: "○" }
const INCORRECT = { CD: 0, VALUE: "×" }
const MAX_POINT = 100
export default {
  components:{
    quiz
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
            currentIndex:0
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

</style>
