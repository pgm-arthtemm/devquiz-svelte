<script>
  import { quizSettings } from "../stores";
  import { Link } from "svelte-navigator";
  import * as Routes from "../routes/index";
</script>

<div class="overview">
  <div class="heading">
    <h2>Quiz starting!</h2>
    <p>You have 30 seconds for every question</p>
    <p>Carefully read the question and answers first.</p>
    <p>Good luck, have fun!</p>
  </div>
  <div class="confirm">
    <h2>Settings</h2>
    <p>If the settings are correct, press start</p>
    <ul>
      {#each Object.keys($quizSettings) as setting, i}
        <li>{setting}: <span>{Object.values($quizSettings)[i]}</span></li>
      {/each}
    </ul>
  </div>
  <Link to={Routes.HOME}>
    <button>Go back</button>
  </Link>

  <Link to={Routes.QUIZ}>
    <button>Start quiz</button>
  </Link>
</div>

<style>
  .overview {
    text-align: center;
  }
  .overview div {
    margin-bottom: 2rem;
  }
  .overview h2 {
    font-size: 2rem;
    margin-bottom: 0.2rem;
  }
  .overview p {
    font-size: 1.2rem;
  }
  .confirm ul {
    list-style-type: none;
    margin-top: 1rem;
  }
  .confirm ul li {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .confirm span {
    color: rgb(192, 135, 59);
  }

  button {
    margin: auto;
    border: none;
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    margin-top: 2rem;
    padding: 1rem;
    background-color: grey;
    width: 15%;
  }
  button:hover {
    background: rgb(192, 135, 59);
    cursor: pointer;
    color: white;
  }
</style>
