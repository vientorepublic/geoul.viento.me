<!--

  Entry Point (index)

  Viento Mirror Main Page with Vue.js, NuxtJS
  2022 doyeon kim, op@viento.me
  Frontend design: NY64, @NY64_twi
  This software is distributed under the MIT license.

  /*!
  * Vue.js v2.7.10
  * (c) 2014-2022 Evan You
  * Released under the MIT License.
  */

-->

<template>
  <div>
    <Navbar />
    <div class="app">
      <Main />
      <sidebar />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Main from "../components/main.vue";
import Footer from "../components/footer.vue";
export default {
    name: "app",
    components: { Navbar, Main, Footer },
}
</script>

<style>
@import url("//cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css");
@font-face {
  font-family: "D2Coding";
  src: url("//cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

:root {
  --background-color: #101010;
  --secondary-background-color: #303030;
  --text-color: #ffffff;
  --primary-color: rgb(42 115 160);
  --primary-color-1: rgb(58 140 191);
  --secondary-color: #202020;
}

body {
  margin: 0;
  padding: 0;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
}
.app {
  display: flex;
  font-weight: 500;
  max-width: 1250px;
  margin: 0 auto;
}
.app a {
  color: var(--primary-color);
}
::-webkit-scrollbar {
  width: 7px;
  height: 3.5px;
}
::-webkit-scrollbar-thumb {
  background: rgba(221, 221, 221, 0.5);
  border-radius: 20px;
}
@media (max-width: 991px) {
  .app {
    flex-direction: column;
  }

  .app .column-side {
    margin-top: -2.5rem;
  }

  .navbar .logo {
    font-size: 1.4rem;
  }
  .app section {
    width: auto !important;
  }
}
@media (max-width: 767px) {
  .Figure__number {
    font-size: 0.1rem;
  }
  .Figure__caption {
    font-size: 0.1rem;
  }
  .Figure__caption__text {
    font-size: 1rem;
  }
  .Figure__caption__icon {
    width: 0.8rem;
    height: 0.8rem;
  }
}
@media (min-width: 1200px) {
  .Figure {
    margin: 1rem 3rem;
  }
}
footer {
  display: block;
}
::selection {
  background: #295a85;
}
</style>
