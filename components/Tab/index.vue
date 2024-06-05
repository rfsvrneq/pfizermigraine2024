<script setup>
import Tabs from '@/components/Tab/Tabs.vue';

// 動態圖片載入
const getImageUrl = name => {
  const assets = import.meta.glob('~/assets/img/icons/*', { eager: true, import: 'default' });
  return assets[`/assets/img/icons/${name}`];
};

const tab2s = [
  {
    imgSrc: 'tab2-1.svg',
    title: '壓力⁷',
    content: '長期的情緒壓力或壓力性事件，如工作壓力、家庭矛盾或情感問題，都可能觸發偏頭痛發作。',
    delay: '100',
  },
  {
    imgSrc: 'tab2-2.svg',
    title: '特定食物⁷',
    content: '某些食物或飲料可能成為偏頭痛的觸發因素，如巧克力、咖啡因、乳製品、酒精、某些添加劑或防腐劑等。',
    delay: '200',
  },
  {
    imgSrc: 'tab2-3.svg',
    title: '過度使用藥物⁸',
    content: '長期或過量使用止痛藥或特定的藥物，如阿司匹林、布洛芬等，可能導致偏頭痛的增加頻率或嚴重程度。',
    delay: '300',
  },
  {
    imgSrc: 'tab2-4.svg',
    title: '睡眠不佳⁷',
    content: '',
    delay: '400',
  },
  {
    imgSrc: 'tab2-5.svg',
    title: '三叉神經血管過度敏感¹',
    content: '此理論認為疼痛的來源來自腦膜血管周邊的三叉神經末稍纖維，當這些神經纖維被活化後，會造成局部的神經性發炎，使得疼痛神經的末梢被更進一步的活化，三叉神經會釋放神經傳導物質讓疼痛訊息傳遞給大腦，其中CGRP又名抑鈣素相關基因胜肽，便是引發頭痛很重要的發炎物質。偏頭痛相關誘因會促使CGRP釋放、刺激三叉神經末梢，將訊號傳至腦幹、下視丘、視丘到頂葉而產生疼痛及相關症狀。',
    delay: '500',
  },
]
</script>

<template lang="pug">
div#tab(class="imp_event" data-title="pfizermigraine2024" data-label="imp_section-pfizer-migraine-about")
  .container
    h2.ttl 
      span 關
      span 於
      span 我
      span 和
      span.icon-l 偏
      span 頭
      span.icon-r 痛
      span 的
      span 那
      span 件
      span 事
    
    p.content-p.text-center.max-w-3xl.mx-auto.mb-8 偏頭痛是一種複雜的疾病，更常常被許多錯誤觀念所淹沒，這些迷思不僅影響了患者對自身病情的認識，也可能導致不正確的治療方案和生活方式。

    Tabs
      template(v-slot:迷思破解QA)
        div
          //- 1
          div(data-aos="fade-down" data-aos-delay="100")
            p.text-2xl.font-bold.text-custom-blue.mb-2
              span.text-custom-green.font-zen.pr-1 Q1.
              | 什麼是偏頭痛？³
            .flex.p-0.items-start(class="md:p-4 md:flex-row")
              img.w-20.my-5(class="md:w-36" src="/assets/img/icons/tab1-1.svg")
              .content.text-xl.text-custom-grey-800.px-0.pl-4.text-justify(class="md:px-8")
                p 偏頭痛是一種影響大腦、脊髓和身體其他部位神經的疾病，會導致頭部一側或雙側劇烈疼痛。發作時通常包括噁心、嘔吐、對光或聲音敏感等症狀。
                p.text-custom-blue.font-bold.my-2 迷思：偏一邊頭痛才是偏頭痛？³
                p 許多人一般認為只有在頭部的一側出現頭痛時才能稱之為「偏頭痛」，然而事實上，偏頭痛並非必然為單側頭痛，有時可能會出現雙側頭痛的情況。
          
          //- 2
          div(data-aos="fade-down" data-aos-delay="200")
            p.text-2xl.font-bold.text-custom-blue.mb-2.mt-8(class="lg:mt-0")
              span.text-custom-green.font-zen.pr-1 Q2.
              | 男性和女性受到的影響相同嗎？⁴
            .flex.p-0.items-start(class="md:p-4 md:flex-row")
              img.w-20.my-5(class="md:w-36" src="/assets/img/icons/tab1-2.svg")
              .content.text-xl.text-custom-grey-800.px-0.pl-4.text-justify(class="md:px-8")
                p 整體而言，女性比男性更容易得到偏頭痛，比率約為3：1。雖然原因不清楚，但可能和女性荷爾蒙有關。

          //- 3
          div(data-aos="fade-down" data-aos-delay="300")
            p.text-2xl.font-bold.text-custom-blue.mb-2.mt-8(class="lg:mt-0")
              span.text-custom-green.font-zen.pr-1 Q3.
              | 偏頭痛會遺傳嗎？¹
            .flex.p-0.items-start(class="md:p-4 md:flex-row")
              img.w-20.my-5(class="md:w-36" src="/assets/img/icons/tab1-3.svg")
              .content.text-xl.text-custom-grey-800.px-0.pl-4.text-justify(class="md:px-8")
                p 是的，偏頭痛可能會有遺傳因素。研究顯示，如果一個人的父母其中一方或雙方都有偏頭痛，那麼他們患上偏頭痛的風險就會增加。然而，偏頭痛的遺傳方式並不完全清楚，並且可能受到其他環境和生活方式因素的影響。

          //- 4
          div(data-aos="fade-down" data-aos-delay="400")
            p.text-2xl.font-bold.text-custom-blue.mb-2.mt-8(class="lg:mt-0")
              span.text-custom-green.font-zen.pr-1 Q4.
              | 在我的一生中，偏頭痛的頻率和嚴重程度會改變嗎？⁵
            .flex.p-0.items-start(class="md:p-4 md:flex-row")
              img.w-20.my-5(class="md:w-36" src="/assets/img/icons/tab1-4.svg")
              .content.text-xl.text-custom-grey-800.px-0.pl-4.text-justify(class="md:px-8")
                p 20 到 60 歲是偏頭痛盛行率的最高峰，幼童和老人發生偏頭痛的比例較低。
                p 孩童時期的偏頭痛，一般而言比較輕微，也較容易有一些特殊症狀，例如腹痛、反覆嘔吐等，有時甚至沒有明顯的頭痛，導致診斷不易。
                p 老年期的偏頭痛，特別是女性停經以後，一般而言發作頻率會下降。

          //- 5
          div(data-aos="fade-down" data-aos-delay="500")
            p.text-2xl.font-bold.text-custom-blue.mb-2.mt-8(class="lg:mt-0")
              span.text-custom-green.font-zen.pr-1 Q5.
              | 我需要神經科醫師的正式診斷證明才能接受偏頭痛治療嗎？
            .flex.p-0.items-start(class="md:p-4 md:flex-row")
              img.w-20.my-5(class="md:w-36" src="/assets/img/icons/tab1-5.svg")
              .content.text-xl.text-custom-grey-800.px-0.pl-4.text-justify(class="md:px-8")
                p 通常情況下，接受偏頭痛治療並不一定需要神經科醫師的正式診斷證明。然而，對於一些特定情況，如複雜的病史或症狀，或者需要進一步評估的情況，可能需要神經科醫師的專業意見，因為偏頭痛的症狀可能與中風、癲癇或其他疾病的症狀相似。建議您與您的醫療提供者討論您的症狀和治療選項，並確定最適合您的治療計劃。

          //- 6
          div(data-aos="fade-down" data-aos-delay="600")
            p.text-2xl.font-bold.text-custom-blue.mb-2.mt-8(class="lg:mt-0")
              span.text-custom-green.font-zen.pr-1 Q6.
              | 偏頭痛可以使用止痛藥治療嗎？⁶
            .flex.p-0.items-start(class="md:p-4 md:flex-row")
              img.w-20.my-5(class="md:w-36" src="/assets/img/icons/tab1-6.svg")
              .content.text-xl.text-custom-grey-800.px-0.pl-4.text-justify(class="md:px-8")
                p 許多人在出現偏頭痛發作時會使用非處方的止痛藥，如布洛芬、阿司匹林或鎮痛劑，來緩解疼痛。但隨著時間一久會漸漸發現，藥效好像不夠了，需要增加到兩顆、三顆藥才能止住頭痛，而且頭痛越來越頻繁⁶。因此常常使用止痛藥是治標不治本的方式，有可能誘發藥物濫用之頭痛，且止痛藥吃多了也可能傷身體，因此止痛藥並不能完全控制偏頭痛，可能需要其他治療方法，如服用偏頭痛專一性止痛藥物，CGRP 的血中濃度會降低，偏頭痛也同步改善⁶。另外生活方式調整或規律的運動也有助於減輕偏頭痛的症狀⁷。建議在使用任何治療前，諮詢您的專科醫師以獲得最適合您的建議。

      template(v-slot:偏頭痛成因)
        .flex.flex-nowrap.flex-col.justify-around(class="sm:flex-row sm:flex-wrap")
          div.text-center.mb-10(v-for="(tab2, index) in tab2s" :key="index" class="w-12/12 sm:w-6/12 lg:w-4/12" data-aos="fade-down" :data-aos-delay="tab2.delay")
            img.mx-auto(:src="getImageUrl(tab2.imgSrc)" :alt="tab2.title")
            p.bg-custom-blue.text-white.inline-block.px-4.py-1.text-2xl.rounded-full.my-4 {{ tab2.title }}
            p.text-xl.text-custom-grey-800.text-justify.px-5 {{ tab2.content }}

      template(v-slot:台灣現況)
        div.grid.grid-cols-1.gap-8(class="lg:grid-cols-2")
          img.mx-auto(src="/assets/img/icons/tab3-1.png" data-aos="fade-down" data-aos-delay="100")
          img.mx-auto(src="/assets/img/icons/tab3-2.png" data-aos="fade-down" data-aos-delay="200")
          img.mx-auto(src="/assets/img/icons/tab3-3.png" data-aos="fade-down" data-aos-delay="300")
          img.mx-auto(src="/assets/img/icons/tab3-4.png" data-aos="fade-down" data-aos-delay="400")

</template>

<style scoped>
</style>
