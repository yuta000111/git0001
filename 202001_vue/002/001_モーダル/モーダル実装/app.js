Vue.createApp({
    data: function() {
        return {
            thumbnails: [{
                    id: 1,
                    src: "https://placehold.jp/300x300.png"
                },
                {
                    id: 2,
                    src: "https://placehold.jp/3d4070/ffffff/300x300.png"
                },
                {
                    id: 3,
                    src: "https://placehold.jp/b32020/ffffff/300x300.png"
                }
            ],
            isVisibele: false,
            selectedThumbnailId: undefined,
            isThumbnailLoaded: false,
            thumbnailHeight: 0,
        }
    },
    computed: {
        currentThumnail: function() {
            const self = this
            return _.find(self.thumbnails, function(thumb) {
                return thumb.id === self.selectedThumbnailId
            })
        },
    },
    methods: {
        openModal: function(thumb) {
            this.isVisible = true
            this.selectedThumbnailId = thumb.id
        },
        onLoad: function(event) {
            this.thumbnailHeight =
                event.target.naturalHeight > 300 ? 300 : event.target.naturalHeight
            this.isThumbnailLoaded = true
        },
        closeModal: function() {
            this.isVisible = false
            this.selectedThumbnailId = undefined
        }

    }
}).mount('#app');