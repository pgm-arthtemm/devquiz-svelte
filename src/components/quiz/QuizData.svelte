<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-navigator";
  import { quizSettings, questions, answerData } from "../../stores";
  import * as Constant from "../../consts/index";
  import Timer from "./Timer.svelte";

  let index = 0;
  let data = [];

  let answers = [];

  onMount(async () => {
    const response = await fetch(
      `${Constant.API_LINK}&limit=${$quizSettings.amount}${
        $quizSettings.category === "All" ? `&categories=` : `&category=`
      }${$quizSettings.category}&difficulty=${$quizSettings.difficulty}`
    );
    data = await response.json();
    questions.set({
      ...$questions,
      data: data,
    });
  });

  let currentAnswer;

  const handleClick = (e) => {
    currentAnswer = e.target.dataset.id;
  };

  const nextQuestion = () => {
    index += 1;
    console.log(currentAnswer);
    answers.push(currentAnswer);
    answerData.set(answers);
    currentAnswer = undefined;
  };
</script>

<div class="question--list">
  {#if index < $quizSettings.amount}
    {#if data[index] === undefined}
      <h3>Loading...</h3>
    {:else}
      <Timer {nextQuestion} />
      <div class="question">
        <h3>{data[index].question}</h3>
      </div>
      <div class="answers">
        <ul class="answer--list">
          {#each Object.entries(data[index].answers) as answer}
            {#if answer[1] !== null}
              <li data-id={answer[1]} on:click={(e) => handleClick(e)}>
                {answer[1]}
              </li>
            {/if}
          {/each}
        </ul>
      </div>
    {/if}
  {/if}

  {#if index < $quizSettings.amount}
    <button on:click={nextQuestion}>Next question</button>
  {:else}
    <Link to="/results">
      <button>Finish</button>
    </Link>
  {/if}
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
    border-radius: 5px;
  }
</style>
