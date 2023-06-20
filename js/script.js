console.log("JSOK");
// Controllo JS
console.log("JSOK");

// Controllo Vue

console.log("Vue OK", Vue);

// Estarpolo il metodo createApp

const { createApp } = Vue;

// Inizializzo l'app Vue

const app = createApp({
  data() {
    return {
      tasks: [
        {
          name: "Fare la spesa",
          done: true,
        },
        {
          name: "Fare esercizio fisico per 30 minuti",
          done: false,
        },
        {
          name: "Leggere almeno 1 capitolo di un libro",
          done: false,
        },
        {
          name: "Pulire e mettere in ordine la camera da letto",
          done: false,
        },
        {
          name: "Scrivere una email importante",
          done: false,
        },
        {
          name: "Fare il bucato e stirare i vestiti",
          done: false,
        },
      ],
    };
  },
});

// La monto nell'elemento HTML

app.mount("#root");
