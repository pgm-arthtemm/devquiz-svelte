<script>
  import { questions, answerData } from "../stores";

  let data = $questions.data;

  console.log($answerData);
</script>

<div class="results">
  <h2>Results</h2>
  <div class="legend">
    <div>
      <div class="right" />
      <h3>= Correct answer</h3>
    </div>
    <div>
      <div class="wrong" />
      <h3>= Wrong answer</h3>
    </div>
  </div>
  <div class="result--wrapper">
    <ul>
      {#each data as question, index}
        <h3>{question.question}</h3>
        <ul class="answer--list">
          {#each Object.entries(data[index].answers) as answer}
            {#if answer[1] !== null}
              <li
                class:rightAnswer={$answerData[index] ===
                  data[index].correct_answer}
                class:wrongAnswer={$answerData[index] === answer[0]}
                class:correct={data[index].correct_answer === answer[0]}
              >
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
  .legend {
    margin: 1rem 0;
  }
  .legend div {
    align-items: center;
    display: flex;
  }
  .right,
  .wrong {
    width: 3rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
  .right {
    background-color: rgb(89, 216, 89);
  }
  .wrong {
    background-color: rgb(221, 92, 92);
  }
  .result--wrapper {
    margin-top: 1rem;
  }
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
    border-radius: 5px;
  }
  .correct {
    border-left: 8px solid lightskyblue;
  }
  .wrongAnswer {
    border-left: 8px solid rgb(221, 92, 92);
  }
  .rightAnswer {
    border-left: 8px solid rgb(89, 216, 89);
  }
</style>
