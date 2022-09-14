<template>
    <div class="column column-side">
				<section class="server-address">
					<h1>{{$t('address')}}</h1>
					<div>
						<code>http://geoul.viento.me</code>
						<code>https://geoul.viento.me</code>
						<code>http://mirror.viento.me</code>
						<code>https://mirror.viento.me</code>
					</div>
				</section>
				<section>
					<h1>{{$t('net_usage')}}</h1>
					<div>
                        <a href="https://mirror.viento.me/webalizer">{{$t('checkout')}}</a>
                    </div>
				</section>
				<section>
					<h1>{{$t('spec')}}</h1>
					<div>
                        <p>Processor: S922X (ARM Cortex-A73, A53)</p>
                        <p>Memory: 4GiB</p>
                        <p>Storage: 512GiB</p>
                        <p>Network: 1 × 500Mbps</p>
                        <p>Location: Daejeon, South Korea</p>
                    </div>
				</section>
				<section>
					<h1>{{$t('contect_info')}}</h1>
					<div>
                        <p>{{$t('twitter')}}: <a href="https://twitter.com/VientoMirror">@VientoMirror</a></p>
                        <p>{{$t('email')}}: <a href="mailto:op@viento.me">op@viento.me</a></p>
                    </div>
				</section>
			</div>
</template>

<style scoped>
.app a {
	color: var(--primary-color);
}
.app section {
	border-radius: 5px;
	margin: 1.5rem auto;
	padding: 2rem;

	background-color: var(--secondary-color);
}
.app .column {
	flex: 8;
	margin: 1rem;
}
.app .column-side {
	flex: 4;
}
.app .column p {
	margin: 0.6rem 0;
}
.app .server-address div {
	display: flex;
	flex-direction: column;
	padding: 1rem;

	border-radius: 5px;
	background-color: var(--secondary-background-color);
}
.app .server-address code {
	margin: 0.5rem;
	font-family: D2Coding;
}
</style>
