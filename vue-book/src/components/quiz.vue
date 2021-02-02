<template>
  <h1>Vueクイズ</h1>
  <div class="box">
      <div class="content">
          <p class="is-size-4">Q:{{question}}</p>
          <div class="columns">
              <div class="column">
                  <button class="button is-fullwidth is-success" @click="clickYesBtn">YES</button>
                  <button class="button is-fullwidth is-warning" @click="clickNoBtn">NO</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
const ANSWER = {YES:1,NO:0};
export default {
    props:{
        question:String
    },
    data:function(){
        return{
            aaa:''
        }
    },
    methods:{
        clickYesBtn:function(){
            this.$emit("click-yes-btn",ANSWER.YES)
        },
        clickNoBtn:function(){
            this.$emit("click-no-btn",ANSWER.NO)
        }
    }

}
</script>

<style>

</style>