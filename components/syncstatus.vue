<template>
  <div class="Packages__figures">
    <figure class="Figure">
      <code class="Figure__number">
        <p v-if="$fetchState.pending">-</p>
        <p v-else-if="$fetchState.error">-</p>
        <div v-else>
          {{ data["active"] }}
        </div>
      </code>
      <figcaption class="Figure__caption">
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="Figure__caption__icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30 1.56262L11.8628 19.6998L0 7.83705L1.26971 6.56734L11.8628 17.1604L28.7303 0.292908L30 1.56262Z"
            fill="#27AE60"
          ></path>
        </svg>
        <span class="Figure__caption__text"> Active </span>
      </figcaption>
    </figure>
    <figure class="Figure">
      <code class="Figure__number">
        <p v-if="$fetchState.pending">-</p>
        <p v-else-if="$fetchState.error">-</p>
        <div v-else>
          {{ data["syncing"] }}
        </div>
      </code>
      <figcaption class="Figure__caption">
        <svg
          width="34"
          height="30"
          viewBox="0 0 34 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="Figure__caption__icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.57558 10.7668C4.40699 4.5434 10.1716 0 17.0003 0C23.4767 0 28.996 4.08668 31.1106 9.81734C31.3018 10.3355 30.9955 10.8932 30.4657 11.0491V11.0491C29.9359 11.205 29.3836 10.9 29.1871 10.3838C27.3207 5.48326 22.568 2 17.0003 2C11.08 2 6.08127 5.9384 4.49423 11.3314C4.33832 11.8612 3.78242 12.1643 3.2526 12.0084C2.72278 11.8525 2.41967 11.2966 2.57558 10.7668ZM33.3354 10.9413C33.8558 11.1265 34.1275 11.6983 33.9424 12.2187L32.6897 15.7401C32.5823 16.042 32.3368 16.2741 32.0295 16.3644C31.7221 16.4547 31.3901 16.3923 31.1365 16.1966L28.1742 13.9102C27.737 13.5728 27.6561 12.9448 27.9935 12.5076C28.331 12.0704 28.959 11.9895 29.3962 12.327L31.2673 13.7712L32.0581 11.5483C32.2432 11.028 32.8151 10.7562 33.3354 10.9413ZM1.97107 13.6356C2.27842 13.5453 2.61044 13.6077 2.86404 13.8034L5.82638 16.0898C6.26359 16.4272 6.34446 17.0552 6.00702 17.4924C5.66957 17.9296 5.04159 18.0105 4.60439 17.673L2.73321 16.2288L1.94243 18.4517C1.75732 18.972 1.18544 19.2438 0.665099 19.0587C0.14476 18.8735 -0.126995 18.3017 0.0581161 17.7813L1.31089 14.2599C1.41826 13.958 1.66373 13.7259 1.97107 13.6356ZM30.7749 17.8712C31.3059 18.0231 31.6133 18.5766 31.4614 19.1076L31.4523 19.1396L31.451 19.1438L31.426 19.2301L31.425 19.2332C29.5936 25.4566 23.829 30 17.0003 30C10.5239 30 5.00464 25.9133 2.89006 20.1827C2.69887 19.6645 3.00509 19.1068 3.53491 18.9509V18.9509C4.06473 18.795 4.61699 19.1 4.81356 19.6162C6.67995 24.5167 11.4326 28 17.0003 28C22.92 28 27.9183 24.0624 29.5059 18.6703L29.5064 18.6686L29.5293 18.5897L29.5306 18.5855L29.5385 18.5577C29.6904 18.0267 30.2439 17.7194 30.7749 17.8712Z"
            fill="#6C4FE3"
          ></path>
        </svg>
        <span class="Figure__caption__text"> Syncing </span>
      </figcaption>
    </figure>
    <figure class="Figure">
      <code class="Figure__number">
        <p v-if="$fetchState.pending">-</p>
        <p v-else-if="$fetchState.error">-</p>
        <div v-else>
          {{ data["failed"] }}
        </div>
      </code>
      <figcaption class="Figure__caption">
        <svg
          width="30"
          height="31"
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="Figure__caption__icon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5576 15.2929L0 1.73527L1.44238 0.292893L15 13.8505L28.5576 0.292893L30 1.73527L16.4424 15.2929L30 28.8505L28.5576 30.2929L15 16.7353L1.44238 30.2929L0 28.8505L13.5576 15.2929Z"
            fill="#EC5252"
          ></path>
        </svg>
        <span class="Figure__caption__text"> Failed </span>
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.Packages__figures {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 20px;
  margin-bottom: 20px;
}

.Figure {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0;
  font-weight: 300;
}

.Figure__number {
  color: white;
  font-size: 4.5rem;
  margin: 0;
}

.Figure__caption {
  font-size: 1.5rem;
  text-transform: uppercase;
}

.Figure__caption__text {
    vertical-align: middle;
}
</style>

<script>
export default {
	data() {
		return {
			data: []
		};
	},
	async fetch() {
		this.data = await this.$axios.get(`${this.$config.BASE_URL}${this.$config.DB_PATH}`).then(res =>
			this.data = res.data
		)
	},
	fetchOnServer: false,
}
</script>
