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
            selectedThumbnailId: undefined, // 選択したサムネイルID
            imageTranstionName: "prev",
            isVisible: false, // 表示状態 trueなら表示、falseなら非表示
            thumbnailHeight: 0, // モーダル内のサムネイルの高さ
            isThumbnailLoaded: false // サムネイルが読み込み完了したかどうか
        }
    },
    watch: {
        // サムネイルが選択（変更）されたらサムネイルの読み込み状態を読み込み中にする
        selectedThumbnailId: function() {
            this.isThumbnailLoaded = false
        }
    },
    computed: {
        // 現在表示中のサムネイルオブジェクト
        currentThumbnail: function() {
            const self = this
            return _.find(self.thumbnails, function(thumb) {
                return thumb.id === self.selectedThumbnailId
            })
        },
        // サムネイルをラップしている要素の高さ
        containerStyle: function() {
            return {
                height: this.thumbnailHeight + "px"
            }
        },
        currentThumbnailIndex: function() {
            const self = this
            return _.findIndex(self.thumbnails, function(thumb) {
                return thumb.id === self.selectedThumbnailId
            })
        },
        nextThumbnail: function() {
            const nextIndex = this.currentThumbnailIndex + 1
            return this.thumbnails[
                nextIndex > this.thumbnails.length - 1 ? 0 : nextIndex
            ]
        },
        prevThumbnail: function() {
            const prevIndex = this.currentThumbnailIndex - 1
            return this.thumbnails[
                prevIndex > this.thumbnails.length - 1 ? 0 : prevIndex
            ]
        },
    },
    methods: {
        // モーダルを開く
        openModal: function(thumb) {
            this.isVisible = true
            this.selectedThumbnailId = thumb.id
        },
        // 画像の読み込み完了時に実行するメソッド
        onLoad: function(event) {
            this.thumbnailHeight =
                event.target.naturalHeight > 300 ? 300 : event.target.naturalHeight
            this.isThumbnailLoaded = true
        },
        //モーダルを閉じる処理
        closeModal: function() {
            this.isVisible = false
            this.selectedThumbnailId = undefined
        },
        onClickPrev: function() {
            this.selectedThumbnailId = this.prevThumbnail.id
        },
        onClickNext: function() {
            this.selectedThumbnailId = this.nextThumbnail.id
        }
    }
}).mount("#app")