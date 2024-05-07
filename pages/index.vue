<script setup>

  const Api = {
    FeatureList: '/SpecialTopic/GetFeatureList', // 取得特企列表
    FeatureArticleList: '/SpecialTopic/GetFeatureArticleList', // 取得特企文章（相關資料）
    FeatureId: '2803',
  }

  // 取出環境變數
  const { public: { cache, status, apiUrl} } = useRuntimeConfig();
  
  const body = {
    SiteNo: 9,
    ID: Api.FeatureId,
    Cache: cache,
    Status: status,
  };

  const store = useApiStore();

  await useAsyncData('api', async () => {
    const data = await $fetch(apiUrl + Api.FeatureList, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(body)
    });
    store.setApiData(data);
    return data;
  });

</script>

<template>
  <div>
    <ArticleList />
  </div>
</template>

<style scoped></style>
