<script setup>

  const store = useApiStore();
  const articleArray = ref(store.apiData_2.Data.find(
    e => e.TypeCode == '07'
  ).Data)
  
</script>

<template lang="pug">
div
  .container
    h2.ttl
      | 相關文章
      span ─&ensp;Article&ensp;─

    section
      ArticleListCard(v-for="article in articleArray" :key="article.ID" :article="article")



</template>

<style scoped></style>
