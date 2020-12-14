# 八六蔬食吧-餐廳前端
八六蔬食吧是一間假想的蔬食主題餐廳，使用 React.js 搭配 Node.js 搭建的 SPA 網站，平台使用者主要是下列兩種身份，分別為一般消費者（Visitor）、商家管理員（Admin），一般消費者可以瀏覽菜單、註冊會員後可以直接在網站上訂位。商家管理員可以編輯菜單、管理訂位等等。
![](https://i.imgur.com/UqQe02e.jpg)
# Demo - 專案展示
[DEMO](https://awuuu0716.github.io/86408/#/)

歡迎使用管理員測試帳號登入使用，帳密如下(請不要隨意刪除菜單 QAQ，避免前台無菜單可看)：
帳號名稱：admin
密碼：admin

# Initial - 專案緣起
專案發想自 [MTR04-餐廳官網練習作業](https://github.com/Lidemy/mentor-program-4th-awuuu0716/tree/master/homeworks/week6)，在學習到 React 與後端 Node.js 後我決定試著從零開始打造一個前後端分離的 SPA 網站，讓使用者擁有像是 APP 般的使用體驗，輕鬆了解一家餐廳，並且能夠直接在網頁上訂位，無需浪費寶貴的電話費~

# Features - 專案功能
前台：
1. 菜單介紹 ( 分類 )
2. 會員註冊、登入
3. 訂位(選擇日期、查看可預約時間)、訂位查詢，需登入

後台：
1. 管理菜單 (CRUD)
2. 管理訂位(查看某日期的訂位狀況、可以編輯已取消或完成的訂位)

# Technical Skills - 使用哪些技術實作專案
1. Create React App - 快速建立專案項目環境
2. React hooks - 狀態管理與建立 UI 元件
3. React Router - 路由管理
4. styled-components - 輕鬆建立 CSS-in-JS 的 UI 元件
5. react-calendar - 訂位的日期管理 UI
6. fetch - 與後端 API 資料交換
7. React Bootstrap - 處理 Navbar 元件
8. LocalStorage - 儲存身份認證的 JWT

# Content - 專案內容
## 前台
![](https://i.imgur.com/n4TTUJc.jpg)
![](https://i.imgur.com/fzNNKVM.jpg)
![](https://i.imgur.com/9gz2Aez.jpg)
## 後台
![](https://i.imgur.com/9eLFfCW.jpg)
![](https://i.imgur.com/NTRqdpg.jpg)
![](https://i.imgur.com/2UpCNv4.jpg)

# Resource - 資料引用來源
[unsplash](https://unsplash.com/)

# Declaration - 聲明
本作品內圖片、內容等，純粹為個人練習前端使用，不做任何商業用途。

# Installing - 專案安裝流程
1. clone this repository
``` 
git clone https://github.com/awuuu0716/86408
```

2. 安裝套件
```
npm install
```

3. 在本地端開啟此專案
```
yarn start
```