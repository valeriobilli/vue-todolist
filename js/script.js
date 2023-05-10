const { createApp } = Vue 

createApp({
    data() {
        return {
            newTask: "",
            taskList: [
                { text: "Milestone 1", done: false },
                { text: "Milestone 2", done: false },
                { text: "Milestone 3", done: false },
            ]
        }
    },
    methods: {
        addTask() {
            this.taskList.unshift(this.newTask);
            this.newTask.text = "";
        },
        removeTask(position) {
            this.taskList.splice(position, 1)
        },
    }
}).mount('#app')