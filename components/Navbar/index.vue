<script setup>
  const nav = [
    {
      title: '區塊一',
      active: false,
      type: '#info'
    },
    {
      title: '區塊二',
      active: false,
      type: '#speaker'
    },
    {
      title: '區塊三',
      active: false,
      type: '#agenda'
    },
    {
      title: '區塊四',
      active: false,
      type: '#article'
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
div#topbar.w-full.fixed.top-0.left-0.h-16.z-20.bg-slate-500
  
  nav.flex.justify-between.items-center.h-full.container.py-0
    
    //- logo
    a.w-36.block(href="https://smart.businessweekly.com.tw/", target="_blank") 
      img.w-full(src="/assets/img/icons/smart-logo.svg", alt="Smart 自學網")

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

$primary-red: #D0111B !default
$primary-rebrown-900: #775533 !default
$primary-rebrown-800: #8C6239 !default
$primary-gold: #E3C275 !default
$primary-orange: #E08A00 !default
$primary-grey: #F0EBE7 !default
$primary-blue: #004A6D !default

#topbar
  .item
    a
      &:hover
        color: $primary-orange

  
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
        background: white

      //open
      &.active
        .first, .last
          background: white
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
      background-color: $primary-rebrown-800

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
        min-width: 300px
        a
          display: block
          text-align: center
          width: 100%
          font-size: 1.35rem
          margin-bottom: 1rem
          padding-top: .5rem
          padding-bottom: .5rem
          transition: color .3s ease
          &:hover
            background: $primary-rebrown-900
            border-radius: 3rem
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
