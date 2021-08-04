<script>
  import MainLayout from "../layouts/MainLayout.svelte";
  import Category from "../components/home/Category.svelte";
  import Difficulty from "../components/home/Difficulty.svelte";
  import QuestionsAmount from "../components/home/QuestionAmount.svelte";
  import StartBtn from "../components/home/StartBtn.svelte";
</script>

<MainLayout>
  <Category />
  <Difficulty />
  <QuestionsAmount />
  <StartBtn />
</MainLayout>
