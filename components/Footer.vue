<script setup></script>

<template lang="pug">
div.text-sm.bg-custom-grey-500
  #commonhealth_footer
    .commonhealth_footer-channel
      ul
        li
          a(href='https://www.commonhealth.com.tw/' target='_blank') 康健官網
        li
          a(href='https://www.commonhealth.com.tw/' target='_blank') 康健雜誌
        li
          a(href='https://www.commonhealth.com.tw/book/index.action' target='_blank') 康健出版
        li
          a(href='https://www.youtube.com/user/CommonHealthTV' target='_blank') 康健影音
        li
          a(href='https://line.me/ti/p/@commonhealth' target='_blank') 康健LINE
        br
        li
          a(href='https://www.facebook.com/commonhealth/' target='_blank') 康健FB
        li
          a(href='https://kb.commonhealth.com.tw/' target='_blank') 康健知識庫
        li
          a(href='https://club.commonhealth.com.tw/' target='_blank') 大人社團
        li
          a(href='https://lohas.commonhealth.com.tw/' target='_blank') 樂活島
    .commonhealth_footer-copyright
      | Copyright © 2024 康健雜誌. All rights reserved. 
      br
      | 本網站內容受著作權保護，詳細請閱讀
      a(href='https://www.commonhealth.com.tw/copyright ' target='_blank') 著作權聲明
    
</template>

<style scoped lang="sass">
#commonhealth_footer
  text-align: center
  padding: 25px 0

.commonhealth_footer-channel
  width: 100%
  font-size: 0.9375rem
  font-size: 15px
  line-height: 1
  text-align: center
  margin-bottom: 5px
  ul
    margin: 0
    padding: 0
  li
    display: inline-block
    border-right: 1px solid #264964
    padding-right: 12px
    margin-right: 10px
    margin-bottom: 10px
    a
      color: #264964
      text-decoration: none
      position: relative
      &:after
        content: ""
        background-color: #264964
        width: 0
        height: 1px
        position: absolute
        left: 50%
        bottom: -3px
        display: inline-block
        transition: .3s
      &:hover:after
        width: 100%
        left: 0
    &:last-child
      border: none
      margin-right: 0
      padding-right: 0
  a:hover
    color: #264964

.commonhealth_footer-copyright
  color: #264964
  font-size: 0.875rem
  font-size: 14px
  text-align: center
  a
    display: inline-block
    border-bottom: 1px dotted white
    padding-bottom: 1px

.commonhealth_footer-channel br, .commonhealth_footer-copyright br
  display: none

.uiGuideline-boxs
  min-height: 80vh

@media (max-width: 768px)
  .commonhealth_footer-channel
    font-size: 0.875rem
    font-size: 14px
    li
      padding-right: 5px
      margin-right: 3px

      &:nth-child(5)
        border-right: 0
        padding-right: 0
        margin-right: 0
  .commonhealth_footer-copyright
    font-size: 0.8125rem
    font-size: 13px
    line-height: 1.5
  .commonhealth_footer-channel br, .commonhealth_footer-copyright br
    display: inline-block
  /*Lite
  .commonhealth_footer-channel.lite li:nth-child(4)
    border-right: 0
    padding-right: 0
    margin-right: 0
@media (max-width: 320px)
  .commonhealth_footer-channel, .commonhealth_footer-copyright
    font-size: 0.75rem
    font-size: 12px
</style>