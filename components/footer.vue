<template>
    <footer class="Footer"  >
  <div class="Footer__content" >
    <span class="Footer__title">Viento Mirror, non-profit free software mirroring service.</span><br/>
    <div class="Footer__location" >
      <span>대한민국에서 ❤️을 담아, <a href="https://twitter.com/vientokorea">@vientokorea</a>. Cookies are used to save language settings.</span>
    </div><br/>
    <span>Server time follows UTC +09:00.</span>
  </div>
</footer>
</template>

<style scoped>
.Footer {
    margin-top: 50px;
    border-top: 30px solid #eaeaea;
    border-top: 30px solid var(--secondary-background-color);
    background: #f4f4f4;
    background: var(--background-color);
    padding: 50px 30px;
}
.Footer__title {
  font-weight: bold;
}
a {
	color: var(--primary-color);
}
.Footer__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;
}
</style>
