Vue.createApp({
    data: function() {
        return {
            aaa: '',
            todoTitle: '',
            todoDescription: '',
            todoCategories: [],
            hideDoneTodo: false,
            searchWord: '',
            order: 'desc',
        }
    },
    conputet: {
        canCreatedTodo: function() {
            return this.todoTitle !== ''
        },
    }
}).mount('#app')