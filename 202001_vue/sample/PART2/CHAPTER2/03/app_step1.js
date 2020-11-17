Vue.createApp({
  data: function () {
    return {
      thumbnails: [
        {
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
      ]
    }
  },
  methods: {
    // ▼②
    openModal: function (thumb) {
      // ③console.log()でクリックしたサムネイル情報を確認する
      console.log(thumb)
    }
  }
}).mount("#app")
