<script setup>
  const nav = [
    {
      title: '關於我和偏頭痛的那件事',
      active: false,
      type: '#tab'
    },
    {
      title: '如何舒緩及解決偏頭痛問題 ',
      active: false,
      type: '#who'
    },
    {
      title: '偏頭痛自我診斷指南',
      active: false,
      type: '#card'
    },
    {
      title: '精選文章',
      active: false,
      type: '#slide'
    },
  ]
  
let burgerTrigger = ref(false);
let isActive = ref('');

// 點擊導覽列移動
const moveTo = (ta) => {
    const offset = 0;
    const target = document.querySelector(ta);
    if (target) {
      const targetOffset = target.offsetTop - 30 - offset;
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
      burgerTrigger.value = false;
      isActive.value = ta;
    }
  };

</script>

<template lang="pug">
div#topbar.w-full.fixed.top-0.left-0.h-16.z-20.bg-white.shadow-lg
  
  nav.flex.justify-between.items-center.h-full.container.max-w-6xl.py-0
    
    //- logo
    a.w-24.block(href="https://www.commonhealth.com.tw/", target="_blank") 
      img.w-full(src="/assets/img/logo.png", alt="康健雜誌")

    //- 漢堡
    a.burger-trigger(href="#", :class="{ 'active': burgerTrigger == true }", @click.prevent="burgerTrigger = !burgerTrigger")
      span.first
      span.middle
      span.last
    
    //-導覽列
    .nav-wrap(:class="{ 'active': burgerTrigger == true }")
      //-選單
      .nav
        .item
          a.text-white.text-lg.ml-0(class="md:ml-5")(v-for=`(nav, index) in nav`, :href=`nav.type`, :class=`{ 'active': isActive == nav.type, 'first-border': index === 0 }`, @click.prevent=`moveTo(nav.type)`) {{nav.title}}
</template>

<style scoped lang="sass">

$nav-item-a: #292621 !default
$nav-item-a-hover: #264964 !default
$nav-wrap-bg: #F1F1EB !default
$burger: #264964 !default
$nav-wrap-bg-mobile: #C3DCD9 !default
$nav-item-a-mobile: #292621 !default
$nav-item-a-hover-mobile: white !default


#topbar
  .item
    a
      color: $nav-item-a
      &:hover
        color: $nav-item-a-hover

  
  //-行動裝置漢堡與導覽列
  @media screen and (max-width: 1024px)
    padding-right: 15px

    //漢堡
    .burger-trigger
      z-index: 999
      display: flex
      justify-content: center
      align-items: center
      flex-wrap: wrap
      width: 40px
      height: 40px
      outline: 0
      &, & span
        transition: .2s
        backface-visibility: hidden
        transform-style: preserve-3d
      span
        position: relative
        display: block
        width: 100%
        height: 2px
        background: $burger

      //open
      &.active
        .first, .last
          background: $burger
        .middle
          opacity: 0
        .first
          top: 13px
          transform: rotate(45deg)
        .last
          bottom: 13px
          transform: rotate(135deg)

    //-導覽列
    .nav-wrap
      z-index: 99
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      overflow: hidden
      opacity: 0
      transform-origin: right top
      transform: translateY(-100%)
      transition: transform .4s ease, opacity .4s ease
      background-color: $nav-wrap-bg-mobile

      // open
      &.active
        opacity: 1
        transform: translateY(0)

      //-選單
      .nav
        z-index: 99
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
      .item
        width: 100%
        a
          display: block
          text-align: center
          width: 100%
          font-size: 1.35rem
          margin-bottom: 1rem
          margin-left: 0
          padding-top: .5rem
          padding-bottom: .5rem
          transition: color .3s ease
          color: $nav-item-a-mobile
          &:hover
            background: $nav-item-a-hover-mobile
            transition: color .3s ease

  //-mobile
  @media screen and (max-width: 540px)
    //漢堡
    .burger-trigger
      width: 30px
      height: 30px
      //open
      &.active
        .first
          top: 10px
        .last
          bottom: 10px

</style>
