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

    section.grid.grid-cols-3.gap-5
      a.my-5(v-for="article in articleArray" :key="article.ID"  :href="article.LinkUrl.replace('?FeatureID=2809','')", target="_blank", rel="noopener noreferrer") 
        //- img.mb-2(:src="article.ImgSrc", :alt="article.Title")
        div(:style="{ backgroundImage: 'url(' + article.ImgSrc + ')' }")
        .flex.items-center
          span.line-clamp-2 {{ article.Title }}
          span.rounded-btn.text-sm more

</template>

<style scoped lang="sass">
.rounded-btn
  padding-top: .25rem
</style>
