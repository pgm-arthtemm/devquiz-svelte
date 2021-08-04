<script>
  import { onMount } from "svelte";
  import { quizSettings } from "../../stores";
  import { Link } from "svelte-navigator";
  import * as Constant from "../../consts/index";
  import { questions } from "../../stores";

  const nextQuestion = () => {
    index += 1;
  };

  const answerClick = (e) => {
    console.log(e.target.dataset.id);
  };

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
</script>

<div class="question--list">
  {#if index < $quizSettings.amount}
    {#if data[index] === undefined}
      <h3>Loading...</h3>
    {:else}
      <div class="question">
        <h3>{data[index].question}</h3>
      </div>
      <div class="answers">
        <ul class="answer--list">
          {#each Object.entries(data[index].answers) as answer}
            {#if answer[1] !== null}
              <h4>{answer[1]}</h4>
            {/if}
          {/each}
        </ul>
      </div>
    {/if}
  {/if}

  {#if index < $quizSettings.amount}
    <button on:click={() => nextQuestion()}>Next question</button>
  {:else}
    <Link to="/results">
      <button>Finish</button>
    </Link>
  {/if}
</div>
