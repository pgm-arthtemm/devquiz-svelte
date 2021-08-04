import { writable } from "svelte/store";

export const quizSettings = writable({
  category: "All",
  difficulty: "Easy",
  amount: 15,
});
