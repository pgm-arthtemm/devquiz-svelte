<script>
  import { onMount } from "svelte";

  let time = 30;

  onMount(() => {
    setInterval(() => {
      time -= 1;
    }, 1000);
  });
</script>

<div class="timer">
  <h3>{time}s left</h3>
</div>
