# 會員直播活動網頁

### vue版本
vue 3.3.4
nuxt 3.7.4
1.先安裝：npx nuxi@latest init sitename
2.換版本：npm i nuxt@3.7.4

### node版本
v18.0.0

### npm版本
v8.6.0

### 初始化  
npm install

### 運行
npm run dev

### 部署
npm run generate
npm run generate:dev
安裝套件：npm install dotenv

### 自動載入環境變數與配置
.env.dve / .env.local / .env.prod
package.json 對應 scripts.js 讀取設定檔

### 文章API
1. 文章用部落格的方式引入，需去除連結自帶參數：:href="article.LinkUrl.replace('?FeatureID=2809','')
2. export useApiStore，解構賦值，在組件中調用
  const store = useApiStore();
  const imgArray = ref(store.apiData_3.Data.find(
    e => e.TypeCode == '05'
  ).Data)

### utmftag
1. 引入外部前端連結
2. a 加上 data-autoutm

### 說明







