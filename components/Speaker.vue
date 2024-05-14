<script setup>

  const store = useApiStore();
  const imgArray = ref(store.apiData_3.Data.find(
    e => e.TypeCode == '05'
  ).Data)

</script>

<template lang="pug">
div#speaker.bg-primary-rebrown-800
  .container
    h2.ttl.text-white
      | 講者陣容
      span ─&ensp;Speaker&ensp;─

    section.flex.flex-wrap.justify-around.items-stretch
      h4.img-arrary.wow.ani-fadeIn(v-for="img in imgArray" :key="img.ID")
        img.-mt-10(:src="img.ImgSrc", alt="講者陣容")
        p.text-primary-gold.text-xl.font-medium.m-4.min-h-16.border-b-2.border-primary-gold.pb-4 {{ img.Title }}
        p.px-4.pb-4.text-justify.text-lg {{ img.Abstract }}

</template>

<style scoped lang="sass">
  .img-arrary
    width: 300px
    border-radius: .25rem
    @apply text-white justify-between bg-primary-rebrown-900 my-10
</style>
