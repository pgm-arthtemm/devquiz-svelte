<script>
  import { questions } from "../stores";

  let data = $questions.data;
</script>

<div class="results">
  <h2>Results</h2>
  <div class="result--wrapper">
    <ul>
      {#each data as question, index}
        <h3>{question.question}</h3>
        <ul class="answer--list">
          {#each Object.entries(data[index].answers) as answer}
            {#if answer[1] !== null}
              <li>{answer[1]}</li>
            {/if}
          {/each}
        </ul>
      {/each}
    </ul>
  </div>
</div>
