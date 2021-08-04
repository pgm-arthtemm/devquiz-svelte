<script>
  import { Link } from "svelte-navigator";
</script>

<Link to="/overview">
  <button>Next</button>
</Link>

<style>
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
    width: 100%;
  }
  button:hover {
    background: rgb(192, 135, 59);
    cursor: pointer;
    color: white;
  }
</style>
