<!--<template>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-lg-5">
                <nuxt-link to="/" class="navbar-brand">Viento Mirror</nuxt-link>
                <a
  href="#"
  v-for="locale in availableLocales"
  :key="locale.code"
  @click.prevent.stop="$i18n.setLocale(locale.code)">{{ locale.name }}</a>
            </div>
        </nav>
</template>-->
<template>
    <nav class="navbar">
			<div class="logo">
				<a href="#!">
					<i class="fa-solid fa-copy"></i>
					<span class="logo-text">Viento Mirror</span>
				</a>
			</div>

			<ul class="language-option">
				<a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="$i18n.setLocale(locale.code)">{{ locale.name }}</a>
			</ul>
		</nav>
</template>

<script>
export default {
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    }
}
</script>

<style scoped>
.navbar a {
	text-decoration: none;
	color: var(--text-color);
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;

	margin: 1rem 2rem;
}

.navbar .logo {
	font-size: 1.7rem;
	font-weight: 200;
}

.navbar .logo-text {
	margin-left: 0.5rem;
}

.navbar .language-option-btn {
	font-size: 1rem;
	font-weight: 500;
	background: none;
	color: var(--primary-color);
	border: none;
	cursor: pointer;
}
</style>