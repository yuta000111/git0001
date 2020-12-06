Vue.createApp({
    data: function() {
        return {
            items: []
        }
    },
    methods: {
        fetchItem: function() {
            const self = this
            axios.get("./item.json").then(function(response) {
                self.items = response.data
                console.log(response) //コンソールに出力
            })
        }
    },
    mounted: function() {
        // アプリケーションが立ち上がったら商品一覧を取得する
        this.fetchItem()
    }
}).mount("#app")