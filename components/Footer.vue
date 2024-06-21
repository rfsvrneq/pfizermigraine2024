<script setup></script>

<template lang="pug">
footer.text-sm.bg-custom-grey-500
  ul
    li
      a(href='https://www.commonhealth.com.tw/' target='_blank') &#x5EB7;&#x5065;&#x5B98;&#x7DB2;
    li
      a(href='https://www.commonhealth.com.tw/' target='_blank') &#x5EB7;&#x5065;&#x96DC;&#x8A8C;
    li
      a(href='https://www.commonhealth.com.tw/book/index.action' target='_blank') &#x5EB7;&#x5065;&#x51FA;&#x7248;
    li
      a(href='https://www.youtube.com/user/CommonHealthTV' target='_blank') &#x5EB7;&#x5065;&#x5F71;&#x97F3;
    li
      a(href='https://kb.commonhealth.com.tw/' target='_blank') &#x5EB7;&#x5065;&#x77E5;&#x8B58;&#x5EAB;
    li
      a(href='https://club.commonhealth.com.tw/' target='_blank') &#x5927;&#x4EBA;&#x793E;&#x5718;
    li
      a(href='https://cancer.commonhealth.com.tw/' target='_blank') &#x764C;&#x75C7;&#x554F;&#x5EB7;&#x5065;
  p Copyright &copy; 2024 &#x5EB7;&#x5065;&#x96DC;&#x8A8C;&#xFF08;&#x5929;&#x4E0B;&#x751F;&#x6D3B;&#x51FA;&#x7248;&#x80A1;&#x4EFD;&#x6709;&#x9650;&#x516C;&#x53F8;&#xFF09;All rights reserved.
  ul
    li
      a(href='https://www.commonhealth.com.tw/privacy_policy' target='_blank') &#x96B1;&#x79C1;&#x6B0A;&#x653F;&#x7B56;
    li
      a(href='https://www.commonhealth.com.tw/member/service_policy' target='_blank') &#x6703;&#x54E1;&#x670D;&#x52D9;&#x689D;&#x6B3E;


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