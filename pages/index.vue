<script setup>

  const Api = {
    FeatureList: '/SpecialTopic/GetFeatureList', // 取得特企列表
    FeatureArticleList: '/SpecialTopic/GetFeatureArticleList', // 取得特企文章（相關資料）
    FeatureId_1: '2803',
    FeatureId_2: '2809',
    FeatureId_3: '2806',
  }

  // 取出環境變數
  const { public: { cache, status, apiUrl} } = useRuntimeConfig();
  
  // 傳入參數設定
  const body_1 = {
    SiteNo: 9,
    ID: Api.FeatureId_1,
    Cache: cache,
    Status: status,
  };
  const body_2 = {
    SiteNo: 9,
    ID: Api.FeatureId_2,
    Cache: cache,
    Status: status,
  };
  const body_3 = {
    SiteNo: 9,
    ID: Api.FeatureId_3,
    Cache: cache,
    Status: status,
  };

  const store = useApiStore();

  await Promise.all([
    useAsyncData('api1', async () => {
      const data = await $fetch(apiUrl + Api.FeatureList, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body_1)
      });
      store.setApiData_1(data);
      return data;
    }),

    useAsyncData('api2', async () => {
      const data = await $fetch(apiUrl + Api.FeatureArticleList, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body_2)
      });
      store.setApiData_2(data);
      return data;
    }),

    useAsyncData('api3', async () => {
      const data = await $fetch(apiUrl + Api.FeatureArticleList, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(body_3)
      });
      store.setApiData_3(data);
      return data;
    })
  ]);


  // await useAsyncData('api', async () => {
  //   const data = await $fetch(apiUrl + Api.FeatureList, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify(body_1)
  //   });
  //   store.setApiData(data);
  //   return data;
  // });

</script>

<template lang="pug">
div
  Kv
  Info
  Speaker
  Agenda
  ArticleList
  Note
</template>

<style scoped></style>
