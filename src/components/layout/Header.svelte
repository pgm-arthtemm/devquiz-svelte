<script>
  import { Link } from "svelte-navigator";
  import * as Routes from "../../routes/index";
</script>

<div class="header">
  <Link to={Routes.HOME}>
    <h1>DevQuiz</h1>
  </Link>
</div>

<style>
  .header {
    background: grey;
    text-align: center;
    padding: 1.45rem;
    margin-bottom: 1rem;
  }
  h1 {
    display: inline-block;
    color: black;
    text-decoration: none;
  }
</style>
