<script>
  import "./main.css";
  import { Router, Route } from "svelte-navigator";
  import * as Routes from "./routes/index";
  import Home from "./pages/Home.svelte";
  import Overview from "./pages/Overview.svelte";
  import Quiz from "./pages/Quiz.svelte";
  import Results from "./pages/Results.svelte";
</script>

<Router>
  <Route path={Routes.HOME}>
    <Home />
  </Route>

  <Route path={Routes.OVERVIEW}>
    <Overview />
  </Route>

  <Route path={Routes.QUIZ}>
    <Quiz />
  </Route>

  <Route path={Routes.RESULTS}>
    <Results />
  </Route>
</Router>
