<script>
  import { questions } from "../stores";

  let data = $questions.data;

  console.log(data);
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
              <li class:correct={data[index].correct_answer === answer[0]}>
                {answer[1]}
              </li>
            {/if}
          {/each}
        </ul>
      {/each}
    </ul>
  </div>
</div>

<style>
  .answer--list {
    width: 100%;
    list-style-type: none;
    margin-bottom: 4rem;
  }
  .answer--list li {
    background-color: grey;
    font-weight: bold;
    padding: 1rem;
    margin: 1rem 0;
  }
  .correct {
    border-left: 8px solid green;
  }
</style>
