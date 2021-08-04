<script>
  import { quizSettings } from "../../stores";

  const difficulties = ["Easy", "Medium", "Hard"];

  const handleClick = (e) => {
    console.log(e.target.dataset.id);
    quizSettings.set({
      ...$quizSettings,
      difficulty: e.target.dataset.id,
    });
  };
</script>

<div class="difficulties">
  <h2>Difficulty</h2>
  <ul class="difficulty__list">
    {#each difficulties as difficulty}
      <li
        data-id={difficulty}
        on:click={(e) => {
          handleClick(e);
        }}
        class="difficulties__list--item"
      >
        {difficulty}
      </li>
    {/each}
  </ul>
</div>

<style>
  .difficulties {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  .difficulty__list {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  .difficulties__list--item {
    padding: 1rem;
    border-radius: 5px;
    width: 33%;
    text-align: center;
    font-weight: bold;
    background: grey;
  }
  .difficulties__list--item:hover {
    background: rgb(192, 135, 59);
    color: white;
    cursor: pointer;
  }
</style>
