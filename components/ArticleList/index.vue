<script setup>

  const store = useApiStore();

</script>

<template lang="pug">
div
  .container
    h2.ttl
      | 相關文章
      span ─&ensp;Article&ensp;─

    p {{ store.getApiData }}

  //- ArticleListRow
</template>

<style scoped></style>
