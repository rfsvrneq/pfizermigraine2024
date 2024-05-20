<script setup>

  const store = useApiStore();
  const htmlContent =  store.apiData_1.find(e => e.ID == '2806').Content;

</script>

<template lang="pug">
div#agenda
  .container
    h2.ttl(data-aos="fade-up")
      | 詳細議程
      span ─&ensp;Agenda&ensp;─

    //- 詳細議程 CMS 編輯器
    section.initialize(v-html="htmlContent")


</template>

<style scoped></style>
