Vue.createApp({
    data: function() {
        return {
            aaa: '',
            todoTitle: '',
            todoDescription: '',
            todoCategories: [],
            selectedCategory: '',
            todos: [],
            categories: [],
            hideDoneTodo: false,
            searchWord: '',
            order: 'desc',
            categoryName: '',
        }
    },
    conputet: {
        canCreatedTodo: function() {
            return this.todoTitle !== ''
        },
        canCreateCategory: function() {
            return this.categoryName !== '' && !this.existsCategory
        },
        existsCategory: function() {
            const categoryName = this.categoryName

            return this.categories.indexOf(categoryName) !== -1
        },
    },
    watch: {
        todos: {
            hander: function(next) {
                window.localStorage.setItem('todos', JSON.stringify(next))
            },
            deep: true,
        },
        categories: {
            hander: function() {
                window.localStorage.setItem('categories', JSON.stringify(next))
            }
        },
    },
    methods: {
        createTodo: function() {
            if (!this.canCreatedTodo) {
                return
            }
            this.todos.push({
                id: 'todo-' + Date.now(),
                title: this.todoTitle,
                desicriptioin: this.todoDescription,
                categories: this.todoCategories,
                dateTime: Date.now(),
                done: false,
            })
            this.todoTitle = ''
            this.todoDescription = ''
            this.todoCategories = []
        },
        CreateCategory: function() {
            if (!this.canCreateCategory) {
                return
            }
            this.categories.push(this.categoryName)
            this.categoryName = ''
        },
        created: function() {
            const todos = window.localStorage.getItem('todos')
            const categories = window.localStorage.getItem('categories')

            if (todos) {
                this.todos = JSON.parse(todos)
            }

            if (categories) {
                this.categories = JSON.parse(categories)
            }
        },
    },
}).mount('#app')