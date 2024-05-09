<script setup></script>

<template lang="pug">
div#kv
  .container.pb-0

    picture
      source(media='(min-width: 769px)' srcset='/assets/img/kv-word.png')
      img.block.mx-auto.mt-20(src="/assets/img/kv-word-s.png")

    img.earth(src="/assets/img/earth.png")

    picture
      source(media='(min-width: 769px)' srcset='/assets/img/people-wrap.png')
      img.block.mx-auto.mt-8.z-10.relative(src="/assets/img/people-wrap-s.png")
    
    a.float-btn(href="https://smart.businessweekly.com.tw/ecourse/productVideo.aspx?PROD_TYPE_NO=PROD000017033", target="_blank", rel="noopener noreferrer", data-autoutm)
      img(src="/assets/img/right-btn.png")

</template>

<style scoped lang="sass">
#kv
  background: url(/assets/img/bg-bottom.png), url(/assets/img/bg-top.png), radial-gradient(ellipse, #FFD1AB, #FCC89F, #EF9F6A)
  background-position: center 70px, center top, center
  background-repeat: no-repeat
  background-size: cover
  @media screen and (max-width: 480px)
    background-position: 60% 30px, center top, center
.earth
  position: absolute
  left: -7rem
  bottom: 4.5rem
  @media screen and (max-width: 768px)
    width: 160px
    height: auto
    left: .5rem
    bottom: 10rem
.float-btn
  position: fixed
  right: .5rem
  bottom: 2rem
  z-index: 10
  @media screen and (max-width: 768px)
    width: 110px
    height: auto
    right: 0
    bottom: 1rem
</style>
