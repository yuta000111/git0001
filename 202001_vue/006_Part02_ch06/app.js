const CORRECT = { CD: 1, VALUE: "○" }
const INCORRECT = { CD: 0, VALUE: "☓" }
const MAX_POINT = 100
const ANSWER = { YES: 1, NO: 0 }

const app = Vue.createApp({})
app.component("result-template", {
    props: {
        totalScore: {
            type: Number,
            required: true
        },
        questions: Array,

        yourAnswer: Array
    },
    template: "#result-template",
    computed: {
        corrects: function() {
            const self = this
            return this.questions.map((q, i) => {
                if (q.answer === self.yourAnswer[i]) {
                    return { cd: CORRECT.CD, value: CORRECT.VALUE }
                } else {
                    return { cd: INCORRECT.CD, value: INCORRECT.VALUE }
                }
            })
        },
        maxPoint: function() {
            return MAX_POINT
        },
        isPerfect: function() {
            return this.totalScore === this.maxPoint

        }
    },
    methods: {
        onClick: function() {
            this.$emit("click")
        },
        getCorrectClassName: function(correctCd) {
            return correctCd === CORRECT.CD ? "has-text-weight-bold has-text-white has-background-success" : ""
        }
    }
})
app.component("qa-template", {
    props: {
        questionText: String
    },
    template: "#qa-template",
    methods: {
        onClickYesBtn: function() {
            this.$emit("click-yes-btn", ANSWER.YES)
        },
        onClickNoBtn: function() {
            this.$emit("click-no-btn", ANSWER.NO)
        }
    }
})

app.mount("#app")