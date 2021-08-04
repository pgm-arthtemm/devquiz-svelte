<script>
  import "./main.css";
  import { Router, Route } from "svelte-navigator";
  import * as Routes from "./routes/index";
  import Home from "./pages/Home.svelte";
</script>

<Router>
  <Route to={Routes.HOME}>
    <Home />
  </Route>
</Router>

<style>
  :global(html) {
    background: rgb(47, 47, 47);
  }
</style>
