<script>
  import { quizSettings } from "../../stores";

  let amount = 15;

  const handleChange = (e) => {
    quizSettings.set({
      ...$quizSettings,
      amount: e.target.value,
    });
  };
</script>

<div class="question--amount">
  <h2>Questions {amount}</h2>
  <input
    class="slider"
    type="range"
    min="1"
    max="15"
    bind:value={amount}
    on:change={(e) => handleChange(e)}
  />
</div>

<style>
  .question--amount {
    margin-bottom: 2rem;
  }
  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: red;
    outline: none;
    margin-top: 1rem;
    background: grey;
    border-radius: 5px;
  }
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 5px;
    appearance: none;
    width: 25px;
    height: 25px;
    background: rgb(192, 135, 59);
    cursor: pointer;
  }
</style>
