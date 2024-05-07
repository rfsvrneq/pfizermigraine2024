import { defineStore } from "pinia";

export const useApiStore = defineStore("api", () => {
  
  const apiData = ref({});

  const setApiData = (data) => {
    apiData.value = data.JData.FeatureList;
    console.log(apiData.value);
  }
  return { apiData, setApiData };

});