<script>
  import Header from "../components/layout/Header.svelte";
</script>

<Header />
<div class="container">
  <slot />
</div>

<style>
  .container {
    width: 85%;
    margin: auto;
  }
</style>
