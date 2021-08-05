import { writable } from "svelte/store";

export const quizSettings = writable({
  category: "All",
  difficulty: "Easy",
  amount: 15,
});

export const questions = writable({
  data: null,
});

export const answerData = writable([]);
