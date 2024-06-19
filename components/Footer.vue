<script setup></script>

<template lang="pug">
footer.text-sm.bg-custom-grey-500
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
      a(href='https://kb.commonhealth.com.tw/' target='_blank') 康健知識庫
    li
      a(href='https://club.commonhealth.com.tw/' target='_blank') 大人社團
    li
      a(href='https://lohas.commonhealth.com.tw/' target='_blank') 樂活島
  p Copyright © 2024 康健雜誌（天下生活出版股份有限公司）All rights reserved.
  ul
    li
      a(href='https://www.commonhealth.com.tw/privacy_policy' target='_blank') 隱私權政策
    li
      a(href='https://www.commonhealth.com.tw/member/service_policy' target='_blank') 會員服務條款

</template>

<style scoped>
footer {
  width: 100%;
  padding: 30px 0;
  color: #373737;
  /* background: #fff; */
}
footer a{
  transition: .3s;
  text-decoration: none;
}
footer a:hover{
  color: green;
}

footer ul {
  list-style-type: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0;
  margin: 0;
}

footer ul li {
  font-size: 15px;
  line-height: 15px;
  border-right: 1px solid #373737;
  padding: 0 10px 0 0;
  margin: 0 10px 10px 0;
}

footer ul li:last-child {
  border: none;
  padding: 0;
  margin: 0;
}

footer ul li a {
  color: #373737;
  line-height: 15px;
}

footer ul:last-child {
  margin: 0;
}

footer p {
  color: #373737;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  footer ul {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  footer ul li {
    padding: 0 5px 0 0;
    margin: 0 5px 10px 0;
  }
}
                    
</style>