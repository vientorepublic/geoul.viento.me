<template>
    <section class="noti">
		<p>{{$t('new_ver')}}</p>
	</section>
</template>

<style scoped>
.noti {
	background-color: var(--primary-color);
	padding: 1rem 2rem;
}
.noti p {
	margin: 0.5rem auto;
}
.noti a {
	color: var(--text-color);
	text-decoration: none;
}
</style>
