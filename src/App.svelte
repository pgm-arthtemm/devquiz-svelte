<script>
  import "./main.css";
  import { Router, Route } from "svelte-navigator";
  import * as Routes from "./routes/index";
  import Home from "./pages/Home.svelte";
  import Overview from "./pages/Overview.svelte";
</script>

<Router>
  <Route path={Routes.HOME}>
    <Home />
  </Route>

  <Route path={Routes.OVERVIEW}>
    <Overview />
  </Route>
</Router>

<style>
  :global(html) {
    background: rgb(47, 47, 47);
  }
</style>
