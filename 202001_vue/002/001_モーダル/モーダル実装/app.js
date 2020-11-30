Vue.createApp({
    data: function() {
        return {
            thumbnails: [{
                    id: 1,
                    url: "https://placehold.jp/300x300.png"
                },
                {
                    id: 2,
                    url: "https://placehold.jp/3d4070/ffffff/300x300.png"
                },
                {
                    id: 3,
                    url: "https://placehold.jp/b32020/ffffff/300x300.png"
                }
            ],
            isVisible: false,
            selectedThumnailId: undefined,
            isThumbailLoaded: false,
        }
    },
    computed: {
        currentThumnail: function() {
            const self = this
            return _.find(this.thumnails, function(thumb) {
                return thumb.id === self.selectedThumnailId
            })
        },
        modalstyle: function() {

        }
    },
    methods: {
        openmodal: {
            openmodal: function(thumb) {
                this.isVisible = true
                this.selectedThumnailId = thumb.id
            }
        }
    }
}).mount('#app')