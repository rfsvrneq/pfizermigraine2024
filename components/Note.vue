<script setup>
const store = useApiStore();
const htmlContent =  store.apiData_1.find(e => e.ID == '2809').Content;
</script>

<template lang="pug">

div.bg-primary-rebrown-800
  .container
    h4.ttl-sub 訂購須知

    //- 訂購須知 CMS 編輯器
    .text-primary-grey.initialize
      div(v-html="htmlContent")

</template>

<style scoped lang="sass">
</style>