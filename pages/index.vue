<!--

  Viento Mirror Main Page with Vue.js, NuxtJS
  2022 doyeon kim, op@viento.me

-->

<template>
  <div>
    <Navbar/>
    <div class="app">
      <Main/>
      <sidebar/>
      </div>
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Main from "../components/main.vue";
export default {
    name: "app",
    components: { Navbar, Main },
}
</script>

<style>
  @import url("//cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard-dynamic-subset.css");
  @font-face {
	font-family: "D2Coding";
	src: url("//cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff") format("woff");
	font-weight: normal;
	font-style: normal;
}

:root {
	--background-color: #101010;
	--secondary-background-color: #303030;
	--text-color: #ffffff;
	--primary-color: rgb(42, 160, 125);
	--secondary-color: #202020;
}

body {
	margin: 0;
	padding: 0;
	font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
		"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
	background-color: var(--background-color);
	color: var(--text-color);
}
.app {
	display: flex;
	font-weight: 500;
	max-width: 1250px;
	margin: 0 auto;
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
}
</style>
