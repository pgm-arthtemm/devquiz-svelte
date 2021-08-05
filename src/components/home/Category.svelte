<script>
  import { quizSettings } from "../../stores";

  const categories = [
    "All",
    "Code",
    "Bash",
    "CMS",
    "DevOps",
    "Docker",
    "Linux",
    "SQL",
  ];

  const handleClick = (e) => {
    console.log(e.target.dataset.id);
    quizSettings.set({
      ...$quizSettings,
      category: e.target.dataset.id,
    });
  };
</script>

<div class="categories">
  <h2>Categories</h2>
  <ul class="category__list">
    {#each categories as category}
      <li
        data-id={category}
        on:click={(e) => {
          handleClick(e);
        }}
      >
        {category}
      </li>
    {/each}
  </ul>
</div>

<style>
  .categories {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  .category__list {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  .category__list li {
    padding: 1rem;
    border-radius: 5px;
    width: 12%;
    text-align: center;
    font-weight: bold;
    background: grey;
  }
  .category__list li:hover {
    background: rgb(192, 135, 59);
    color: white;
    cursor: pointer;
  }
</style>
