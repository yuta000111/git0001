Vue.createApp({
    data: function() {
        return {
            apkey: '0170444aa79e9312a6d820f571dab4dc',
            items: [],
            searchWord: "",
            isHovered: false,
            hoverdItem: ""
        }
    },
    methods: {
        fetchApi: function() {
            const self = this
            fetch("https://api.search.nicovideo.jp/api/v2/snapshot/video/contents/search?q=" + this.searchWord + "&fields=title,viewCounter,commentCounter,description,tags&targets=title,description,tags&_sort=-viewCounter")
                .then(response => {
                    return response.json()
                })
                .then(resulet => {
                    self.items = resulet.data
                })
        },
        searching: function() {
            this.fetchApi()
        }

    },
    mounted: function() {
        this.fetchApi()
    }
}).mount('#app')