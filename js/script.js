console.log("JSOK");
// Controllo JS
console.log("JSOK");

// Controllo Vue

console.log("Vue OK", Vue);

// Estarpolo il metodo createApp

const { createApp } = Vue;

// Inizializzo l'app Vue

const app = createApp({
  // Data
  data() {
    return {
      // New Task
      newTask: "",
      // Tasks
      tasks: [
        {
          name: "Fare la spesa",
          done: false,
          id: 20,
        },
        {
          name: "Fare esercizio fisico per 30 minuti",
          done: false,
          id: 73,
        },
        {
          name: "Leggere almeno 1 capitolo di un libro",
          done: false,
          id: 51,
        },
        {
          name: "Pulire e mettere in ordine la camera da letto",
          done: false,
          id: 99,
        },
        {
          name: "Scrivere una email importante",
          done: false,
          id: 16,
        },
        {
          name: "Fare il bucato e stirare i vestiti",
          done: false,
          id: 48,
        },
      ],
    };
  },
  // Computed
  computed: {},
  // Methods
  methods: {
    // Remove Task
    removeTask(target) {
      this.tasks = this.tasks.filter((task) => target !== task.id);
    },
    // Add Task
    addTask() {
      this.tasks.push({
        name: this.newTask,
        done: false,
        id: 1,
      });
      this.newTask = "";
    },
  },
});

// La monto nell'elemento HTML

app.mount("#root");
