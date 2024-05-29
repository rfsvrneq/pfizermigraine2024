<template lang="pug">
div
  .tabs
    div.click_event(v-for='(tab, index) in tabs' :key='index' @click='changeTab(tab.title)' :class="{ 'active': activeTab === tab.title }", data-title="pfizermigraine2024", :data-label="tab.label")
      | {{ tab.title }}
  .tab-content
    slot(:name='activeTab')

</template>

<script setup>
import { ref } from 'vue';

// const tabs = ref(['迷思破解QA', '偏頭痛成因', '台灣現況']);
const tabs = ref([
  {
    title: '迷思破解QA',
    label: 'click-pfizer-migraine-misunderstanding',
  },
  {
    title: '偏頭痛成因',
    label: 'click-pfizer-migraine-cause',
  },
  {
    title: '台灣現況',
    label: 'click-pfizer-migraine-prevalenceofmigraineinTaiwan',
  }
]);

const activeTab = ref(tabs.value[0].title);

const changeTab = (tabName) => {
  activeTab.value = tabName;
}
</script>

<style lang="sass">
.tabs
  display: flex
  justify-content: space-between
  @apply font-zen text-white
  div
    @apply bg-custom-grey-500
    margin: 0 .1rem
    padding: .5rem 0
    font-size: 1.4rem
    font-weight: bold
    width: 100%
    text-align: center
    border-top-left-radius: 1rem
    border-top-right-radius: 1rem
    cursor: pointer
    @media screen and (max-width: 768px)
      font-size: 1.2rem
    &.active
      @apply bg-custom-green text-custom-blue

.tab-content
  background-color: white
  padding: 2rem
  border-bottom-left-radius: 1rem
  border-bottom-right-radius: 1rem

</style>
