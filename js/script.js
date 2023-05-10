const { createApp } = Vue 

createApp({
    data() {
        return {
            taskList: [
                { text: "Milestone 1", done: false },
                { text: "Milestone 2", done: false },
                { text: "Milestone 3", done: false },
            ]
        }
    },
    methods: {
        metodo() {
            console.log("metodo che stampa un dato: ", this.chiave);
        }
    }
}).mount('#app')