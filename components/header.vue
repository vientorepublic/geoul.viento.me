<template>
    <section class="summary">
		<h1>{{$t('summary')}}</h1>
		<p>{{$t('welcome')}}</p>
		<p> {{$t('summary_info')}} </p> <a href="mailto:op@viento.me">{{$t('contact')}}</a>
		<h1>{{$t('disclaimer')}}</h1>
		<p>{{$t('disclaimer_info_1')}}</p>
		<p>{{$t('disclaimer_info_2')}}</p>
		<p>{{$t('disclaimer_info_3')}}</p>
	</section>
</template>

<style scoped>
.summary h1 {
	padding-bottom: 0.5rem;
}
.summary h1:first-child {
	padding-top: 0;
}

.summary h1 {
	padding-top: 2.5rem;
}
</style>
