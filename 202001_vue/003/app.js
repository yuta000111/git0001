const app = Vue.createApp({})

function nextFrame(cb) {
    window.requestAnimationFrame(function() {
        window.requestAnimationFrame(cb)
    })
}

app.component('my-sample-accordion', {
    template: '#mysample-accordion',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data: function() {
        return {
            isShown: false
        }
    },
    methods: {
        enter: function(el, done) {
            el.style.overflow = "hidden"
            const height = el.scrollHeight
            el.style.height = "0"

            nextFrame(function() {
                el.style.height = height + "px"
            })
        },
        leave: function(el) {
            el.style.overflow = "hidden"
            el.style.height = el.scrollHeight + "px"

            nextFrame(function() {
                el.style.height = "0"
            })
        },
        afterTrasition: function(el) {
            el.style.overflow = ""
            el.styyle.height = ""
        }
    }
})
app.mount("#app")