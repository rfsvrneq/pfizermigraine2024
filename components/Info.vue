<script setup></script>

<template lang="pug">
div#info
  .container

    //- 直播日期
    h4.flex.justify-center.items-center.flex-col(class="sm:flex-row")
      span.font-spartan.text-4xl.font-semibold.text-primary-rebrown-900.-mb-1 2024/05/29
      .mx-1.flex.items-center.my-2
        span.text-white.text-xl.bg-primary-orange.rounded-full.px-1.mr-1 三
        span.font-spartan.text-2xl.text-primary-orange.-mb-2 12:00～14:00
      span.text-4xl.font-bold.text-primary-rebrown-900 線上直播
    
    
    //- 報名按鈕
    .join-btns.flex.justify-between.my-12.flex-col(class="md:flex-row")
      a.join-btn(href="http://", target="_blank", rel="noopener noreferrer")
        span.text-2xl.tracking-widest.font-semibold.text-white 我要報名
        span.text-2xl.tracking-widest.font-semibold.text-white 單場直播
        span.rounded-btn.mt-3
          span.text-shadow $
          span.text-3xl.font-semibold.text-shadow 890
          sapn.text-shadow 元
          img(src="/assets/img/arrow-icon.svg", alt="報名按鈕").absolute.-bottom-1.-right-3

      a.join-btn.mx-0.my-5(class="md:mx-5 md:my-0")(href="http://", target="_blank", rel="noopener noreferrer")
        span.text-2xl.tracking-widest.font-semibold.text-white 我是訂戶
        span.text-2xl.tracking-widest.font-semibold.text-white 直接報名
        span.rounded-btn.mt-3.min-w-32.inline-block
          span.text-shadow $
          span.text-3xl.font-semibold.text-shadow 0
          sapn.text-shadow 元
          img(src="/assets/img/arrow-icon.svg", alt="報名按鈕").absolute.-bottom-1.-right-3

      a.join-btn.flex-1(href="http://", target="_blank", rel="noopener noreferrer")
        span.text-2xl.tracking-widest.font-semibold.text-white 訂閱月刊
        span.text-2xl.tracking-widest.font-semibold.text-white 成為訂戶
        .flex
          .flex.flex-col.mr-4
            span.rounded-btn.mt-3
              span.text-shadow $
              span.text-3xl.font-semibold.text-shadow 1,490
              sapn.text-shadow 元
              img(src="/assets/img/arrow-icon.svg", alt="報名按鈕").absolute.-bottom-1.-right-3
            p.text-white.text-sm.mt-2 ※1年期紙本月刊
          .flex.flex-col
            span.rounded-btn.mt-3
              span.text-shadow $
              span.text-3xl.font-semibold.text-shadow 890
              sapn.text-shadow 元
              img(src="/assets/img/arrow-icon.svg", alt="報名按鈕").absolute.-bottom-1.-right-3
            p.text-white.text-sm.mt-2 ※1年期電子月刊


    //- 直播資訊 cms
    h2.ttl
      | 直播資訊
      span ─&ensp;Information&ensp;─
    section.info-text
      h3 專為投資人打造的退休趨勢論壇
      p 通膨高漲、降息時程擺盪⋯⋯在種種不穩 定的市場環境下，
      p 通膨高漲、降息時程擺盪⋯⋯在種種不穩 定的市場環境下，
      p 通膨高漲、降息時程擺盪⋯⋯在種種不穩 定的市場環境下，
      p 通膨高漲、降息時程擺盪⋯⋯在種種不穩 定的市場環境下，
      p 通膨高漲、降息時程擺盪⋯⋯在種種不穩 定的市場環境下，
      p 通膨高漲、降息時程擺盪⋯⋯在種種不穩 定的市場環境下，
      p 如何規畫投資，才可以提早達到財富自由境界，安心退休呢？


</template>

<style scoped lang="sass">
#info
  background: url(/assets/img/info-bg.png)

.join-btn
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background: url(/assets/img/ligt.png) 
  background-color: #8C6239
  background-size: cover
  padding: 2rem 1rem
  border-image: linear-gradient(to left, #E9A42D, #FFDC8F, #E38E06) 3 / 3px
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.19)
  min-width: 27%

.info-text
  position: relative
  &::before, &::after
    content: ""
    width: 120px
    height: 220px
    position: absolute
    background: url(/assets/img/volume-icon.svg)
    background-size: cover
    top: calc( 50% - 110px )
  &::before
    right: -140px
    @media screen and (max-width: 1024px)
      width: calc(120px / 4)
      height: calc(220px / 4)
      top: -30px
      right: -40px
  &::after
    left: -140px
    transform: scaleX(-1)
    @media screen and (max-width: 1024px)
      display: none
  
</style>
