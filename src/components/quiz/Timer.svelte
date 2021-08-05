<script>
  import { onMount } from "svelte";

  export let nextQuestion;

  let timeLeft = 60;

  onMount(() => {
    setInterval(() => {
      timeLeft -= 1;
      if (timeLeft === 0) {
        timeLeft = 60;
        nextQuestion();
      }
    }, 1000);
  });
</script>

<h3>{timeLeft}</h3>
