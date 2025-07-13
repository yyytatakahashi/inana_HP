<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #fff0f5;
}

#app {
  min-height: 100vh;
}

/* スムーズスクロール */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

@media (max-width: 768px) {
  html {
    scroll-padding-top: 150px;
  }
}

@media (max-width: 480px) {
  html {
    scroll-padding-top: 180px;
  }
}

/* ボタンのフォーカススタイル */
button:focus,
input:focus {
  outline: 2px solid #ec4899;
  outline-offset: 2px;
}

/* リンクのスタイル */
a {
  text-decoration: none;
  color: inherit;
}

/* スクロールバーのカスタマイズ */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #ec4899;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #db2777;
}
</style>
