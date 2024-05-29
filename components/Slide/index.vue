<script setup>
const slides = [
  {
    url: 'https://www.commonhealth.com.tw/article/83712',
    imgSrc:'https://as.chdev.tw/web/article/8/3/4/8f8c4de5-3005-4ab4-ab37-02f3a1da57c91614138653.jpg',
    title: '8個原因容易引起偏頭痛，發作前常見症狀一次看',
    label: 'click-pfizer-migraine-article-83712',
  },
  {
    url: 'https://www.commonhealth.com.tw/article/85990',
    imgSrc:'https://as.chdev.tw/web/article/2/5/4/2b289ff2-5dbb-4824-8b9c-06909d5e8dfb1648027086.jpg',
    title: '偏頭痛症狀、原因是什麼？緩解偏頭痛穴道、治療一次看',
    label: 'click-pfizer-migraine-article-85990',
  },
  {
    url: 'https://www.commonhealth.com.tw/blog/5203',
    imgSrc:'https://cw1.tw/CH/images/channel_master/7d17dbe9-2b7f-4a36-a7d8-f891756e78d5.jpg',
    title: '烤熟的鴨子飛了──談偏頭痛',
    label: 'click-pfizer-migraine-article-5203',
  },
  {
    url: 'https://www.commonhealth.com.tw/article/67624',
    imgSrc:'https://as.chdev.tw/web/article/9/5/4/9d956ba3-5a4d-4fb8-ad1b-217cfe1ece6b1624001248.jpg',
    title: '再見了！偏頭痛',
    label: 'click-pfizer-migraine-article-67624',
  },
  {
    url: 'https://www.commonhealth.com.tw/article/74510',
    imgSrc:'https://cw1.tw/CH/images/channel_master/3492114a-35a2-4cb6-88dd-ac1878aaf0fd.jpg',
    title: '7對策，擊退頭痛、偏頭痛',
    label: 'click-pfizer-migraine-article-74510',
  },
  {
    url: 'https://www.commonhealth.com.tw/article/65393',
    imgSrc:'https://cw1.tw/CH/images/channel_master/a83de4fa-b551-416c-a35c-74ce98ed23f1.jpg',
    title: '常常偏頭痛？不妨試試運動',
    label: 'click-pfizer-migraine-article-65393',
  },
  {
    url: 'https://www.commonhealth.com.tw/article/75433',
    imgSrc:'https://cw1.tw/CH/images/channel_master/1ed0fd13-4197-4812-b050-5a01f10414a0.jpg',
    title: '偏頭痛和其他頭痛有什麼不同？',
    label: 'click-pfizer-migraine-article-75433',
  }
];

</script>

<template>
  <div class="container max-w-6xl imp_event" id="slide" data-title="pfizermigraine2024" data-label="imp_section-pfizer-migraine-article">
    <h2 class="ttl">
      <span>精</span>
      <span>選</span>
      <span>文</span>
      <span>章</span>
    </h2>

    <!-- 輪播設定 -->
    <div class="relative px-12">
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
        :modules="[
          SwiperPagination,
          SwiperGrid,
          SwiperNavigation,
          SwiperAutoplay,
          SwiperEffectCreative
        ]"
        :grid="{
          rows: 1
        }"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
            grid: {
              rows: 1,
              fill: 'row'
            }
          },
          '768': {
            slidesPerView: 2,
            grid: {
              rows: 1,
              fill: 'row'
            }
          },
          '1024': {
            slidesPerView: 3,
            grid: {
              rows: 1,
              fill: 'row'
            }
          }
        }"
      >
        <!-- 輪播內容 -->
        <swiper-slide v-for="(slide, index) in slides" :key="slide" class="rounded-xl overflow-hidden bg-white">
          <a class="click_event" data-title="pfizermigraine2024" :data-label="slide.label" :href="slide.url" target="_blank" rel="noopener noreferrer">
            <div class="slide-img" :style="{ backgroundImage: 'url(' + slide.imgSrc + ')'}"></div>
            <p class="p-4 text-lg text-custom-blue lg:min-h-24">{{ slide.title }}</p>
          </a>
        </swiper-slide>
      </swiper>

      <!-- 輪播控制 -->
      <div class="swiper-button-prev swiper-button-prev-slide"></div>
      <div class="swiper-button-next swiper-button-next-slide"></div>
    </div>
  </div>
</template>



<style scoped>
.slide-img {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}
.swiper-button-prev:after, .swiper-button-next:after {
  @apply bg-custom-green text-white px-5 py-3 rounded-full text-xl
}
.swiper-button-prev {
  @apply left-0
}
.swiper-button-next {
  @apply right-0
}
</style>
